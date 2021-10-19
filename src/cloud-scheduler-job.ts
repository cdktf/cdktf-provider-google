// https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#attempt_deadline CloudSchedulerJob#attempt_deadline}
  */
  readonly attemptDeadline?: string;
  /**
  * A human-readable description for the job. 
This string must not contain more than 500 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#description CloudSchedulerJob#description}
  */
  readonly description?: string;
  /**
  * The name of the job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#name CloudSchedulerJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#project CloudSchedulerJob#project}
  */
  readonly project?: string;
  /**
  * Region where the scheduler job resides. If it is not provided, Terraform will use the provider default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#region CloudSchedulerJob#region}
  */
  readonly region?: string;
  /**
  * Describes the schedule on which the job will be executed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#schedule CloudSchedulerJob#schedule}
  */
  readonly schedule?: string;
  /**
  * Specifies the time zone to be used in interpreting schedule.
The value of this field must be a time zone name from the tz database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#time_zone CloudSchedulerJob#time_zone}
  */
  readonly timeZone?: string;
  /**
  * app_engine_http_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#app_engine_http_target CloudSchedulerJob#app_engine_http_target}
  */
  readonly appEngineHttpTarget?: CloudSchedulerJobAppEngineHttpTarget;
  /**
  * http_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#http_target CloudSchedulerJob#http_target}
  */
  readonly httpTarget?: CloudSchedulerJobHttpTarget;
  /**
  * pubsub_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#pubsub_target CloudSchedulerJob#pubsub_target}
  */
  readonly pubsubTarget?: CloudSchedulerJobPubsubTarget;
  /**
  * retry_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#retry_config CloudSchedulerJob#retry_config}
  */
  readonly retryConfig?: CloudSchedulerJobRetryConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#timeouts CloudSchedulerJob#timeouts}
  */
  readonly timeouts?: CloudSchedulerJobTimeouts;
}
export interface CloudSchedulerJobAppEngineHttpTargetAppEngineRouting {
  /**
  * App instance.
By default, the job is sent to an instance which is available when the job is attempted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#instance CloudSchedulerJob#instance}
  */
  readonly instance?: string;
  /**
  * App service.
By default, the job is sent to the service which is the default service when the job is attempted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#service CloudSchedulerJob#service}
  */
  readonly service?: string;
  /**
  * App version.
By default, the job is sent to the version which is the default version when the job is attempted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#version CloudSchedulerJob#version}
  */
  readonly version?: string;
}

function cloudSchedulerJobAppEngineHttpTargetAppEngineRoutingToTerraform(struct?: CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference | CloudSchedulerJobAppEngineHttpTargetAppEngineRouting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // instance - computed: false, optional: true, required: false
  private _instance?: string | undefined; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string | undefined) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance
  }

  // service - computed: false, optional: true, required: false
  private _service?: string | undefined; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string | undefined) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service
  }

  // version - computed: false, optional: true, required: false
  private _version?: string | undefined; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }
}
export interface CloudSchedulerJobAppEngineHttpTarget {
  /**
  * HTTP request body. 
A request body is allowed only if the HTTP method is POST or PUT. 
It will result in invalid argument error to set a body on a job with an incompatible HttpMethod.

A base64-encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#body CloudSchedulerJob#body}
  */
  readonly body?: string;
  /**
  * HTTP request headers.
This map contains the header field names and values. 
Headers can be set when the job is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#headers CloudSchedulerJob#headers}
  */
  readonly headers?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Which HTTP method to use for the request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#http_method CloudSchedulerJob#http_method}
  */
  readonly httpMethod?: string;
  /**
  * The relative URI.
The relative URL must begin with "/" and must be a valid HTTP relative URL. 
It can contain a path, query string arguments, and \# fragments. 
If the relative URL is empty, then the root path "/" will be used. 
No spaces are allowed, and the maximum length allowed is 2083 characters
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#relative_uri CloudSchedulerJob#relative_uri}
  */
  readonly relativeUri: string;
  /**
  * app_engine_routing block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#app_engine_routing CloudSchedulerJob#app_engine_routing}
  */
  readonly appEngineRouting?: CloudSchedulerJobAppEngineHttpTargetAppEngineRouting;
}

