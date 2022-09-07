// https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudSchedulerJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * The deadline for job attempts. If the request handler does not respond by this deadline then the request is
cancelled and the attempt is marked as a DEADLINE_EXCEEDED failure. The failed attempt can be viewed in
execution logs. Cloud Scheduler will retry the job according to the RetryConfig.
The allowed duration for this deadline is:
* For HTTP targets, between 15 seconds and 30 minutes.
* For App Engine HTTP targets, between 15 seconds and 24 hours.
* **Note**: For PubSub targets, this field is ignored - setting it will introduce an unresolvable diff.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#attempt_deadline CloudSchedulerJob#attempt_deadline}
  */
  readonly attemptDeadline?: string;
  /**
  * A human-readable description for the job. 
This string must not contain more than 500 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#description CloudSchedulerJob#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#id CloudSchedulerJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#name CloudSchedulerJob#name}
  */
  readonly name: string;
  /**
  * Sets the job to a paused state. Jobs default to being enabled when this property is not set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#paused CloudSchedulerJob#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#project CloudSchedulerJob#project}
  */
  readonly project?: string;
  /**
  * Region where the scheduler job resides. If it is not provided, Terraform will use the provider default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#region CloudSchedulerJob#region}
  */
  readonly region?: string;
  /**
  * Describes the schedule on which the job will be executed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#schedule CloudSchedulerJob#schedule}
  */
  readonly schedule?: string;
  /**
  * Specifies the time zone to be used in interpreting schedule.
The value of this field must be a time zone name from the tz database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#time_zone CloudSchedulerJob#time_zone}
  */
  readonly timeZone?: string;
  /**
  * app_engine_http_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#app_engine_http_target CloudSchedulerJob#app_engine_http_target}
  */
  readonly appEngineHttpTarget?: CloudSchedulerJobAppEngineHttpTarget;
  /**
  * http_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#http_target CloudSchedulerJob#http_target}
  */
  readonly httpTarget?: CloudSchedulerJobHttpTarget;
  /**
  * pubsub_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#pubsub_target CloudSchedulerJob#pubsub_target}
  */
  readonly pubsubTarget?: CloudSchedulerJobPubsubTarget;
  /**
  * retry_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#retry_config CloudSchedulerJob#retry_config}
  */
  readonly retryConfig?: CloudSchedulerJobRetryConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#timeouts CloudSchedulerJob#timeouts}
  */
  readonly timeouts?: CloudSchedulerJobTimeouts;
}
export interface CloudSchedulerJobAppEngineHttpTargetAppEngineRouting {
  /**
  * App instance.
By default, the job is sent to an instance which is available when the job is attempted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#instance CloudSchedulerJob#instance}
  */
  readonly instance?: string;
  /**
  * App service.
By default, the job is sent to the service which is the default service when the job is attempted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#service CloudSchedulerJob#service}
  */
  readonly service?: string;
  /**
  * App version.
By default, the job is sent to the version which is the default version when the job is attempted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#version CloudSchedulerJob#version}
  */
  readonly version?: string;
}

export function cloudSchedulerJobAppEngineHttpTargetAppEngineRoutingToTerraform(struct?: CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference | CloudSchedulerJobAppEngineHttpTargetAppEngineRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance: cdktf.stringToTerraform(struct!.instance),
    service: cdktf.stringToTerraform(struct!.service),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudSchedulerJobAppEngineHttpTargetAppEngineRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSchedulerJobAppEngineHttpTargetAppEngineRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instance = undefined;
      this._service = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instance = value.instance;
      this._service = value.service;
      this._version = value.version;
    }
  }

  // instance - computed: false, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface CloudSchedulerJobAppEngineHttpTarget {
  /**
  * HTTP request body. 
A request body is allowed only if the HTTP method is POST or PUT. 
It will result in invalid argument error to set a body on a job with an incompatible HttpMethod.

A base64-encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#body CloudSchedulerJob#body}
  */
  readonly body?: string;
  /**
  * HTTP request headers.
This map contains the header field names and values. 
Headers can be set when the job is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#headers CloudSchedulerJob#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Which HTTP method to use for the request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#http_method CloudSchedulerJob#http_method}
  */
  readonly httpMethod?: string;
  /**
  * The relative URI.
The relative URL must begin with "/" and must be a valid HTTP relative URL. 
It can contain a path, query string arguments, and \# fragments. 
If the relative URL is empty, then the root path "/" will be used. 
No spaces are allowed, and the maximum length allowed is 2083 characters
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#relative_uri CloudSchedulerJob#relative_uri}
  */
  readonly relativeUri: string;
  /**
  * app_engine_routing block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#app_engine_routing CloudSchedulerJob#app_engine_routing}
  */
  readonly appEngineRouting?: CloudSchedulerJobAppEngineHttpTargetAppEngineRouting;
}

