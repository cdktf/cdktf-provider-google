/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudTasksQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#id CloudTasksQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#location CloudTasksQueue#location}
  */
  readonly location: string;
  /**
  * The queue name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#name CloudTasksQueue#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#project CloudTasksQueue#project}
  */
  readonly project?: string;
  /**
  * app_engine_routing_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#app_engine_routing_override CloudTasksQueue#app_engine_routing_override}
  */
  readonly appEngineRoutingOverride?: CloudTasksQueueAppEngineRoutingOverride;
  /**
  * http_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#http_target CloudTasksQueue#http_target}
  */
  readonly httpTarget?: CloudTasksQueueHttpTarget;
  /**
  * rate_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#rate_limits CloudTasksQueue#rate_limits}
  */
  readonly rateLimits?: CloudTasksQueueRateLimits;
  /**
  * retry_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#retry_config CloudTasksQueue#retry_config}
  */
  readonly retryConfig?: CloudTasksQueueRetryConfig;
  /**
  * stackdriver_logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#stackdriver_logging_config CloudTasksQueue#stackdriver_logging_config}
  */
  readonly stackdriverLoggingConfig?: CloudTasksQueueStackdriverLoggingConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#timeouts CloudTasksQueue#timeouts}
  */
  readonly timeouts?: CloudTasksQueueTimeouts;
}
export interface CloudTasksQueueAppEngineRoutingOverride {
  /**
  * App instance.
  * 
  * By default, the task is sent to an instance which is available when the task is attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#instance CloudTasksQueue#instance}
  */
  readonly instance?: string;
  /**
  * App service.
  * 
  * By default, the task is sent to the service which is the default service when the task is attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#service CloudTasksQueue#service}
  */
  readonly service?: string;
  /**
  * App version.
  * 
  * By default, the task is sent to the version which is the default version when the task is attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#version CloudTasksQueue#version}
  */
  readonly version?: string;
}