function cloudSchedulerJobAppEngineHttpTargetToTerraform(struct?: CloudSchedulerJobAppEngineHttpTargetOutputReference | CloudSchedulerJobAppEngineHttpTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    headers: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.headers),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    relative_uri: cdktf.stringToTerraform(struct!.relativeUri),
    app_engine_routing: cloudSchedulerJobAppEngineHttpTargetAppEngineRoutingToTerraform(struct!.appEngineRouting),
  }
}

export class CloudSchedulerJobAppEngineHttpTargetOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // body - computed: false, optional: true, required: false
  private _body?: string | undefined; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string | undefined) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get headers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('headers') as any;
  }
  public set headers(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string | undefined; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string | undefined) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod
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
    return this._relativeUri
  }

  // app_engine_routing - computed: false, optional: true, required: false
  private _appEngineRouting?: CloudSchedulerJobAppEngineHttpTargetAppEngineRouting | undefined; 
  private __appEngineRoutingOutput = new CloudSchedulerJobAppEngineHttpTargetAppEngineRoutingOutputReference(this as any, "app_engine_routing", true);
  public get appEngineRouting() {
    return this.__appEngineRoutingOutput;
  }
  public putAppEngineRouting(value: CloudSchedulerJobAppEngineHttpTargetAppEngineRouting | undefined) {
    this._appEngineRouting = value;
  }
  public resetAppEngineRouting() {
    this._appEngineRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appEngineRoutingInput() {
    return this._appEngineRouting
  }
}
export interface CloudSchedulerJobHttpTargetOauthToken {
  /**
  * OAuth scope to be used for generating OAuth access token. If not specified,
"https://www.googleapis.com/auth/cloud-platform" will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#scope CloudSchedulerJob#scope}
  */
  readonly scope?: string;
  /**
  * Service account email to be used for generating OAuth token.
The service account must be within the same project as the job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#service_account_email CloudSchedulerJob#service_account_email}
  */
  readonly serviceAccountEmail: string;
}

function cloudSchedulerJobHttpTargetOauthTokenToTerraform(struct?: CloudSchedulerJobHttpTargetOauthTokenOutputReference | CloudSchedulerJobHttpTargetOauthToken): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
  }
}

export class CloudSchedulerJobHttpTargetOauthTokenOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string | undefined; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string | undefined) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
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
    return this._serviceAccountEmail
  }
}
export interface CloudSchedulerJobHttpTargetOidcToken {
  /**
  * Audience to be used when generating OIDC token. If not specified,
the URI specified in target will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#audience CloudSchedulerJob#audience}
  */
  readonly audience?: string;
  /**
  * Service account email to be used for generating OAuth token.
The service account must be within the same project as the job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#service_account_email CloudSchedulerJob#service_account_email}
  */
  readonly serviceAccountEmail: string;
}

function cloudSchedulerJobHttpTargetOidcTokenToTerraform(struct?: CloudSchedulerJobHttpTargetOidcTokenOutputReference | CloudSchedulerJobHttpTargetOidcToken): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
  }
}

export class CloudSchedulerJobHttpTargetOidcTokenOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string | undefined; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string | undefined) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience
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
    return this._serviceAccountEmail
  }
}
export interface CloudSchedulerJobHttpTarget {
  /**
  * HTTP request body. 
A request body is allowed only if the HTTP method is POST, PUT, or PATCH. 
It is an error to set body on a job with an incompatible HttpMethod.

A base64-encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#body CloudSchedulerJob#body}
  */
  readonly body?: string;
  /**
  * This map contains the header field names and values. 
Repeated headers are not supported, but a header value can contain commas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#headers CloudSchedulerJob#headers}
  */
  readonly headers?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Which HTTP method to use for the request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#http_method CloudSchedulerJob#http_method}
  */
  readonly httpMethod?: string;
  /**
  * The full URI path that the request will be sent to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#uri CloudSchedulerJob#uri}
  */
  readonly uri: string;
  /**
  * oauth_token block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#oauth_token CloudSchedulerJob#oauth_token}
  */
  readonly oauthToken?: CloudSchedulerJobHttpTargetOauthToken;
  /**
  * oidc_token block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#oidc_token CloudSchedulerJob#oidc_token}
  */
  readonly oidcToken?: CloudSchedulerJobHttpTargetOidcToken;
}