export function cloudSchedulerJobAppEngineHttpTargetToTerraform(struct?: CloudSchedulerJobAppEngineHttpTargetOutputReference | CloudSchedulerJobAppEngineHttpTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    relative_uri: cdktf.stringToTerraform(struct!.relativeUri),
    app_engine_routing: cloudSchedulerJobAppEngineHttpTargetAppEngineRoutingToTerraform(struct!.appEngineRouting),
  }
}

export class CloudSchedulerJobAppEngineHttpTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudSchedulerJobAppEngineHttpTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._relativeUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeUri = this._relativeUri;
    }
    if (this._appEngineRouting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appEngineRouting = this._appEngineRouting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSchedulerJobAppEngineHttpTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._headers = undefined;
      this._httpMethod = undefined;
      this._relativeUri = undefined;
      this._appEngineRouting.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._headers = value.headers;
      this._httpMethod = value.httpMethod;
      this._relativeUri = value.relativeUri;
      this._appEngineRouting.internalValue = value.appEngineRouting;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // relative_uri - computed: false, optional: false, required: true
  private _relativeUri?: string; 
  public get relativeUri() {
    return this.getStringAttribute('relative_uri');
  }
  public set relativeUri(value: string) {
    this._relativeUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeUriInput() {
    return this._relativeUri;
  }

  // app_engine_routing - computed: false, optional: true, required: false
  private _appEngineRouting = new CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference(this, "app_engine_routing");
  public get appEngineRouting() {
    return this._appEngineRouting;
  }
  public putAppEngineRouting(value: CloudSchedulerJobAppEngineHttpTargetAppEngineRouting) {
    this._appEngineRouting.internalValue = value;
  }
  public resetAppEngineRouting() {
    this._appEngineRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appEngineRoutingInput() {
    return this._appEngineRouting.internalValue;
  }
}
export interface CloudSchedulerJobHttpTargetOauthToken {
  /**
  * OAuth scope to be used for generating OAuth access token. If not specified,
"https://www.googleapis.com/auth/cloud-platform" will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#scope CloudSchedulerJob#scope}
  */
  readonly scope?: string;
  /**
  * Service account email to be used for generating OAuth token.
The service account must be within the same project as the job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#service_account_email CloudSchedulerJob#service_account_email}
  */
  readonly serviceAccountEmail: string;
}

export function cloudSchedulerJobHttpTargetOauthTokenToTerraform(struct?: CloudSchedulerJobHttpTargetOauthTokenOutputReference | CloudSchedulerJobHttpTargetOauthToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
  }
}

export class CloudSchedulerJobHttpTargetOauthTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudSchedulerJobHttpTargetOauthToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSchedulerJobHttpTargetOauthToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scope = undefined;
      this._serviceAccountEmail = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scope = value.scope;
      this._serviceAccountEmail = value.serviceAccountEmail;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }
}
export interface CloudSchedulerJobHttpTargetOidcToken {
  /**
  * Audience to be used when generating OIDC token. If not specified,
the URI specified in target will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#audience CloudSchedulerJob#audience}
  */
  readonly audience?: string;
  /**
  * Service account email to be used for generating OAuth token.
The service account must be within the same project as the job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#service_account_email CloudSchedulerJob#service_account_email}
  */
  readonly serviceAccountEmail: string;
}

export function cloudSchedulerJobHttpTargetOidcTokenToTerraform(struct?: CloudSchedulerJobHttpTargetOidcTokenOutputReference | CloudSchedulerJobHttpTargetOidcToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
  }
}

export class CloudSchedulerJobHttpTargetOidcTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudSchedulerJobHttpTargetOidcToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSchedulerJobHttpTargetOidcToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._serviceAccountEmail = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._serviceAccountEmail = value.serviceAccountEmail;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }
}
export interface CloudSchedulerJobHttpTarget {
  /**
  * HTTP request body. 
A request body is allowed only if the HTTP method is POST, PUT, or PATCH. 
It is an error to set body on a job with an incompatible HttpMethod.

A base64-encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#body CloudSchedulerJob#body}
  */
  readonly body?: string;
  /**
  * This map contains the header field names and values. 
Repeated headers are not supported, but a header value can contain commas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#headers CloudSchedulerJob#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Which HTTP method to use for the request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#http_method CloudSchedulerJob#http_method}
  */
  readonly httpMethod?: string;
  /**
  * The full URI path that the request will be sent to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#uri CloudSchedulerJob#uri}
  */
  readonly uri: string;
  /**
  * oauth_token block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#oauth_token CloudSchedulerJob#oauth_token}
  */
  readonly oauthToken?: CloudSchedulerJobHttpTargetOauthToken;
  /**
  * oidc_token block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#oidc_token CloudSchedulerJob#oidc_token}
  */
  readonly oidcToken?: CloudSchedulerJobHttpTargetOidcToken;
}

export function cloudSchedulerJobHttpTargetToTerraform(struct?: CloudSchedulerJobHttpTargetOutputReference | CloudSchedulerJobHttpTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    uri: cdktf.stringToTerraform(struct!.uri),
    oauth_token: cloudSchedulerJobHttpTargetOauthTokenToTerraform(struct!.oauthToken),
    oidc_token: cloudSchedulerJobHttpTargetOidcTokenToTerraform(struct!.oidcToken),
  }
}

export class CloudSchedulerJobHttpTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudSchedulerJobHttpTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._oauthToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthToken = this._oauthToken?.internalValue;
    }
    if (this._oidcToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcToken = this._oidcToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSchedulerJobHttpTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._headers = undefined;
      this._httpMethod = undefined;
      this._uri = undefined;
      this._oauthToken.internalValue = undefined;
      this._oidcToken.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._headers = value.headers;
      this._httpMethod = value.httpMethod;
      this._uri = value.uri;
      this._oauthToken.internalValue = value.oauthToken;
      this._oidcToken.internalValue = value.oidcToken;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // oauth_token - computed: false, optional: true, required: false
  private _oauthToken = new CloudSchedulerJobHttpTargetOauthTokenOutputReference(this, "oauth_token");
  public get oauthToken() {
    return this._oauthToken;
  }
  public putOauthToken(value: CloudSchedulerJobHttpTargetOauthToken) {
    this._oauthToken.internalValue = value;
  }
  public resetOauthToken() {
    this._oauthToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenInput() {
    return this._oauthToken.internalValue;
  }

  // oidc_token - computed: false, optional: true, required: false
  private _oidcToken = new CloudSchedulerJobHttpTargetOidcTokenOutputReference(this, "oidc_token");
  public get oidcToken() {
    return this._oidcToken;
  }
  public putOidcToken(value: CloudSchedulerJobHttpTargetOidcToken) {
    this._oidcToken.internalValue = value;
  }
  public resetOidcToken() {
    this._oidcToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTokenInput() {
    return this._oidcToken.internalValue;
  }
}
export interface CloudSchedulerJobPubsubTarget {
  /**
  * Attributes for PubsubMessage.
Pubsub message must contain either non-empty data, or at least one attribute.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#attributes CloudSchedulerJob#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * The message payload for PubsubMessage.
Pubsub message must contain either non-empty data, or at least one attribute.

 A base64-encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#data CloudSchedulerJob#data}
  */
  readonly data?: string;
  /**
  * The full resource name for the Cloud Pub/Sub topic to which
messages will be published when a job is delivered. ~>**NOTE:**
The topic name must be in the same format as required by PubSub's
PublishRequest.name, e.g. 'projects/my-project/topics/my-topic'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#topic_name CloudSchedulerJob#topic_name}
  */
  readonly topicName: string;
}

export function cloudSchedulerJobPubsubTargetToTerraform(struct?: CloudSchedulerJobPubsubTargetOutputReference | CloudSchedulerJobPubsubTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    data: cdktf.stringToTerraform(struct!.data),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
  }
}

export class CloudSchedulerJobPubsubTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudSchedulerJobPubsubTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSchedulerJobPubsubTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributes = undefined;
      this._data = undefined;
      this._topicName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributes = value.attributes;
      this._data = value.data;
      this._topicName = value.topicName;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }
}
export interface CloudSchedulerJobRetryConfig {
  /**
  * The maximum amount of time to wait before retrying a job after it fails.
A duration in seconds with up to nine fractional digits, terminated by 's'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#max_backoff_duration CloudSchedulerJob#max_backoff_duration}
  */
  readonly maxBackoffDuration?: string;
  /**
  * The time between retries will double maxDoublings times.
A job's retry interval starts at minBackoffDuration, 
then doubles maxDoublings times, then increases linearly, 
and finally retries retries at intervals of maxBackoffDuration up to retryCount times.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#max_doublings CloudSchedulerJob#max_doublings}
  */
  readonly maxDoublings?: number;
  /**
  * The time limit for retrying a failed job, measured from time when an execution was first attempted. 
If specified with retryCount, the job will be retried until both limits are reached.
A duration in seconds with up to nine fractional digits, terminated by 's'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#max_retry_duration CloudSchedulerJob#max_retry_duration}
  */
  readonly maxRetryDuration?: string;
  /**
  * The minimum amount of time to wait before retrying a job after it fails.
A duration in seconds with up to nine fractional digits, terminated by 's'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#min_backoff_duration CloudSchedulerJob#min_backoff_duration}
  */
  readonly minBackoffDuration?: string;
  /**
  * The number of attempts that the system will make to run a 
job using the exponential backoff procedure described by maxDoublings.
Values greater than 5 and negative values are not allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#retry_count CloudSchedulerJob#retry_count}
  */
  readonly retryCount?: number;
}

