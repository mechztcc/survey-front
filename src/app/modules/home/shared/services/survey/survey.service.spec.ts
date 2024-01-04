import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SurveyService } from './survey.service';

describe('SurveyService', () => {
  let service: SurveyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SurveyService],
    });
    service = TestBed.inject(SurveyService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should create a survey', () => {
    const mockPayload = { question: 'Test question', expiresAt: new Date() };
    const mockResponse = {
      id: 1,
      ...mockPayload,
      createdAt: '2024-01-04T12:00:00Z', 
      updatedAt: '2024-01-04T12:00:00Z',
    };

    service.onCreate(mockPayload).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('survey');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });
});