function cloudSchedulerJobHttpTargetToTerraform(struct?: CloudSchedulerJobHttpTargetOutputReference | CloudSchedulerJobHttpTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    headers: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.headers),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    uri: cdktf.stringToTerraform(struct!.uri),
    oauth_token: cloudSchedulerJobHttpTargetOauthTokenToTerraform(struct!.oauthToken),
    oidc_token: cloudSchedulerJobHttpTargetOidcTokenToTerraform(struct!.oidcToken),
  }
}

export class CloudSchedulerJobHttpTargetOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // body - computed: false, optional: true, required: false
  private _body?: string | undefined; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string | undefined) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get headers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('headers') as any;
  }
  public set headers(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string | undefined; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string | undefined) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod
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
    return this._uri
  }

  // oauth_token - computed: false, optional: true, required: false
  private _oauthToken?: CloudSchedulerJobHttpTargetOauthToken | undefined; 
  private __oauthTokenOutput = new CloudSchedulerJobHttpTargetOauthTokenOutputReference(this as any, "oauth_token", true);
  public get oauthToken() {
    return this.__oauthTokenOutput;
  }
  public putOauthToken(value: CloudSchedulerJobHttpTargetOauthToken | undefined) {
    this._oauthToken = value;
  }
  public resetOauthToken() {
    this._oauthToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenInput() {
    return this._oauthToken
  }

  // oidc_token - computed: false, optional: true, required: false
  private _oidcToken?: CloudSchedulerJobHttpTargetOidcToken | undefined; 
  private __oidcTokenOutput = new CloudSchedulerJobHttpTargetOidcTokenOutputReference(this as any, "oidc_token", true);
  public get oidcToken() {
    return this.__oidcTokenOutput;
  }
  public putOidcToken(value: CloudSchedulerJobHttpTargetOidcToken | undefined) {
    this._oidcToken = value;
  }
  public resetOidcToken() {
    this._oidcToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTokenInput() {
    return this._oidcToken
  }
}
export interface CloudSchedulerJobPubsubTarget {
  /**
  * Attributes for PubsubMessage.
Pubsub message must contain either non-empty data, or at least one attribute.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#attributes CloudSchedulerJob#attributes}
  */
  readonly attributes?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The message payload for PubsubMessage.
Pubsub message must contain either non-empty data, or at least one attribute.

 A base64-encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#data CloudSchedulerJob#data}
  */
  readonly data?: string;
  /**
  * The full resource name for the Cloud Pub/Sub topic to which
messages will be published when a job is delivered. ~>**NOTE:**
The topic name must be in the same format as required by PubSub's
PublishRequest.name, e.g. 'projects/my-project/topics/my-topic'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#topic_name CloudSchedulerJob#topic_name}
  */
  readonly topicName: string;
}

function cloudSchedulerJobPubsubTargetToTerraform(struct?: CloudSchedulerJobPubsubTargetOutputReference | CloudSchedulerJobPubsubTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.attributes),
    data: cdktf.stringToTerraform(struct!.data),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
  }
}

export class CloudSchedulerJobPubsubTargetOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get attributes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('attributes') as any;
  }
  public set attributes(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes
  }

  // data - computed: false, optional: true, required: false
  private _data?: string | undefined; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string | undefined) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data
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
    return this._topicName
  }
}
export interface CloudSchedulerJobRetryConfig {
  /**
  * The maximum amount of time to wait before retrying a job after it fails.
A duration in seconds with up to nine fractional digits, terminated by 's'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#max_backoff_duration CloudSchedulerJob#max_backoff_duration}
  */
  readonly maxBackoffDuration?: string;
  /**
  * The time between retries will double maxDoublings times.
A job's retry interval starts at minBackoffDuration, 
then doubles maxDoublings times, then increases linearly, 
and finally retries retries at intervals of maxBackoffDuration up to retryCount times.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#max_doublings CloudSchedulerJob#max_doublings}
  */
  readonly maxDoublings?: number;
  /**
  * The time limit for retrying a failed job, measured from time when an execution was first attempted. 
If specified with retryCount, the job will be retried until both limits are reached.
A duration in seconds with up to nine fractional digits, terminated by 's'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#max_retry_duration CloudSchedulerJob#max_retry_duration}
  */
  readonly maxRetryDuration?: string;
  /**
  * The minimum amount of time to wait before retrying a job after it fails.
A duration in seconds with up to nine fractional digits, terminated by 's'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#min_backoff_duration CloudSchedulerJob#min_backoff_duration}
  */
  readonly minBackoffDuration?: string;
  /**
  * The number of attempts that the system will make to run a 
job using the exponential backoff procedure described by maxDoublings.
Values greater than 5 and negative values are not allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#retry_count CloudSchedulerJob#retry_count}
  */
  readonly retryCount?: number;
}