export function cloudSchedulerJobRetryConfigToTerraform(struct?: CloudSchedulerJobRetryConfigOutputReference | CloudSchedulerJobRetryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_backoff_duration: cdktf.stringToTerraform(struct!.maxBackoffDuration),
    max_doublings: cdktf.numberToTerraform(struct!.maxDoublings),
    max_retry_duration: cdktf.stringToTerraform(struct!.maxRetryDuration),
    min_backoff_duration: cdktf.stringToTerraform(struct!.minBackoffDuration),
    retry_count: cdktf.numberToTerraform(struct!.retryCount),
  }
}

export class CloudSchedulerJobRetryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudSchedulerJobRetryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBackoffDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBackoffDuration = this._maxBackoffDuration;
    }
    if (this._maxDoublings !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDoublings = this._maxDoublings;
    }
    if (this._maxRetryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetryDuration = this._maxRetryDuration;
    }
    if (this._minBackoffDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.minBackoffDuration = this._minBackoffDuration;
    }
    if (this._retryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryCount = this._retryCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSchedulerJobRetryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxBackoffDuration = undefined;
      this._maxDoublings = undefined;
      this._maxRetryDuration = undefined;
      this._minBackoffDuration = undefined;
      this._retryCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxBackoffDuration = value.maxBackoffDuration;
      this._maxDoublings = value.maxDoublings;
      this._maxRetryDuration = value.maxRetryDuration;
      this._minBackoffDuration = value.minBackoffDuration;
      this._retryCount = value.retryCount;
    }
  }

  // max_backoff_duration - computed: true, optional: true, required: false
  private _maxBackoffDuration?: string; 
  public get maxBackoffDuration() {
    return this.getStringAttribute('max_backoff_duration');
  }
  public set maxBackoffDuration(value: string) {
    this._maxBackoffDuration = value;
  }
  public resetMaxBackoffDuration() {
    this._maxBackoffDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackoffDurationInput() {
    return this._maxBackoffDuration;
  }

  // max_doublings - computed: true, optional: true, required: false
  private _maxDoublings?: number; 
  public get maxDoublings() {
    return this.getNumberAttribute('max_doublings');
  }
  public set maxDoublings(value: number) {
    this._maxDoublings = value;
  }
  public resetMaxDoublings() {
    this._maxDoublings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDoublingsInput() {
    return this._maxDoublings;
  }

  // max_retry_duration - computed: true, optional: true, required: false
  private _maxRetryDuration?: string; 
  public get maxRetryDuration() {
    return this.getStringAttribute('max_retry_duration');
  }
  public set maxRetryDuration(value: string) {
    this._maxRetryDuration = value;
  }
  public resetMaxRetryDuration() {
    this._maxRetryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryDurationInput() {
    return this._maxRetryDuration;
  }

  // min_backoff_duration - computed: true, optional: true, required: false
  private _minBackoffDuration?: string; 
  public get minBackoffDuration() {
    return this.getStringAttribute('min_backoff_duration');
  }
  public set minBackoffDuration(value: string) {
    this._minBackoffDuration = value;
  }
  public resetMinBackoffDuration() {
    this._minBackoffDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBackoffDurationInput() {
    return this._minBackoffDuration;
  }

  // retry_count - computed: true, optional: true, required: false
  private _retryCount?: number; 
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }
  public set retryCount(value: number) {
    this._retryCount = value;
  }
  public resetRetryCount() {
    this._retryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryCountInput() {
    return this._retryCount;
  }
}
export interface CloudSchedulerJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#create CloudSchedulerJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#delete CloudSchedulerJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job#update CloudSchedulerJob#update}
  */
  readonly update?: string;
}

export function cloudSchedulerJobTimeoutsToTerraform(struct?: CloudSchedulerJobTimeoutsOutputReference | CloudSchedulerJobTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class CloudSchedulerJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudSchedulerJobTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSchedulerJobTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job google_cloud_scheduler_job}
*/
export class CloudSchedulerJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloud_scheduler_job";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job google_cloud_scheduler_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudSchedulerJobConfig
  */
  public constructor(scope: Construct, id: string, config: CloudSchedulerJobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_scheduler_job',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attemptDeadline = config.attemptDeadline;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._paused = config.paused;
    this._project = config.project;
    this._region = config.region;
    this._schedule = config.schedule;
    this._timeZone = config.timeZone;
    this._appEngineHttpTarget.internalValue = config.appEngineHttpTarget;
    this._httpTarget.internalValue = config.httpTarget;
    this._pubsubTarget.internalValue = config.pubsubTarget;
    this._retryConfig.internalValue = config.retryConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attempt_deadline - computed: false, optional: true, required: false
  private _attemptDeadline?: string; 
  public get attemptDeadline() {
    return this.getStringAttribute('attempt_deadline');
  }
  public set attemptDeadline(value: string) {
    this._attemptDeadline = value;
  }
  public resetAttemptDeadline() {
    this._attemptDeadline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptDeadlineInput() {
    return this._attemptDeadline;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // paused - computed: true, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // app_engine_http_target - computed: false, optional: true, required: false
  private _appEngineHttpTarget = new CloudSchedulerJobAppEngineHttpTargetOutputReference(this, "app_engine_http_target");
  public get appEngineHttpTarget() {
    return this._appEngineHttpTarget;
  }
  public putAppEngineHttpTarget(value: CloudSchedulerJobAppEngineHttpTarget) {
    this._appEngineHttpTarget.internalValue = value;
  }
  public resetAppEngineHttpTarget() {
    this._appEngineHttpTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appEngineHttpTargetInput() {
    return this._appEngineHttpTarget.internalValue;
  }

  // http_target - computed: false, optional: true, required: false
  private _httpTarget = new CloudSchedulerJobHttpTargetOutputReference(this, "http_target");
  public get httpTarget() {
    return this._httpTarget;
  }
  public putHttpTarget(value: CloudSchedulerJobHttpTarget) {
    this._httpTarget.internalValue = value;
  }
  public resetHttpTarget() {
    this._httpTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTargetInput() {
    return this._httpTarget.internalValue;
  }

  // pubsub_target - computed: false, optional: true, required: false
  private _pubsubTarget = new CloudSchedulerJobPubsubTargetOutputReference(this, "pubsub_target");
  public get pubsubTarget() {
    return this._pubsubTarget;
  }
  public putPubsubTarget(value: CloudSchedulerJobPubsubTarget) {
    this._pubsubTarget.internalValue = value;
  }
  public resetPubsubTarget() {
    this._pubsubTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubTargetInput() {
    return this._pubsubTarget.internalValue;
  }

  // retry_config - computed: false, optional: true, required: false
  private _retryConfig = new CloudSchedulerJobRetryConfigOutputReference(this, "retry_config");
  public get retryConfig() {
    return this._retryConfig;
  }
  public putRetryConfig(value: CloudSchedulerJobRetryConfig) {
    this._retryConfig.internalValue = value;
  }
  public resetRetryConfig() {
    this._retryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConfigInput() {
    return this._retryConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudSchedulerJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudSchedulerJobTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attempt_deadline: cdktf.stringToTerraform(this._attemptDeadline),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      paused: cdktf.booleanToTerraform(this._paused),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      schedule: cdktf.stringToTerraform(this._schedule),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      app_engine_http_target: cloudSchedulerJobAppEngineHttpTargetToTerraform(this._appEngineHttpTarget.internalValue),
      http_target: cloudSchedulerJobHttpTargetToTerraform(this._httpTarget.internalValue),
      pubsub_target: cloudSchedulerJobPubsubTargetToTerraform(this._pubsubTarget.internalValue),
      retry_config: cloudSchedulerJobRetryConfigToTerraform(this._retryConfig.internalValue),
      timeouts: cloudSchedulerJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