export function cloudTasksQueueAppEngineRoutingOverrideToTerraform(struct?: CloudTasksQueueAppEngineRoutingOverrideOutputReference | CloudTasksQueueAppEngineRoutingOverride): any {
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


export function cloudTasksQueueAppEngineRoutingOverrideToHclTerraform(struct?: CloudTasksQueueAppEngineRoutingOverrideOutputReference | CloudTasksQueueAppEngineRoutingOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance: {
      value: cdktf.stringToHclTerraform(struct!.instance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudTasksQueueAppEngineRoutingOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTasksQueueAppEngineRoutingOverride | undefined {
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

  public set internalValue(value: CloudTasksQueueAppEngineRoutingOverride | undefined) {
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

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
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
export interface CloudTasksQueueHttpTargetHeaderOverridesHeader {
  /**
  * The Key of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#key CloudTasksQueue#key}
  */
  readonly key: string;
  /**
  * The Value of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#value CloudTasksQueue#value}
  */
  readonly value: string;
}

export function cloudTasksQueueHttpTargetHeaderOverridesHeaderToTerraform(struct?: CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference | CloudTasksQueueHttpTargetHeaderOverridesHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudTasksQueueHttpTargetHeaderOverridesHeaderToHclTerraform(struct?: CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference | CloudTasksQueueHttpTargetHeaderOverridesHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTasksQueueHttpTargetHeaderOverridesHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudTasksQueueHttpTargetHeaderOverridesHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CloudTasksQueueHttpTargetHeaderOverrides {
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#header CloudTasksQueue#header}
  */
  readonly header: CloudTasksQueueHttpTargetHeaderOverridesHeader;
}

export function cloudTasksQueueHttpTargetHeaderOverridesToTerraform(struct?: CloudTasksQueueHttpTargetHeaderOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cloudTasksQueueHttpTargetHeaderOverridesHeaderToTerraform(struct!.header),
  }
}


export function cloudTasksQueueHttpTargetHeaderOverridesToHclTerraform(struct?: CloudTasksQueueHttpTargetHeaderOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cloudTasksQueueHttpTargetHeaderOverridesHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "CloudTasksQueueHttpTargetHeaderOverridesHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudTasksQueueHttpTargetHeaderOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CloudTasksQueueHttpTargetHeaderOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudTasksQueueHttpTargetHeaderOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header.internalValue = value.header;
    }
  }

  // header - computed: false, optional: false, required: true
  private _header = new CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: CloudTasksQueueHttpTargetHeaderOverridesHeader) {
    this._header.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}

export class CloudTasksQueueHttpTargetHeaderOverridesList extends cdktf.ComplexList {
  public internalValue? : CloudTasksQueueHttpTargetHeaderOverrides[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudTasksQueueHttpTargetHeaderOverridesOutputReference {
    return new CloudTasksQueueHttpTargetHeaderOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudTasksQueueHttpTargetOauthToken {
  /**
  * OAuth scope to be used for generating OAuth access token.
  * If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#scope CloudTasksQueue#scope}
  */
  readonly scope?: string;
  /**
  * Service account email to be used for generating OAuth token.
  * The service account must be within the same project as the queue.
  * The caller must have iam.serviceAccounts.actAs permission for the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#service_account_email CloudTasksQueue#service_account_email}
  */
  readonly serviceAccountEmail: string;
}

export function cloudTasksQueueHttpTargetOauthTokenToTerraform(struct?: CloudTasksQueueHttpTargetOauthTokenOutputReference | CloudTasksQueueHttpTargetOauthToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
  }
}


export function cloudTasksQueueHttpTargetOauthTokenToHclTerraform(struct?: CloudTasksQueueHttpTargetOauthTokenOutputReference | CloudTasksQueueHttpTargetOauthToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudTasksQueueHttpTargetOauthTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTasksQueueHttpTargetOauthToken | undefined {
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

  public set internalValue(value: CloudTasksQueueHttpTargetOauthToken | undefined) {
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

  // scope - computed: true, optional: true, required: false
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
export interface CloudTasksQueueHttpTargetOidcToken {
  /**
  * Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#audience CloudTasksQueue#audience}
  */
  readonly audience?: string;
  /**
  * Service account email to be used for generating OIDC token.
  * The service account must be within the same project as the queue.
  * The caller must have iam.serviceAccounts.actAs permission for the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#service_account_email CloudTasksQueue#service_account_email}
  */
  readonly serviceAccountEmail: string;
}

export function cloudTasksQueueHttpTargetOidcTokenToTerraform(struct?: CloudTasksQueueHttpTargetOidcTokenOutputReference | CloudTasksQueueHttpTargetOidcToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
  }
}


export function cloudTasksQueueHttpTargetOidcTokenToHclTerraform(struct?: CloudTasksQueueHttpTargetOidcTokenOutputReference | CloudTasksQueueHttpTargetOidcToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudTasksQueueHttpTargetOidcTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTasksQueueHttpTargetOidcToken | undefined {
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

  public set internalValue(value: CloudTasksQueueHttpTargetOidcToken | undefined) {
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

  // audience - computed: true, optional: true, required: false
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
export interface CloudTasksQueueHttpTargetUriOverridePathOverride {
  /**
  * The URI path (e.g., /users/1234). Default is an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#path CloudTasksQueue#path}
  */
  readonly path?: string;
}

export function cloudTasksQueueHttpTargetUriOverridePathOverrideToTerraform(struct?: CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference | CloudTasksQueueHttpTargetUriOverridePathOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function cloudTasksQueueHttpTargetUriOverridePathOverrideToHclTerraform(struct?: CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference | CloudTasksQueueHttpTargetUriOverridePathOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTasksQueueHttpTargetUriOverridePathOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudTasksQueueHttpTargetUriOverridePathOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
    }
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface CloudTasksQueueHttpTargetUriOverrideQueryOverride {
  /**
  * The query parameters (e.g., qparam1=123&qparam2=456). Default is an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#query_params CloudTasksQueue#query_params}
  */
  readonly queryParams?: string;
}

export function cloudTasksQueueHttpTargetUriOverrideQueryOverrideToTerraform(struct?: CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference | CloudTasksQueueHttpTargetUriOverrideQueryOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_params: cdktf.stringToTerraform(struct!.queryParams),
  }
}


export function cloudTasksQueueHttpTargetUriOverrideQueryOverrideToHclTerraform(struct?: CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference | CloudTasksQueueHttpTargetUriOverrideQueryOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_params: {
      value: cdktf.stringToHclTerraform(struct!.queryParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTasksQueueHttpTargetUriOverrideQueryOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudTasksQueueHttpTargetUriOverrideQueryOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryParams = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryParams = value.queryParams;
    }
  }

  // query_params - computed: true, optional: true, required: false
  private _queryParams?: string; 
  public get queryParams() {
    return this.getStringAttribute('query_params');
  }
  public set queryParams(value: string) {
    this._queryParams = value;
  }
  public resetQueryParams() {
    this._queryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams;
  }
}
export interface CloudTasksQueueHttpTargetUriOverride {
  /**
  * Host override.
  * 
  * When specified, replaces the host part of the task URL.
  * For example, if the task URL is "https://www.google.com", and host value
  * is set to "example.net", the overridden URI will be changed to "https://example.net".
  * Host value cannot be an empty string (INVALID_ARGUMENT).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#host CloudTasksQueue#host}
  */
  readonly host?: string;
  /**
  * Port override.
  * 
  * When specified, replaces the port part of the task URI.
  * For instance, for a URI http://www.google.com/foo and port=123, the overridden URI becomes http://www.google.com:123/foo.
  * Note that the port value must be a positive integer.
  * Setting the port to 0 (Zero) clears the URI port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#port CloudTasksQueue#port}
  */
  readonly port?: string;
  /**
  * Scheme override.
  * 
  * When specified, the task URI scheme is replaced by the provided value (HTTP or HTTPS). Possible values: ["HTTP", "HTTPS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#scheme CloudTasksQueue#scheme}
  */
  readonly scheme?: string;
  /**
  * URI Override Enforce Mode
  * 
  * When specified, determines the Target UriOverride mode. If not specified, it defaults to ALWAYS. Possible values: ["ALWAYS", "IF_NOT_EXISTS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#uri_override_enforce_mode CloudTasksQueue#uri_override_enforce_mode}
  */
  readonly uriOverrideEnforceMode?: string;
  /**
  * path_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#path_override CloudTasksQueue#path_override}
  */
  readonly pathOverride?: CloudTasksQueueHttpTargetUriOverridePathOverride;
  /**
  * query_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#query_override CloudTasksQueue#query_override}
  */
  readonly queryOverride?: CloudTasksQueueHttpTargetUriOverrideQueryOverride;
}

export function cloudTasksQueueHttpTargetUriOverrideToTerraform(struct?: CloudTasksQueueHttpTargetUriOverrideOutputReference | CloudTasksQueueHttpTargetUriOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    uri_override_enforce_mode: cdktf.stringToTerraform(struct!.uriOverrideEnforceMode),
    path_override: cloudTasksQueueHttpTargetUriOverridePathOverrideToTerraform(struct!.pathOverride),
    query_override: cloudTasksQueueHttpTargetUriOverrideQueryOverrideToTerraform(struct!.queryOverride),
  }
}


export function cloudTasksQueueHttpTargetUriOverrideToHclTerraform(struct?: CloudTasksQueueHttpTargetUriOverrideOutputReference | CloudTasksQueueHttpTargetUriOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_override_enforce_mode: {
      value: cdktf.stringToHclTerraform(struct!.uriOverrideEnforceMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_override: {
      value: cloudTasksQueueHttpTargetUriOverridePathOverrideToHclTerraform(struct!.pathOverride),
      isBlock: true,
      type: "list",
      storageClassType: "CloudTasksQueueHttpTargetUriOverridePathOverrideList",
    },
    query_override: {
      value: cloudTasksQueueHttpTargetUriOverrideQueryOverrideToHclTerraform(struct!.queryOverride),
      isBlock: true,
      type: "list",
      storageClassType: "CloudTasksQueueHttpTargetUriOverrideQueryOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudTasksQueueHttpTargetUriOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTasksQueueHttpTargetUriOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._uriOverrideEnforceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriOverrideEnforceMode = this._uriOverrideEnforceMode;
    }
    if (this._pathOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathOverride = this._pathOverride?.internalValue;
    }
    if (this._queryOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryOverride = this._queryOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudTasksQueueHttpTargetUriOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._uriOverrideEnforceMode = undefined;
      this._pathOverride.internalValue = undefined;
      this._queryOverride.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._port = value.port;
      this._scheme = value.scheme;
      this._uriOverrideEnforceMode = value.uriOverrideEnforceMode;
      this._pathOverride.internalValue = value.pathOverride;
      this._queryOverride.internalValue = value.queryOverride;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: true, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // uri_override_enforce_mode - computed: true, optional: true, required: false
  private _uriOverrideEnforceMode?: string; 
  public get uriOverrideEnforceMode() {
    return this.getStringAttribute('uri_override_enforce_mode');
  }
  public set uriOverrideEnforceMode(value: string) {
    this._uriOverrideEnforceMode = value;
  }
  public resetUriOverrideEnforceMode() {
    this._uriOverrideEnforceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriOverrideEnforceModeInput() {
    return this._uriOverrideEnforceMode;
  }

  // path_override - computed: false, optional: true, required: false
  private _pathOverride = new CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference(this, "path_override");
  public get pathOverride() {
    return this._pathOverride;
  }
  public putPathOverride(value: CloudTasksQueueHttpTargetUriOverridePathOverride) {
    this._pathOverride.internalValue = value;
  }
  public resetPathOverride() {
    this._pathOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathOverrideInput() {
    return this._pathOverride.internalValue;
  }

  // query_override - computed: false, optional: true, required: false
  private _queryOverride = new CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference(this, "query_override");
  public get queryOverride() {
    return this._queryOverride;
  }
  public putQueryOverride(value: CloudTasksQueueHttpTargetUriOverrideQueryOverride) {
    this._queryOverride.internalValue = value;
  }
  public resetQueryOverride() {
    this._queryOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryOverrideInput() {
    return this._queryOverride.internalValue;
  }
}
export interface CloudTasksQueueHttpTarget {
  /**
  * The HTTP method to use for the request.
  * 
  * When specified, it overrides HttpRequest for the task.
  * Note that if the value is set to GET the body of the task will be ignored at execution time. Possible values: ["HTTP_METHOD_UNSPECIFIED", "POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#http_method CloudTasksQueue#http_method}
  */
  readonly httpMethod?: string;
  /**
  * header_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#header_overrides CloudTasksQueue#header_overrides}
  */
  readonly headerOverrides?: CloudTasksQueueHttpTargetHeaderOverrides[] | cdktf.IResolvable;
  /**
  * oauth_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#oauth_token CloudTasksQueue#oauth_token}
  */
  readonly oauthToken?: CloudTasksQueueHttpTargetOauthToken;
  /**
  * oidc_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#oidc_token CloudTasksQueue#oidc_token}
  */
  readonly oidcToken?: CloudTasksQueueHttpTargetOidcToken;
  /**
  * uri_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#uri_override CloudTasksQueue#uri_override}
  */
  readonly uriOverride?: CloudTasksQueueHttpTargetUriOverride;
}

export function cloudTasksQueueHttpTargetToTerraform(struct?: CloudTasksQueueHttpTargetOutputReference | CloudTasksQueueHttpTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    header_overrides: cdktf.listMapper(cloudTasksQueueHttpTargetHeaderOverridesToTerraform, true)(struct!.headerOverrides),
    oauth_token: cloudTasksQueueHttpTargetOauthTokenToTerraform(struct!.oauthToken),
    oidc_token: cloudTasksQueueHttpTargetOidcTokenToTerraform(struct!.oidcToken),
    uri_override: cloudTasksQueueHttpTargetUriOverrideToTerraform(struct!.uriOverride),
  }
}


export function cloudTasksQueueHttpTargetToHclTerraform(struct?: CloudTasksQueueHttpTargetOutputReference | CloudTasksQueueHttpTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_overrides: {
      value: cdktf.listMapperHcl(cloudTasksQueueHttpTargetHeaderOverridesToHclTerraform, true)(struct!.headerOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "CloudTasksQueueHttpTargetHeaderOverridesList",
    },
    oauth_token: {
      value: cloudTasksQueueHttpTargetOauthTokenToHclTerraform(struct!.oauthToken),
      isBlock: true,
      type: "list",
      storageClassType: "CloudTasksQueueHttpTargetOauthTokenList",
    },
    oidc_token: {
      value: cloudTasksQueueHttpTargetOidcTokenToHclTerraform(struct!.oidcToken),
      isBlock: true,
      type: "list",
      storageClassType: "CloudTasksQueueHttpTargetOidcTokenList",
    },
    uri_override: {
      value: cloudTasksQueueHttpTargetUriOverrideToHclTerraform(struct!.uriOverride),
      isBlock: true,
      type: "list",
      storageClassType: "CloudTasksQueueHttpTargetUriOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudTasksQueueHttpTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTasksQueueHttpTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._headerOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOverrides = this._headerOverrides?.internalValue;
    }
    if (this._oauthToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthToken = this._oauthToken?.internalValue;
    }
    if (this._oidcToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcToken = this._oidcToken?.internalValue;
    }
    if (this._uriOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriOverride = this._uriOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudTasksQueueHttpTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpMethod = undefined;
      this._headerOverrides.internalValue = undefined;
      this._oauthToken.internalValue = undefined;
      this._oidcToken.internalValue = undefined;
      this._uriOverride.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpMethod = value.httpMethod;
      this._headerOverrides.internalValue = value.headerOverrides;
      this._oauthToken.internalValue = value.oauthToken;
      this._oidcToken.internalValue = value.oidcToken;
      this._uriOverride.internalValue = value.uriOverride;
    }
  }

  // http_method - computed: true, optional: true, required: false
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

  // header_overrides - computed: false, optional: true, required: false
  private _headerOverrides = new CloudTasksQueueHttpTargetHeaderOverridesList(this, "header_overrides", false);
  public get headerOverrides() {
    return this._headerOverrides;
  }
  public putHeaderOverrides(value: CloudTasksQueueHttpTargetHeaderOverrides[] | cdktf.IResolvable) {
    this._headerOverrides.internalValue = value;
  }
  public resetHeaderOverrides() {
    this._headerOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOverridesInput() {
    return this._headerOverrides.internalValue;
  }

  // oauth_token - computed: false, optional: true, required: false
  private _oauthToken = new CloudTasksQueueHttpTargetOauthTokenOutputReference(this, "oauth_token");
  public get oauthToken() {
    return this._oauthToken;
  }
  public putOauthToken(value: CloudTasksQueueHttpTargetOauthToken) {
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
  private _oidcToken = new CloudTasksQueueHttpTargetOidcTokenOutputReference(this, "oidc_token");
  public get oidcToken() {
    return this._oidcToken;
  }
  public putOidcToken(value: CloudTasksQueueHttpTargetOidcToken) {
    this._oidcToken.internalValue = value;
  }
  public resetOidcToken() {
    this._oidcToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTokenInput() {
    return this._oidcToken.internalValue;
  }

  // uri_override - computed: false, optional: true, required: false
  private _uriOverride = new CloudTasksQueueHttpTargetUriOverrideOutputReference(this, "uri_override");
  public get uriOverride() {
    return this._uriOverride;
  }
  public putUriOverride(value: CloudTasksQueueHttpTargetUriOverride) {
    this._uriOverride.internalValue = value;
  }
  public resetUriOverride() {
    this._uriOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriOverrideInput() {
    return this._uriOverride.internalValue;
  }
}
export interface CloudTasksQueueRateLimits {
  /**
  * The maximum number of concurrent tasks that Cloud Tasks allows to
  * be dispatched for this queue. After this threshold has been
  * reached, Cloud Tasks stops dispatching tasks until the number of
  * concurrent requests decreases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#max_concurrent_dispatches CloudTasksQueue#max_concurrent_dispatches}
  */
  readonly maxConcurrentDispatches?: number;
  /**
  * The maximum rate at which tasks are dispatched from this queue.
  * 
  * If unspecified when the queue is created, Cloud Tasks will pick the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#max_dispatches_per_second CloudTasksQueue#max_dispatches_per_second}
  */
  readonly maxDispatchesPerSecond?: number;
}

export function cloudTasksQueueRateLimitsToTerraform(struct?: CloudTasksQueueRateLimitsOutputReference | CloudTasksQueueRateLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_dispatches: cdktf.numberToTerraform(struct!.maxConcurrentDispatches),
    max_dispatches_per_second: cdktf.numberToTerraform(struct!.maxDispatchesPerSecond),
  }
}


export function cloudTasksQueueRateLimitsToHclTerraform(struct?: CloudTasksQueueRateLimitsOutputReference | CloudTasksQueueRateLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrent_dispatches: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentDispatches),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_dispatches_per_second: {
      value: cdktf.numberToHclTerraform(struct!.maxDispatchesPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudTasksQueueRateLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTasksQueueRateLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentDispatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentDispatches = this._maxConcurrentDispatches;
    }
    if (this._maxDispatchesPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDispatchesPerSecond = this._maxDispatchesPerSecond;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudTasksQueueRateLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentDispatches = undefined;
      this._maxDispatchesPerSecond = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentDispatches = value.maxConcurrentDispatches;
      this._maxDispatchesPerSecond = value.maxDispatchesPerSecond;
    }
  }

  // max_burst_size - computed: true, optional: false, required: false
  public get maxBurstSize() {
    return this.getNumberAttribute('max_burst_size');
  }

  // max_concurrent_dispatches - computed: true, optional: true, required: false
  private _maxConcurrentDispatches?: number; 
  public get maxConcurrentDispatches() {
    return this.getNumberAttribute('max_concurrent_dispatches');
  }
  public set maxConcurrentDispatches(value: number) {
    this._maxConcurrentDispatches = value;
  }
  public resetMaxConcurrentDispatches() {
    this._maxConcurrentDispatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentDispatchesInput() {
    return this._maxConcurrentDispatches;
  }

  // max_dispatches_per_second - computed: true, optional: true, required: false
  private _maxDispatchesPerSecond?: number; 
  public get maxDispatchesPerSecond() {
    return this.getNumberAttribute('max_dispatches_per_second');
  }
  public set maxDispatchesPerSecond(value: number) {
    this._maxDispatchesPerSecond = value;
  }
  public resetMaxDispatchesPerSecond() {
    this._maxDispatchesPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDispatchesPerSecondInput() {
    return this._maxDispatchesPerSecond;
  }
}
export interface CloudTasksQueueRetryConfig {
  /**
  * Number of attempts per task.
  * 
  * Cloud Tasks will attempt the task maxAttempts times (that is, if
  * the first attempt fails, then there will be maxAttempts - 1
  * retries). Must be >= -1.
  * 
  * If unspecified when the queue is created, Cloud Tasks will pick
  * the default.
  * 
  * -1 indicates unlimited attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#max_attempts CloudTasksQueue#max_attempts}
  */
  readonly maxAttempts?: number;
  /**
  * A task will be scheduled for retry between minBackoff and
  * maxBackoff duration after it fails, if the queue's RetryConfig
  * specifies that the task should be retried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#max_backoff CloudTasksQueue#max_backoff}
  */
  readonly maxBackoff?: string;
  /**
  * The time between retries will double maxDoublings times.
  * 
  * A task's retry interval starts at minBackoff, then doubles maxDoublings times,
  * then increases linearly, and finally retries retries at intervals of maxBackoff
  * up to maxAttempts times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#max_doublings CloudTasksQueue#max_doublings}
  */
  readonly maxDoublings?: number;
  /**
  * If positive, maxRetryDuration specifies the time limit for
  * retrying a failed task, measured from when the task was first
  * attempted. Once maxRetryDuration time has passed and the task has
  * been attempted maxAttempts times, no further attempts will be
  * made and the task will be deleted.
  * 
  * If zero, then the task age is unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#max_retry_duration CloudTasksQueue#max_retry_duration}
  */
  readonly maxRetryDuration?: string;
  /**
  * A task will be scheduled for retry between minBackoff and
  * maxBackoff duration after it fails, if the queue's RetryConfig
  * specifies that the task should be retried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#min_backoff CloudTasksQueue#min_backoff}
  */
  readonly minBackoff?: string;
}

export function cloudTasksQueueRetryConfigToTerraform(struct?: CloudTasksQueueRetryConfigOutputReference | CloudTasksQueueRetryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
    max_backoff: cdktf.stringToTerraform(struct!.maxBackoff),
    max_doublings: cdktf.numberToTerraform(struct!.maxDoublings),
    max_retry_duration: cdktf.stringToTerraform(struct!.maxRetryDuration),
    min_backoff: cdktf.stringToTerraform(struct!.minBackoff),
  }
}


export function cloudTasksQueueRetryConfigToHclTerraform(struct?: CloudTasksQueueRetryConfigOutputReference | CloudTasksQueueRetryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_backoff: {
      value: cdktf.stringToHclTerraform(struct!.maxBackoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_doublings: {
      value: cdktf.numberToHclTerraform(struct!.maxDoublings),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retry_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxRetryDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_backoff: {
      value: cdktf.stringToHclTerraform(struct!.minBackoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudTasksQueueRetryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTasksQueueRetryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAttempts = this._maxAttempts;
    }
    if (this._maxBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBackoff = this._maxBackoff;
    }
    if (this._maxDoublings !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDoublings = this._maxDoublings;
    }
    if (this._maxRetryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetryDuration = this._maxRetryDuration;
    }
    if (this._minBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.minBackoff = this._minBackoff;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudTasksQueueRetryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxAttempts = undefined;
      this._maxBackoff = undefined;
      this._maxDoublings = undefined;
      this._maxRetryDuration = undefined;
      this._minBackoff = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxAttempts = value.maxAttempts;
      this._maxBackoff = value.maxBackoff;
      this._maxDoublings = value.maxDoublings;
      this._maxRetryDuration = value.maxRetryDuration;
      this._minBackoff = value.minBackoff;
    }
  }

  // max_attempts - computed: true, optional: true, required: false
  private _maxAttempts?: number; 
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
  public set maxAttempts(value: number) {
    this._maxAttempts = value;
  }
  public resetMaxAttempts() {
    this._maxAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsInput() {
    return this._maxAttempts;
  }

  // max_backoff - computed: true, optional: true, required: false
  private _maxBackoff?: string; 
  public get maxBackoff() {
    return this.getStringAttribute('max_backoff');
  }
  public set maxBackoff(value: string) {
    this._maxBackoff = value;
  }
  public resetMaxBackoff() {
    this._maxBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackoffInput() {
    return this._maxBackoff;
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

  // min_backoff - computed: true, optional: true, required: false
  private _minBackoff?: string; 
  public get minBackoff() {
    return this.getStringAttribute('min_backoff');
  }
  public set minBackoff(value: string) {
    this._minBackoff = value;
  }
  public resetMinBackoff() {
    this._minBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBackoffInput() {
    return this._minBackoff;
  }
}
export interface CloudTasksQueueStackdriverLoggingConfig {
  /**
  * Specifies the fraction of operations to write to Stackdriver Logging.
  * This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is the
  * default and means that no operations are logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#sampling_ratio CloudTasksQueue#sampling_ratio}
  */
  readonly samplingRatio: number;
}

export function cloudTasksQueueStackdriverLoggingConfigToTerraform(struct?: CloudTasksQueueStackdriverLoggingConfigOutputReference | CloudTasksQueueStackdriverLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sampling_ratio: cdktf.numberToTerraform(struct!.samplingRatio),
  }
}


export function cloudTasksQueueStackdriverLoggingConfigToHclTerraform(struct?: CloudTasksQueueStackdriverLoggingConfigOutputReference | CloudTasksQueueStackdriverLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sampling_ratio: {
      value: cdktf.numberToHclTerraform(struct!.samplingRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudTasksQueueStackdriverLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTasksQueueStackdriverLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._samplingRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingRatio = this._samplingRatio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudTasksQueueStackdriverLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._samplingRatio = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._samplingRatio = value.samplingRatio;
    }
  }

  // sampling_ratio - computed: false, optional: false, required: true
  private _samplingRatio?: number; 
  public get samplingRatio() {
    return this.getNumberAttribute('sampling_ratio');
  }
  public set samplingRatio(value: number) {
    this._samplingRatio = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRatioInput() {
    return this._samplingRatio;
  }
}
export interface CloudTasksQueueTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#create CloudTasksQueue#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#delete CloudTasksQueue#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#update CloudTasksQueue#update}
  */
  readonly update?: string;
}

export function cloudTasksQueueTimeoutsToTerraform(struct?: CloudTasksQueueTimeouts | cdktf.IResolvable): any {
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


export function cloudTasksQueueTimeoutsToHclTerraform(struct?: CloudTasksQueueTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudTasksQueueTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudTasksQueueTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudTasksQueueTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue google_cloud_tasks_queue}
*/
export class CloudTasksQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloud_tasks_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudTasksQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudTasksQueue to import
  * @param importFromId The id of the existing CloudTasksQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudTasksQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_cloud_tasks_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/cloud_tasks_queue google_cloud_tasks_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudTasksQueueConfig
  */
  public constructor(scope: Construct, id: string, config: CloudTasksQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_tasks_queue',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.35.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._appEngineRoutingOverride.internalValue = config.appEngineRoutingOverride;
    this._httpTarget.internalValue = config.httpTarget;
    this._rateLimits.internalValue = config.rateLimits;
    this._retryConfig.internalValue = config.retryConfig;
    this._stackdriverLoggingConfig.internalValue = config.stackdriverLoggingConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // app_engine_routing_override - computed: false, optional: true, required: false
  private _appEngineRoutingOverride = new CloudTasksQueueAppEngineRoutingOverrideOutputReference(this, "app_engine_routing_override");
  public get appEngineRoutingOverride() {
    return this._appEngineRoutingOverride;
  }
  public putAppEngineRoutingOverride(value: CloudTasksQueueAppEngineRoutingOverride) {
    this._appEngineRoutingOverride.internalValue = value;
  }
  public resetAppEngineRoutingOverride() {
    this._appEngineRoutingOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appEngineRoutingOverrideInput() {
    return this._appEngineRoutingOverride.internalValue;
  }

  // http_target - computed: false, optional: true, required: false
  private _httpTarget = new CloudTasksQueueHttpTargetOutputReference(this, "http_target");
  public get httpTarget() {
    return this._httpTarget;
  }
  public putHttpTarget(value: CloudTasksQueueHttpTarget) {
    this._httpTarget.internalValue = value;
  }
  public resetHttpTarget() {
    this._httpTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTargetInput() {
    return this._httpTarget.internalValue;
  }

  // rate_limits - computed: false, optional: true, required: false
  private _rateLimits = new CloudTasksQueueRateLimitsOutputReference(this, "rate_limits");
  public get rateLimits() {
    return this._rateLimits;
  }
  public putRateLimits(value: CloudTasksQueueRateLimits) {
    this._rateLimits.internalValue = value;
  }
  public resetRateLimits() {
    this._rateLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitsInput() {
    return this._rateLimits.internalValue;
  }

  // retry_config - computed: false, optional: true, required: false
  private _retryConfig = new CloudTasksQueueRetryConfigOutputReference(this, "retry_config");
  public get retryConfig() {
    return this._retryConfig;
  }
  public putRetryConfig(value: CloudTasksQueueRetryConfig) {
    this._retryConfig.internalValue = value;
  }
  public resetRetryConfig() {
    this._retryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConfigInput() {
    return this._retryConfig.internalValue;
  }

  // stackdriver_logging_config - computed: false, optional: true, required: false
  private _stackdriverLoggingConfig = new CloudTasksQueueStackdriverLoggingConfigOutputReference(this, "stackdriver_logging_config");
  public get stackdriverLoggingConfig() {
    return this._stackdriverLoggingConfig;
  }
  public putStackdriverLoggingConfig(value: CloudTasksQueueStackdriverLoggingConfig) {
    this._stackdriverLoggingConfig.internalValue = value;
  }
  public resetStackdriverLoggingConfig() {
    this._stackdriverLoggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackdriverLoggingConfigInput() {
    return this._stackdriverLoggingConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudTasksQueueTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudTasksQueueTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      app_engine_routing_override: cloudTasksQueueAppEngineRoutingOverrideToTerraform(this._appEngineRoutingOverride.internalValue),
      http_target: cloudTasksQueueHttpTargetToTerraform(this._httpTarget.internalValue),
      rate_limits: cloudTasksQueueRateLimitsToTerraform(this._rateLimits.internalValue),
      retry_config: cloudTasksQueueRetryConfigToTerraform(this._retryConfig.internalValue),
      stackdriver_logging_config: cloudTasksQueueStackdriverLoggingConfigToTerraform(this._stackdriverLoggingConfig.internalValue),
      timeouts: cloudTasksQueueTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_engine_routing_override: {
        value: cloudTasksQueueAppEngineRoutingOverrideToHclTerraform(this._appEngineRoutingOverride.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudTasksQueueAppEngineRoutingOverrideList",
      },
      http_target: {
        value: cloudTasksQueueHttpTargetToHclTerraform(this._httpTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudTasksQueueHttpTargetList",
      },
      rate_limits: {
        value: cloudTasksQueueRateLimitsToHclTerraform(this._rateLimits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudTasksQueueRateLimitsList",
      },
      retry_config: {
        value: cloudTasksQueueRetryConfigToHclTerraform(this._retryConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudTasksQueueRetryConfigList",
      },
      stackdriver_logging_config: {
        value: cloudTasksQueueStackdriverLoggingConfigToHclTerraform(this._stackdriverLoggingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudTasksQueueStackdriverLoggingConfigList",
      },
      timeouts: {
        value: cloudTasksQueueTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudTasksQueueTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