function cloudSchedulerJobRetryConfigToTerraform(struct?: CloudSchedulerJobRetryConfigOutputReference | CloudSchedulerJobRetryConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max_backoff_duration - computed: true, optional: true, required: false
  private _maxBackoffDuration?: string | undefined; 
  public get maxBackoffDuration() {
    return this.getStringAttribute('max_backoff_duration');
  }
  public set maxBackoffDuration(value: string | undefined) {
    this._maxBackoffDuration = value;
  }
  public resetMaxBackoffDuration() {
    this._maxBackoffDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackoffDurationInput() {
    return this._maxBackoffDuration
  }

  // max_doublings - computed: true, optional: true, required: false
  private _maxDoublings?: number | undefined; 
  public get maxDoublings() {
    return this.getNumberAttribute('max_doublings');
  }
  public set maxDoublings(value: number | undefined) {
    this._maxDoublings = value;
  }
  public resetMaxDoublings() {
    this._maxDoublings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDoublingsInput() {
    return this._maxDoublings
  }

  // max_retry_duration - computed: true, optional: true, required: false
  private _maxRetryDuration?: string | undefined; 
  public get maxRetryDuration() {
    return this.getStringAttribute('max_retry_duration');
  }
  public set maxRetryDuration(value: string | undefined) {
    this._maxRetryDuration = value;
  }
  public resetMaxRetryDuration() {
    this._maxRetryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryDurationInput() {
    return this._maxRetryDuration
  }

  // min_backoff_duration - computed: true, optional: true, required: false
  private _minBackoffDuration?: string | undefined; 
  public get minBackoffDuration() {
    return this.getStringAttribute('min_backoff_duration');
  }
  public set minBackoffDuration(value: string | undefined) {
    this._minBackoffDuration = value;
  }
  public resetMinBackoffDuration() {
    this._minBackoffDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBackoffDurationInput() {
    return this._minBackoffDuration
  }

  // retry_count - computed: true, optional: true, required: false
  private _retryCount?: number | undefined; 
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }
  public set retryCount(value: number | undefined) {
    this._retryCount = value;
  }
  public resetRetryCount() {
    this._retryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryCountInput() {
    return this._retryCount
  }
}
export interface CloudSchedulerJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#create CloudSchedulerJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#delete CloudSchedulerJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html#update CloudSchedulerJob#update}
  */
  readonly update?: string;
}

function cloudSchedulerJobTimeoutsToTerraform(struct?: CloudSchedulerJobTimeoutsOutputReference | CloudSchedulerJobTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html google_cloud_scheduler_job}
*/
export class CloudSchedulerJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_cloud_scheduler_job";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/cloud_scheduler_job.html google_cloud_scheduler_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudSchedulerJobConfig
  */
  public constructor(scope: Construct, id: string, config: CloudSchedulerJobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_scheduler_job',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._attemptDeadline = config.attemptDeadline;
    this._description = config.description;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._schedule = config.schedule;
    this._timeZone = config.timeZone;
    this._appEngineHttpTarget = config.appEngineHttpTarget;
    this._httpTarget = config.httpTarget;
    this._pubsubTarget = config.pubsubTarget;
    this._retryConfig = config.retryConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attempt_deadline - computed: false, optional: true, required: false
  private _attemptDeadline?: string | undefined; 
  public get attemptDeadline() {
    return this.getStringAttribute('attempt_deadline');
  }
  public set attemptDeadline(value: string | undefined) {
    this._attemptDeadline = value;
  }
  public resetAttemptDeadline() {
    this._attemptDeadline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptDeadlineInput() {
    return this._attemptDeadline
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._name
  }

  // project - computed: true, optional: true, required: false
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // region - computed: true, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string | undefined; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string | undefined) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string | undefined; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string | undefined) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone
  }

  // app_engine_http_target - computed: false, optional: true, required: false
  private _appEngineHttpTarget?: CloudSchedulerJobAppEngineHttpTarget | undefined; 
  private __appEngineHttpTargetOutput = new CloudSchedulerJobAppEngineHttpTargetOutputReference(this as any, "app_engine_http_target", true);
  public get appEngineHttpTarget() {
    return this.__appEngineHttpTargetOutput;
  }
  public putAppEngineHttpTarget(value: CloudSchedulerJobAppEngineHttpTarget | undefined) {
    this._appEngineHttpTarget = value;
  }
  public resetAppEngineHttpTarget() {
    this._appEngineHttpTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appEngineHttpTargetInput() {
    return this._appEngineHttpTarget
  }

  // http_target - computed: false, optional: true, required: false
  private _httpTarget?: CloudSchedulerJobHttpTarget | undefined; 
  private __httpTargetOutput = new CloudSchedulerJobHttpTargetOutputReference(this as any, "http_target", true);
  public get httpTarget() {
    return this.__httpTargetOutput;
  }
  public putHttpTarget(value: CloudSchedulerJobHttpTarget | undefined) {
    this._httpTarget = value;
  }
  public resetHttpTarget() {
    this._httpTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTargetInput() {
    return this._httpTarget
  }

  // pubsub_target - computed: false, optional: true, required: false
  private _pubsubTarget?: CloudSchedulerJobPubsubTarget | undefined; 
  private __pubsubTargetOutput = new CloudSchedulerJobPubsubTargetOutputReference(this as any, "pubsub_target", true);
  public get pubsubTarget() {
    return this.__pubsubTargetOutput;
  }
  public putPubsubTarget(value: CloudSchedulerJobPubsubTarget | undefined) {
    this._pubsubTarget = value;
  }
  public resetPubsubTarget() {
    this._pubsubTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubTargetInput() {
    return this._pubsubTarget
  }

  // retry_config - computed: false, optional: true, required: false
  private _retryConfig?: CloudSchedulerJobRetryConfig | undefined; 
  private __retryConfigOutput = new CloudSchedulerJobRetryConfigOutputReference(this as any, "retry_config", true);
  public get retryConfig() {
    return this.__retryConfigOutput;
  }
  public putRetryConfig(value: CloudSchedulerJobRetryConfig | undefined) {
    this._retryConfig = value;
  }
  public resetRetryConfig() {
    this._retryConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConfigInput() {
    return this._retryConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudSchedulerJobTimeouts | undefined; 
  private __timeoutsOutput = new CloudSchedulerJobTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: CloudSchedulerJobTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attempt_deadline: cdktf.stringToTerraform(this._attemptDeadline),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      schedule: cdktf.stringToTerraform(this._schedule),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      app_engine_http_target: cloudSchedulerJobAppEngineHttpTargetToTerraform(this._appEngineHttpTarget),
      http_target: cloudSchedulerJobHttpTargetToTerraform(this._httpTarget),
      pubsub_target: cloudSchedulerJobPubsubTargetToTerraform(this._pubsubTarget),
      retry_config: cloudSchedulerJobRetryConfigToTerraform(this._retryConfig),
      timeouts: cloudSchedulerJobTimeoutsToTerraform(this._timeouts),
    };
  }
}
