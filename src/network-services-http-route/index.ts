/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkServicesHttpRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * A free-text description of the resource. Max length 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#description NetworkServicesHttpRoute#description}
  */
  readonly description?: string;
  /**
  * Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway.
  * Each gateway reference should match the pattern: projects/* /locations/global/gateways/<gateway_name>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#gateways NetworkServicesHttpRoute#gateways}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly gateways?: string[];
  /**
  * Set of hosts that should match against the HTTP host header to select a HttpRoute to process the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#hostnames NetworkServicesHttpRoute#hostnames}
  */
  readonly hostnames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#id NetworkServicesHttpRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of label tags associated with the HttpRoute resource.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#labels NetworkServicesHttpRoute#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh.
  * Each mesh reference should match the pattern: projects/* /locations/global/meshes/<mesh_name>.
  * The attached Mesh should be of a type SIDECAR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#meshes NetworkServicesHttpRoute#meshes}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly meshes?: string[];
  /**
  * Name of the HttpRoute resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#name NetworkServicesHttpRoute#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#project NetworkServicesHttpRoute#project}
  */
  readonly project?: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#rules NetworkServicesHttpRoute#rules}
  */
  readonly rules: NetworkServicesHttpRouteRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#timeouts NetworkServicesHttpRoute#timeouts}
  */
  readonly timeouts?: NetworkServicesHttpRouteTimeouts;
}
export interface NetworkServicesHttpRouteRulesActionCorsPolicy {
  /**
  * In response to a preflight request, setting this to true indicates that the actual request can include user credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#allow_credentials NetworkServicesHttpRoute#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Specifies the content for Access-Control-Allow-Headers header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#allow_headers NetworkServicesHttpRoute#allow_headers}
  */
  readonly allowHeaders?: string[];
  /**
  * Specifies the content for Access-Control-Allow-Methods header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#allow_methods NetworkServicesHttpRoute#allow_methods}
  */
  readonly allowMethods?: string[];
  /**
  * Specifies the regular expression patterns that match allowed origins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#allow_origin_regexes NetworkServicesHttpRoute#allow_origin_regexes}
  */
  readonly allowOriginRegexes?: string[];
  /**
  * Specifies the list of origins that will be allowed to do CORS requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#allow_origins NetworkServicesHttpRoute#allow_origins}
  */
  readonly allowOrigins?: string[];
  /**
  * If true, the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#disabled NetworkServicesHttpRoute#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the content for Access-Control-Expose-Headers header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#expose_headers NetworkServicesHttpRoute#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Specifies how long result of a preflight request can be cached in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#max_age NetworkServicesHttpRoute#max_age}
  */
  readonly maxAge?: string;
}

export function networkServicesHttpRouteRulesActionCorsPolicyToTerraform(struct?: NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference | NetworkServicesHttpRouteRulesActionCorsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowHeaders),
    allow_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowMethods),
    allow_origin_regexes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOriginRegexes),
    allow_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOrigins),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposeHeaders),
    max_age: cdktf.stringToTerraform(struct!.maxAge),
  }
}


export function networkServicesHttpRouteRulesActionCorsPolicyToHclTerraform(struct?: NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference | NetworkServicesHttpRouteRulesActionCorsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.allowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origin_regexes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOriginRegexes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expose_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposeHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age: {
      value: cdktf.stringToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesHttpRouteRulesActionCorsPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHeaders = this._allowHeaders;
    }
    if (this._allowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMethods = this._allowMethods;
    }
    if (this._allowOriginRegexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOriginRegexes = this._allowOriginRegexes;
    }
    if (this._allowOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigins = this._allowOrigins;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesHttpRouteRulesActionCorsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._allowOriginRegexes = undefined;
      this._allowOrigins = undefined;
      this._disabled = undefined;
      this._exposeHeaders = undefined;
      this._maxAge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCredentials = value.allowCredentials;
      this._allowHeaders = value.allowHeaders;
      this._allowMethods = value.allowMethods;
      this._allowOriginRegexes = value.allowOriginRegexes;
      this._allowOrigins = value.allowOrigins;
      this._disabled = value.disabled;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAge = value.maxAge;
    }
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string[]; 
  public get allowHeaders() {
    return this.getListAttribute('allow_headers');
  }
  public set allowHeaders(value: string[]) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders;
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string[]; 
  public get allowMethods() {
    return this.getListAttribute('allow_methods');
  }
  public set allowMethods(value: string[]) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
  }

  // allow_origin_regexes - computed: false, optional: true, required: false
  private _allowOriginRegexes?: string[]; 
  public get allowOriginRegexes() {
    return this.getListAttribute('allow_origin_regexes');
  }
  public set allowOriginRegexes(value: string[]) {
    this._allowOriginRegexes = value;
  }
  public resetAllowOriginRegexes() {
    this._allowOriginRegexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginRegexesInput() {
    return this._allowOriginRegexes;
  }

  // allow_origins - computed: false, optional: true, required: false
  private _allowOrigins?: string[]; 
  public get allowOrigins() {
    return this.getListAttribute('allow_origins');
  }
  public set allowOrigins(value: string[]) {
    this._allowOrigins = value;
  }
  public resetAllowOrigins() {
    this._allowOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginsInput() {
    return this._allowOrigins;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string[]; 
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }
  public set exposeHeaders(value: string[]) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }
}
export interface NetworkServicesHttpRouteRulesActionDestinations {
  /**
  * The URL of a BackendService to route traffic to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#service_name NetworkServicesHttpRoute#service_name}
  */
  readonly serviceName?: string;
  /**
  * Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports.
  * If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend.
  * If weights are specified for any one service name, they need to be specified for all of them.
  * If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#weight NetworkServicesHttpRoute#weight}
  */
  readonly weight?: number;
}

export function networkServicesHttpRouteRulesActionDestinationsToTerraform(struct?: NetworkServicesHttpRouteRulesActionDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function networkServicesHttpRouteRulesActionDestinationsToHclTerraform(struct?: NetworkServicesHttpRouteRulesActionDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesHttpRouteRulesActionDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkServicesHttpRouteRulesActionDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesHttpRouteRulesActionDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceName = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceName = value.serviceName;
      this._weight = value.weight;
    }
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class NetworkServicesHttpRouteRulesActionDestinationsList extends cdktf.ComplexList {
  public internalValue? : NetworkServicesHttpRouteRulesActionDestinations[] | cdktf.IResolvable

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
  public get(index: number): NetworkServicesHttpRouteRulesActionDestinationsOutputReference {
    return new NetworkServicesHttpRouteRulesActionDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort {
  /**
  * The HTTP status code used to abort the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#http_status NetworkServicesHttpRoute#http_status}
  */
  readonly httpStatus?: number;
  /**
  * The percentage of traffic which will be aborted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#percentage NetworkServicesHttpRoute#percentage}
  */
  readonly percentage?: number;
}

export function networkServicesHttpRouteRulesActionFaultInjectionPolicyAbortToTerraform(struct?: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference | NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_status: cdktf.numberToTerraform(struct!.httpStatus),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function networkServicesHttpRouteRulesActionFaultInjectionPolicyAbortToHclTerraform(struct?: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference | NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_status: {
      value: cdktf.numberToHclTerraform(struct!.httpStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatus = this._httpStatus;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpStatus = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpStatus = value.httpStatus;
      this._percentage = value.percentage;
    }
  }

  // http_status - computed: false, optional: true, required: false
  private _httpStatus?: number; 
  public get httpStatus() {
    return this.getNumberAttribute('http_status');
  }
  public set httpStatus(value: number) {
    this._httpStatus = value;
  }
  public resetHttpStatus() {
    this._httpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusInput() {
    return this._httpStatus;
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay {
  /**
  * Specify a fixed delay before forwarding the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#fixed_delay NetworkServicesHttpRoute#fixed_delay}
  */
  readonly fixedDelay?: string;
  /**
  * The percentage of traffic on which delay will be injected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#percentage NetworkServicesHttpRoute#percentage}
  */
  readonly percentage?: number;
}

export function networkServicesHttpRouteRulesActionFaultInjectionPolicyDelayToTerraform(struct?: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference | NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_delay: cdktf.stringToTerraform(struct!.fixedDelay),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function networkServicesHttpRouteRulesActionFaultInjectionPolicyDelayToHclTerraform(struct?: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference | NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_delay: {
      value: cdktf.stringToHclTerraform(struct!.fixedDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedDelay = this._fixedDelay;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedDelay = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedDelay = value.fixedDelay;
      this._percentage = value.percentage;
    }
  }

  // fixed_delay - computed: false, optional: true, required: false
  private _fixedDelay?: string; 
  public get fixedDelay() {
    return this.getStringAttribute('fixed_delay');
  }
  public set fixedDelay(value: string) {
    this._fixedDelay = value;
  }
  public resetFixedDelay() {
    this._fixedDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedDelayInput() {
    return this._fixedDelay;
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface NetworkServicesHttpRouteRulesActionFaultInjectionPolicy {
  /**
  * abort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#abort NetworkServicesHttpRoute#abort}
  */
  readonly abort?: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort;
  /**
  * delay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#delay NetworkServicesHttpRoute#delay}
  */
  readonly delay?: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay;
}

export function networkServicesHttpRouteRulesActionFaultInjectionPolicyToTerraform(struct?: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference | NetworkServicesHttpRouteRulesActionFaultInjectionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort: networkServicesHttpRouteRulesActionFaultInjectionPolicyAbortToTerraform(struct!.abort),
    delay: networkServicesHttpRouteRulesActionFaultInjectionPolicyDelayToTerraform(struct!.delay),
  }
}


export function networkServicesHttpRouteRulesActionFaultInjectionPolicyToHclTerraform(struct?: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference | NetworkServicesHttpRouteRulesActionFaultInjectionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abort: {
      value: networkServicesHttpRouteRulesActionFaultInjectionPolicyAbortToHclTerraform(struct!.abort),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortList",
    },
    delay: {
      value: networkServicesHttpRouteRulesActionFaultInjectionPolicyDelayToHclTerraform(struct!.delay),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesHttpRouteRulesActionFaultInjectionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abort = this._abort?.internalValue;
    }
    if (this._delay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesHttpRouteRulesActionFaultInjectionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._abort.internalValue = undefined;
      this._delay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._abort.internalValue = value.abort;
      this._delay.internalValue = value.delay;
    }
  }

  // abort - computed: false, optional: true, required: false
  private _abort = new NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbortOutputReference(this, "abort");
  public get abort() {
    return this._abort;
  }
  public putAbort(value: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyAbort) {
    this._abort.internalValue = value;
  }
  public resetAbort() {
    this._abort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortInput() {
    return this._abort.internalValue;
  }

  // delay - computed: false, optional: true, required: false
  private _delay = new NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelayOutputReference(this, "delay");
  public get delay() {
    return this._delay;
  }
  public putDelay(value: NetworkServicesHttpRouteRulesActionFaultInjectionPolicyDelay) {
    this._delay.internalValue = value;
  }
  public resetDelay() {
    this._delay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay.internalValue;
  }
}
export interface NetworkServicesHttpRouteRulesActionRedirect {
  /**
  * The host that will be used in the redirect response instead of the one that was supplied in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#host_redirect NetworkServicesHttpRoute#host_redirect}
  */
  readonly hostRedirect?: string;
  /**
  * If set to true, the URL scheme in the redirected request is set to https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#https_redirect NetworkServicesHttpRoute#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktf.IResolvable;
  /**
  * The path that will be used in the redirect response instead of the one that was supplied in the request. pathRedirect can not be supplied together with prefixRedirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#path_redirect NetworkServicesHttpRoute#path_redirect}
  */
  readonly pathRedirect?: string;
  /**
  * The port that will be used in the redirected request instead of the one that was supplied in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#port_redirect NetworkServicesHttpRoute#port_redirect}
  */
  readonly portRedirect?: number;
  /**
  * Indicates that during redirection, the matched prefix (or path) should be swapped with this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#prefix_rewrite NetworkServicesHttpRoute#prefix_rewrite}
  */
  readonly prefixRewrite?: string;
  /**
  * The HTTP Status code to use for the redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#response_code NetworkServicesHttpRoute#response_code}
  */
  readonly responseCode?: string;
  /**
  * If set to true, any accompanying query portion of the original URL is removed prior to redirecting the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#strip_query NetworkServicesHttpRoute#strip_query}
  */
  readonly stripQuery?: boolean | cdktf.IResolvable;
}

export function networkServicesHttpRouteRulesActionRedirectToTerraform(struct?: NetworkServicesHttpRouteRulesActionRedirectOutputReference | NetworkServicesHttpRouteRulesActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_redirect: cdktf.stringToTerraform(struct!.hostRedirect),
    https_redirect: cdktf.booleanToTerraform(struct!.httpsRedirect),
    path_redirect: cdktf.stringToTerraform(struct!.pathRedirect),
    port_redirect: cdktf.numberToTerraform(struct!.portRedirect),
    prefix_rewrite: cdktf.stringToTerraform(struct!.prefixRewrite),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
    strip_query: cdktf.booleanToTerraform(struct!.stripQuery),
  }
}


export function networkServicesHttpRouteRulesActionRedirectToHclTerraform(struct?: NetworkServicesHttpRouteRulesActionRedirectOutputReference | NetworkServicesHttpRouteRulesActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_redirect: {
      value: cdktf.stringToHclTerraform(struct!.hostRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.httpsRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path_redirect: {
      value: cdktf.stringToHclTerraform(struct!.pathRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_redirect: {
      value: cdktf.numberToHclTerraform(struct!.portRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_rewrite: {
      value: cdktf.stringToHclTerraform(struct!.prefixRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_query: {
      value: cdktf.booleanToHclTerraform(struct!.stripQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesHttpRouteRulesActionRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesHttpRouteRulesActionRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRedirect = this._hostRedirect;
    }
    if (this._httpsRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsRedirect = this._httpsRedirect;
    }
    if (this._pathRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRedirect = this._pathRedirect;
    }
    if (this._portRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRedirect = this._portRedirect;
    }
    if (this._prefixRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRewrite = this._prefixRewrite;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._stripQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripQuery = this._stripQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesHttpRouteRulesActionRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRedirect = undefined;
      this._httpsRedirect = undefined;
      this._pathRedirect = undefined;
      this._portRedirect = undefined;
      this._prefixRewrite = undefined;
      this._responseCode = undefined;
      this._stripQuery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRedirect = value.hostRedirect;
      this._httpsRedirect = value.httpsRedirect;
      this._pathRedirect = value.pathRedirect;
      this._portRedirect = value.portRedirect;
      this._prefixRewrite = value.prefixRewrite;
      this._responseCode = value.responseCode;
      this._stripQuery = value.stripQuery;
    }
  }

  // host_redirect - computed: false, optional: true, required: false
  private _hostRedirect?: string; 
  public get hostRedirect() {
    return this.getStringAttribute('host_redirect');
  }
  public set hostRedirect(value: string) {
    this._hostRedirect = value;
  }
  public resetHostRedirect() {
    this._hostRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRedirectInput() {
    return this._hostRedirect;
  }

  // https_redirect - computed: false, optional: true, required: false
  private _httpsRedirect?: boolean | cdktf.IResolvable; 
  public get httpsRedirect() {
    return this.getBooleanAttribute('https_redirect');
  }
  public set httpsRedirect(value: boolean | cdktf.IResolvable) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect;
  }

  // path_redirect - computed: false, optional: true, required: false
  private _pathRedirect?: string; 
  public get pathRedirect() {
    return this.getStringAttribute('path_redirect');
  }
  public set pathRedirect(value: string) {
    this._pathRedirect = value;
  }
  public resetPathRedirect() {
    this._pathRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRedirectInput() {
    return this._pathRedirect;
  }

  // port_redirect - computed: false, optional: true, required: false
  private _portRedirect?: number; 
  public get portRedirect() {
    return this.getNumberAttribute('port_redirect');
  }
  public set portRedirect(value: number) {
    this._portRedirect = value;
  }
  public resetPortRedirect() {
    this._portRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRedirectInput() {
    return this._portRedirect;
  }

  // prefix_rewrite - computed: false, optional: true, required: false
  private _prefixRewrite?: string; 
  public get prefixRewrite() {
    return this.getStringAttribute('prefix_rewrite');
  }
  public set prefixRewrite(value: string) {
    this._prefixRewrite = value;
  }
  public resetPrefixRewrite() {
    this._prefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRewriteInput() {
    return this._prefixRewrite;
  }

  // response_code - computed: false, optional: true, required: false
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // strip_query - computed: false, optional: true, required: false
  private _stripQuery?: boolean | cdktf.IResolvable; 
  public get stripQuery() {
    return this.getBooleanAttribute('strip_query');
  }
  public set stripQuery(value: boolean | cdktf.IResolvable) {
    this._stripQuery = value;
  }
  public resetStripQuery() {
    this._stripQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripQueryInput() {
    return this._stripQuery;
  }
}
export interface NetworkServicesHttpRouteRulesActionRequestHeaderModifier {
  /**
  * Add the headers with given map where key is the name of the header, value is the value of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#add NetworkServicesHttpRoute#add}
  */
  readonly add?: { [key: string]: string };
  /**
  * Remove headers (matching by header names) specified in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#remove NetworkServicesHttpRoute#remove}
  */
  readonly remove?: string[];
  /**
  * Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#set NetworkServicesHttpRoute#set}
  */
  readonly set?: { [key: string]: string };
}

export function networkServicesHttpRouteRulesActionRequestHeaderModifierToTerraform(struct?: NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference | NetworkServicesHttpRouteRulesActionRequestHeaderModifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.set),
  }
}


export function networkServicesHttpRouteRulesActionRequestHeaderModifierToHclTerraform(struct?: NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference | NetworkServicesHttpRouteRulesActionRequestHeaderModifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.add),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.set),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesHttpRouteRulesActionRequestHeaderModifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesHttpRouteRulesActionRequestHeaderModifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._add = undefined;
      this._remove = undefined;
      this._set = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._add = value.add;
      this._remove = value.remove;
      this._set = value.set;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: { [key: string]: string }; 
  public get add() {
    return this.getStringMapAttribute('add');
  }
  public set add(value: { [key: string]: string }) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: string[]; 
  public get remove() {
    return this.getListAttribute('remove');
  }
  public set remove(value: string[]) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // set - computed: false, optional: true, required: false
  private _set?: { [key: string]: string }; 
  public get set() {
    return this.getStringMapAttribute('set');
  }
  public set set(value: { [key: string]: string }) {
    this._set = value;
  }
  public resetSet() {
    this._set = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set;
  }
}
export interface NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination {
  /**
  * The URL of a BackendService to route traffic to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#service_name NetworkServicesHttpRoute#service_name}
  */
  readonly serviceName?: string;
  /**
  * Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports.
  * If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend.
  * If weights are specified for any one service name, they need to be specified for all of them.
  * If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#weight NetworkServicesHttpRoute#weight}
  */
  readonly weight?: number;
}

export function networkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationToTerraform(struct?: NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference | NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function networkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationToHclTerraform(struct?: NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference | NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceName = undefined;
      this._weight = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceName = value.serviceName;
      this._weight = value.weight;
    }
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface NetworkServicesHttpRouteRulesActionRequestMirrorPolicy {
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#destination NetworkServicesHttpRoute#destination}
  */
  readonly destination?: NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination;
}

export function networkServicesHttpRouteRulesActionRequestMirrorPolicyToTerraform(struct?: NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference | NetworkServicesHttpRouteRulesActionRequestMirrorPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: networkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationToTerraform(struct!.destination),
  }
}


export function networkServicesHttpRouteRulesActionRequestMirrorPolicyToHclTerraform(struct?: NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference | NetworkServicesHttpRouteRulesActionRequestMirrorPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: networkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesHttpRouteRulesActionRequestMirrorPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesHttpRouteRulesActionRequestMirrorPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination.internalValue = value.destination;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: NetworkServicesHttpRouteRulesActionRequestMirrorPolicyDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }
}
export interface NetworkServicesHttpRouteRulesActionResponseHeaderModifier {
  /**
  * Add the headers with given map where key is the name of the header, value is the value of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#add NetworkServicesHttpRoute#add}
  */
  readonly add?: { [key: string]: string };
  /**
  * Remove headers (matching by header names) specified in the list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#remove NetworkServicesHttpRoute#remove}
  */
  readonly remove?: string[];
  /**
  * Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#set NetworkServicesHttpRoute#set}
  */
  readonly set?: { [key: string]: string };
}

export function networkServicesHttpRouteRulesActionResponseHeaderModifierToTerraform(struct?: NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference | NetworkServicesHttpRouteRulesActionResponseHeaderModifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.add),
    remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remove),
    set: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.set),
  }
}


export function networkServicesHttpRouteRulesActionResponseHeaderModifierToHclTerraform(struct?: NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference | NetworkServicesHttpRouteRulesActionResponseHeaderModifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.add),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.set),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesHttpRouteRulesActionResponseHeaderModifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._remove !== undefined) {
      hasAnyValues = true;
      internalValueResult.remove = this._remove;
    }
    if (this._set !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesHttpRouteRulesActionResponseHeaderModifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._add = undefined;
      this._remove = undefined;
      this._set = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._add = value.add;
      this._remove = value.remove;
      this._set = value.set;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: { [key: string]: string }; 
  public get add() {
    return this.getStringMapAttribute('add');
  }
  public set add(value: { [key: string]: string }) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: string[]; 
  public get remove() {
    return this.getListAttribute('remove');
  }
  public set remove(value: string[]) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // set - computed: false, optional: true, required: false
  private _set?: { [key: string]: string }; 
  public get set() {
    return this.getStringMapAttribute('set');
  }
  public set set(value: { [key: string]: string }) {
    this._set = value;
  }
  public resetSet() {
    this._set = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set;
  }
}
export interface NetworkServicesHttpRouteRulesActionRetryPolicy {
  /**
  * Specifies the allowed number of retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#num_retries NetworkServicesHttpRoute#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Specifies a non-zero timeout per retry attempt. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#per_try_timeout NetworkServicesHttpRoute#per_try_timeout}
  */
  readonly perTryTimeout?: string;
  /**
  * Specifies one or more conditions when this retry policy applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#retry_conditions NetworkServicesHttpRoute#retry_conditions}
  */
  readonly retryConditions?: string[];
}

export function networkServicesHttpRouteRulesActionRetryPolicyToTerraform(struct?: NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference | NetworkServicesHttpRouteRulesActionRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    per_try_timeout: cdktf.stringToTerraform(struct!.perTryTimeout),
    retry_conditions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retryConditions),
  }
}


export function networkServicesHttpRouteRulesActionRetryPolicyToHclTerraform(struct?: NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference | NetworkServicesHttpRouteRulesActionRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_retries: {
      value: cdktf.numberToHclTerraform(struct!.numRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_try_timeout: {
      value: cdktf.stringToHclTerraform(struct!.perTryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_conditions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.retryConditions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesHttpRouteRulesActionRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._perTryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTryTimeout = this._perTryTimeout;
    }
    if (this._retryConditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryConditions = this._retryConditions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesHttpRouteRulesActionRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numRetries = undefined;
      this._perTryTimeout = undefined;
      this._retryConditions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numRetries = value.numRetries;
      this._perTryTimeout = value.perTryTimeout;
      this._retryConditions = value.retryConditions;
    }
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout?: string; 
  public get perTryTimeout() {
    return this.getStringAttribute('per_try_timeout');
  }
  public set perTryTimeout(value: string) {
    this._perTryTimeout = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout;
  }

  // retry_conditions - computed: false, optional: true, required: false
  private _retryConditions?: string[]; 
  public get retryConditions() {
    return this.getListAttribute('retry_conditions');
  }
  public set retryConditions(value: string[]) {
    this._retryConditions = value;
  }
  public resetRetryConditions() {
    this._retryConditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConditionsInput() {
    return this._retryConditions;
  }
}
export interface NetworkServicesHttpRouteRulesActionUrlRewrite {
  /**
  * Prior to forwarding the request to the selected destination, the requests host header is replaced by this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#host_rewrite NetworkServicesHttpRoute#host_rewrite}
  */
  readonly hostRewrite?: string;
  /**
  * Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#path_prefix_rewrite NetworkServicesHttpRoute#path_prefix_rewrite}
  */
  readonly pathPrefixRewrite?: string;
}

export function networkServicesHttpRouteRulesActionUrlRewriteToTerraform(struct?: NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference | NetworkServicesHttpRouteRulesActionUrlRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
    path_prefix_rewrite: cdktf.stringToTerraform(struct!.pathPrefixRewrite),
  }
}


export function networkServicesHttpRouteRulesActionUrlRewriteToHclTerraform(struct?: NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference | NetworkServicesHttpRouteRulesActionUrlRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_rewrite: {
      value: cdktf.stringToHclTerraform(struct!.hostRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_prefix_rewrite: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefixRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesHttpRouteRulesActionUrlRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRewrite = this._hostRewrite;
    }
    if (this._pathPrefixRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefixRewrite = this._pathPrefixRewrite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesHttpRouteRulesActionUrlRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostRewrite = undefined;
      this._pathPrefixRewrite = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostRewrite = value.hostRewrite;
      this._pathPrefixRewrite = value.pathPrefixRewrite;
    }
  }

  // host_rewrite - computed: false, optional: true, required: false
  private _hostRewrite?: string; 
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }
  public set hostRewrite(value: string) {
    this._hostRewrite = value;
  }
  public resetHostRewrite() {
    this._hostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRewriteInput() {
    return this._hostRewrite;
  }

  // path_prefix_rewrite - computed: false, optional: true, required: false
  private _pathPrefixRewrite?: string; 
  public get pathPrefixRewrite() {
    return this.getStringAttribute('path_prefix_rewrite');
  }
  public set pathPrefixRewrite(value: string) {
    this._pathPrefixRewrite = value;
  }
  public resetPathPrefixRewrite() {
    this._pathPrefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixRewriteInput() {
    return this._pathPrefixRewrite;
  }
}
export interface NetworkServicesHttpRouteRulesAction {
  /**
  * Specifies the timeout for selected route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#timeout NetworkServicesHttpRoute#timeout}
  */
  readonly timeout?: string;
  /**
  * cors_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#cors_policy NetworkServicesHttpRoute#cors_policy}
  */
  readonly corsPolicy?: NetworkServicesHttpRouteRulesActionCorsPolicy;
  /**
  * destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#destinations NetworkServicesHttpRoute#destinations}
  */
  readonly destinations?: NetworkServicesHttpRouteRulesActionDestinations[] | cdktf.IResolvable;
  /**
  * fault_injection_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#fault_injection_policy NetworkServicesHttpRoute#fault_injection_policy}
  */
  readonly faultInjectionPolicy?: NetworkServicesHttpRouteRulesActionFaultInjectionPolicy;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#redirect NetworkServicesHttpRoute#redirect}
  */
  readonly redirect?: NetworkServicesHttpRouteRulesActionRedirect;
  /**
  * request_header_modifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#request_header_modifier NetworkServicesHttpRoute#request_header_modifier}
  */
  readonly requestHeaderModifier?: NetworkServicesHttpRouteRulesActionRequestHeaderModifier;
  /**
  * request_mirror_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#request_mirror_policy NetworkServicesHttpRoute#request_mirror_policy}
  */
  readonly requestMirrorPolicy?: NetworkServicesHttpRouteRulesActionRequestMirrorPolicy;
  /**
  * response_header_modifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#response_header_modifier NetworkServicesHttpRoute#response_header_modifier}
  */
  readonly responseHeaderModifier?: NetworkServicesHttpRouteRulesActionResponseHeaderModifier;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#retry_policy NetworkServicesHttpRoute#retry_policy}
  */
  readonly retryPolicy?: NetworkServicesHttpRouteRulesActionRetryPolicy;
  /**
  * url_rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#url_rewrite NetworkServicesHttpRoute#url_rewrite}
  */
  readonly urlRewrite?: NetworkServicesHttpRouteRulesActionUrlRewrite;
}

export function networkServicesHttpRouteRulesActionToTerraform(struct?: NetworkServicesHttpRouteRulesActionOutputReference | NetworkServicesHttpRouteRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.stringToTerraform(struct!.timeout),
    cors_policy: networkServicesHttpRouteRulesActionCorsPolicyToTerraform(struct!.corsPolicy),
    destinations: cdktf.listMapper(networkServicesHttpRouteRulesActionDestinationsToTerraform, true)(struct!.destinations),
    fault_injection_policy: networkServicesHttpRouteRulesActionFaultInjectionPolicyToTerraform(struct!.faultInjectionPolicy),
    redirect: networkServicesHttpRouteRulesActionRedirectToTerraform(struct!.redirect),
    request_header_modifier: networkServicesHttpRouteRulesActionRequestHeaderModifierToTerraform(struct!.requestHeaderModifier),
    request_mirror_policy: networkServicesHttpRouteRulesActionRequestMirrorPolicyToTerraform(struct!.requestMirrorPolicy),
    response_header_modifier: networkServicesHttpRouteRulesActionResponseHeaderModifierToTerraform(struct!.responseHeaderModifier),
    retry_policy: networkServicesHttpRouteRulesActionRetryPolicyToTerraform(struct!.retryPolicy),
    url_rewrite: networkServicesHttpRouteRulesActionUrlRewriteToTerraform(struct!.urlRewrite),
  }
}


export function networkServicesHttpRouteRulesActionToHclTerraform(struct?: NetworkServicesHttpRouteRulesActionOutputReference | NetworkServicesHttpRouteRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cors_policy: {
      value: networkServicesHttpRouteRulesActionCorsPolicyToHclTerraform(struct!.corsPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesHttpRouteRulesActionCorsPolicyList",
    },
    destinations: {
      value: cdktf.listMapperHcl(networkServicesHttpRouteRulesActionDestinationsToHclTerraform, true)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesHttpRouteRulesActionDestinationsList",
    },
    fault_injection_policy: {
      value: networkServicesHttpRouteRulesActionFaultInjectionPolicyToHclTerraform(struct!.faultInjectionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesHttpRouteRulesActionFaultInjectionPolicyList",
    },
    redirect: {
      value: networkServicesHttpRouteRulesActionRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesHttpRouteRulesActionRedirectList",
    },
    request_header_modifier: {
      value: networkServicesHttpRouteRulesActionRequestHeaderModifierToHclTerraform(struct!.requestHeaderModifier),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesHttpRouteRulesActionRequestHeaderModifierList",
    },
    request_mirror_policy: {
      value: networkServicesHttpRouteRulesActionRequestMirrorPolicyToHclTerraform(struct!.requestMirrorPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesHttpRouteRulesActionRequestMirrorPolicyList",
    },
    response_header_modifier: {
      value: networkServicesHttpRouteRulesActionResponseHeaderModifierToHclTerraform(struct!.responseHeaderModifier),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesHttpRouteRulesActionResponseHeaderModifierList",
    },
    retry_policy: {
      value: networkServicesHttpRouteRulesActionRetryPolicyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesHttpRouteRulesActionRetryPolicyList",
    },
    url_rewrite: {
      value: networkServicesHttpRouteRulesActionUrlRewriteToHclTerraform(struct!.urlRewrite),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesHttpRouteRulesActionUrlRewriteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesHttpRouteRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesHttpRouteRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._corsPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsPolicy = this._corsPolicy?.internalValue;
    }
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    if (this._faultInjectionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultInjectionPolicy = this._faultInjectionPolicy?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    if (this._requestHeaderModifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderModifier = this._requestHeaderModifier?.internalValue;
    }
    if (this._requestMirrorPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMirrorPolicy = this._requestMirrorPolicy?.internalValue;
    }
    if (this._responseHeaderModifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaderModifier = this._responseHeaderModifier?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._urlRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRewrite = this._urlRewrite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesHttpRouteRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeout = undefined;
      this._corsPolicy.internalValue = undefined;
      this._destinations.internalValue = undefined;
      this._faultInjectionPolicy.internalValue = undefined;
      this._redirect.internalValue = undefined;
      this._requestHeaderModifier.internalValue = undefined;
      this._requestMirrorPolicy.internalValue = undefined;
      this._responseHeaderModifier.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._urlRewrite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeout = value.timeout;
      this._corsPolicy.internalValue = value.corsPolicy;
      this._destinations.internalValue = value.destinations;
      this._faultInjectionPolicy.internalValue = value.faultInjectionPolicy;
      this._redirect.internalValue = value.redirect;
      this._requestHeaderModifier.internalValue = value.requestHeaderModifier;
      this._requestMirrorPolicy.internalValue = value.requestMirrorPolicy;
      this._responseHeaderModifier.internalValue = value.responseHeaderModifier;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._urlRewrite.internalValue = value.urlRewrite;
    }
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // cors_policy - computed: false, optional: true, required: false
  private _corsPolicy = new NetworkServicesHttpRouteRulesActionCorsPolicyOutputReference(this, "cors_policy");
  public get corsPolicy() {
    return this._corsPolicy;
  }
  public putCorsPolicy(value: NetworkServicesHttpRouteRulesActionCorsPolicy) {
    this._corsPolicy.internalValue = value;
  }
  public resetCorsPolicy() {
    this._corsPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPolicyInput() {
    return this._corsPolicy.internalValue;
  }

  // destinations - computed: false, optional: true, required: false
  private _destinations = new NetworkServicesHttpRouteRulesActionDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: NetworkServicesHttpRouteRulesActionDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // fault_injection_policy - computed: false, optional: true, required: false
  private _faultInjectionPolicy = new NetworkServicesHttpRouteRulesActionFaultInjectionPolicyOutputReference(this, "fault_injection_policy");
  public get faultInjectionPolicy() {
    return this._faultInjectionPolicy;
  }
  public putFaultInjectionPolicy(value: NetworkServicesHttpRouteRulesActionFaultInjectionPolicy) {
    this._faultInjectionPolicy.internalValue = value;
  }
  public resetFaultInjectionPolicy() {
    this._faultInjectionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultInjectionPolicyInput() {
    return this._faultInjectionPolicy.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new NetworkServicesHttpRouteRulesActionRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: NetworkServicesHttpRouteRulesActionRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }

  // request_header_modifier - computed: false, optional: true, required: false
  private _requestHeaderModifier = new NetworkServicesHttpRouteRulesActionRequestHeaderModifierOutputReference(this, "request_header_modifier");
  public get requestHeaderModifier() {
    return this._requestHeaderModifier;
  }
  public putRequestHeaderModifier(value: NetworkServicesHttpRouteRulesActionRequestHeaderModifier) {
    this._requestHeaderModifier.internalValue = value;
  }
  public resetRequestHeaderModifier() {
    this._requestHeaderModifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderModifierInput() {
    return this._requestHeaderModifier.internalValue;
  }

  // request_mirror_policy - computed: false, optional: true, required: false
  private _requestMirrorPolicy = new NetworkServicesHttpRouteRulesActionRequestMirrorPolicyOutputReference(this, "request_mirror_policy");
  public get requestMirrorPolicy() {
    return this._requestMirrorPolicy;
  }
  public putRequestMirrorPolicy(value: NetworkServicesHttpRouteRulesActionRequestMirrorPolicy) {
    this._requestMirrorPolicy.internalValue = value;
  }
  public resetRequestMirrorPolicy() {
    this._requestMirrorPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMirrorPolicyInput() {
    return this._requestMirrorPolicy.internalValue;
  }

  // response_header_modifier - computed: false, optional: true, required: false
  private _responseHeaderModifier = new NetworkServicesHttpRouteRulesActionResponseHeaderModifierOutputReference(this, "response_header_modifier");
  public get responseHeaderModifier() {
    return this._responseHeaderModifier;
  }
  public putResponseHeaderModifier(value: NetworkServicesHttpRouteRulesActionResponseHeaderModifier) {
    this._responseHeaderModifier.internalValue = value;
  }
  public resetResponseHeaderModifier() {
    this._responseHeaderModifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderModifierInput() {
    return this._responseHeaderModifier.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new NetworkServicesHttpRouteRulesActionRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: NetworkServicesHttpRouteRulesActionRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // url_rewrite - computed: false, optional: true, required: false
  private _urlRewrite = new NetworkServicesHttpRouteRulesActionUrlRewriteOutputReference(this, "url_rewrite");
  public get urlRewrite() {
    return this._urlRewrite;
  }
  public putUrlRewrite(value: NetworkServicesHttpRouteRulesActionUrlRewrite) {
    this._urlRewrite.internalValue = value;
  }
  public resetUrlRewrite() {
    this._urlRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteInput() {
    return this._urlRewrite.internalValue;
  }
}
export interface NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch {
  /**
  * End of the range (exclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#end NetworkServicesHttpRoute#end}
  */
  readonly end: number;
  /**
  * Start of the range (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#start NetworkServicesHttpRoute#start}
  */
  readonly start: number;
}

export function networkServicesHttpRouteRulesMatchesHeadersRangeMatchToTerraform(struct?: NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference | NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function networkServicesHttpRouteRulesMatchesHeadersRangeMatchToHclTerraform(struct?: NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference | NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface NetworkServicesHttpRouteRulesMatchesHeaders {
  /**
  * The value of the header should match exactly the content of exactMatch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#exact_match NetworkServicesHttpRoute#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * The name of the HTTP header to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#header NetworkServicesHttpRoute#header}
  */
  readonly header?: string;
  /**
  * If specified, the match result will be inverted before checking. Default value is set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#invert_match NetworkServicesHttpRoute#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * The value of the header must start with the contents of prefixMatch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#prefix_match NetworkServicesHttpRoute#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * A header with headerName must exist. The match takes place whether or not the header has a value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#present_match NetworkServicesHttpRoute#present_match}
  */
  readonly presentMatch?: boolean | cdktf.IResolvable;
  /**
  * The value of the header must match the regular expression specified in regexMatch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#regex_match NetworkServicesHttpRoute#regex_match}
  */
  readonly regexMatch?: string;
  /**
  * The value of the header must end with the contents of suffixMatch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#suffix_match NetworkServicesHttpRoute#suffix_match}
  */
  readonly suffixMatch?: string;
  /**
  * range_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#range_match NetworkServicesHttpRoute#range_match}
  */
  readonly rangeMatch?: NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch;
}

export function networkServicesHttpRouteRulesMatchesHeadersToTerraform(struct?: NetworkServicesHttpRouteRulesMatchesHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    header: cdktf.stringToTerraform(struct!.header),
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    present_match: cdktf.booleanToTerraform(struct!.presentMatch),
    regex_match: cdktf.stringToTerraform(struct!.regexMatch),
    suffix_match: cdktf.stringToTerraform(struct!.suffixMatch),
    range_match: networkServicesHttpRouteRulesMatchesHeadersRangeMatchToTerraform(struct!.rangeMatch),
  }
}


export function networkServicesHttpRouteRulesMatchesHeadersToHclTerraform(struct?: NetworkServicesHttpRouteRulesMatchesHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    present_match: {
      value: cdktf.booleanToHclTerraform(struct!.presentMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regex_match: {
      value: cdktf.stringToHclTerraform(struct!.regexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_match: {
      value: cdktf.stringToHclTerraform(struct!.suffixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range_match: {
      value: networkServicesHttpRouteRulesMatchesHeadersRangeMatchToHclTerraform(struct!.rangeMatch),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesHttpRouteRulesMatchesHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkServicesHttpRouteRulesMatchesHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._presentMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.presentMatch = this._presentMatch;
    }
    if (this._regexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexMatch = this._regexMatch;
    }
    if (this._suffixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixMatch = this._suffixMatch;
    }
    if (this._rangeMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeMatch = this._rangeMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesHttpRouteRulesMatchesHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactMatch = undefined;
      this._header = undefined;
      this._invertMatch = undefined;
      this._prefixMatch = undefined;
      this._presentMatch = undefined;
      this._regexMatch = undefined;
      this._suffixMatch = undefined;
      this._rangeMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactMatch = value.exactMatch;
      this._header = value.header;
      this._invertMatch = value.invertMatch;
      this._prefixMatch = value.prefixMatch;
      this._presentMatch = value.presentMatch;
      this._regexMatch = value.regexMatch;
      this._suffixMatch = value.suffixMatch;
      this._rangeMatch.internalValue = value.rangeMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // present_match - computed: false, optional: true, required: false
  private _presentMatch?: boolean | cdktf.IResolvable; 
  public get presentMatch() {
    return this.getBooleanAttribute('present_match');
  }
  public set presentMatch(value: boolean | cdktf.IResolvable) {
    this._presentMatch = value;
  }
  public resetPresentMatch() {
    this._presentMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentMatchInput() {
    return this._presentMatch;
  }

  // regex_match - computed: false, optional: true, required: false
  private _regexMatch?: string; 
  public get regexMatch() {
    return this.getStringAttribute('regex_match');
  }
  public set regexMatch(value: string) {
    this._regexMatch = value;
  }
  public resetRegexMatch() {
    this._regexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMatchInput() {
    return this._regexMatch;
  }

  // suffix_match - computed: false, optional: true, required: false
  private _suffixMatch?: string; 
  public get suffixMatch() {
    return this.getStringAttribute('suffix_match');
  }
  public set suffixMatch(value: string) {
    this._suffixMatch = value;
  }
  public resetSuffixMatch() {
    this._suffixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixMatchInput() {
    return this._suffixMatch;
  }

  // range_match - computed: false, optional: true, required: false
  private _rangeMatch = new NetworkServicesHttpRouteRulesMatchesHeadersRangeMatchOutputReference(this, "range_match");
  public get rangeMatch() {
    return this._rangeMatch;
  }
  public putRangeMatch(value: NetworkServicesHttpRouteRulesMatchesHeadersRangeMatch) {
    this._rangeMatch.internalValue = value;
  }
  public resetRangeMatch() {
    this._rangeMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeMatchInput() {
    return this._rangeMatch.internalValue;
  }
}

export class NetworkServicesHttpRouteRulesMatchesHeadersList extends cdktf.ComplexList {
  public internalValue? : NetworkServicesHttpRouteRulesMatchesHeaders[] | cdktf.IResolvable

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
  public get(index: number): NetworkServicesHttpRouteRulesMatchesHeadersOutputReference {
    return new NetworkServicesHttpRouteRulesMatchesHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkServicesHttpRouteRulesMatchesQueryParameters {
  /**
  * The value of the query parameter must exactly match the contents of exactMatch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#exact_match NetworkServicesHttpRoute#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#present_match NetworkServicesHttpRoute#present_match}
  */
  readonly presentMatch?: boolean | cdktf.IResolvable;
  /**
  * The name of the query parameter to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#query_parameter NetworkServicesHttpRoute#query_parameter}
  */
  readonly queryParameter?: string;
  /**
  * The value of the query parameter must match the regular expression specified by regexMatch.For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#regex_match NetworkServicesHttpRoute#regex_match}
  */
  readonly regexMatch?: string;
}

export function networkServicesHttpRouteRulesMatchesQueryParametersToTerraform(struct?: NetworkServicesHttpRouteRulesMatchesQueryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    present_match: cdktf.booleanToTerraform(struct!.presentMatch),
    query_parameter: cdktf.stringToTerraform(struct!.queryParameter),
    regex_match: cdktf.stringToTerraform(struct!.regexMatch),
  }
}


export function networkServicesHttpRouteRulesMatchesQueryParametersToHclTerraform(struct?: NetworkServicesHttpRouteRulesMatchesQueryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    present_match: {
      value: cdktf.booleanToHclTerraform(struct!.presentMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_parameter: {
      value: cdktf.stringToHclTerraform(struct!.queryParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_match: {
      value: cdktf.stringToHclTerraform(struct!.regexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkServicesHttpRouteRulesMatchesQueryParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._presentMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.presentMatch = this._presentMatch;
    }
    if (this._queryParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameter = this._queryParameter;
    }
    if (this._regexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexMatch = this._regexMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesHttpRouteRulesMatchesQueryParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactMatch = undefined;
      this._presentMatch = undefined;
      this._queryParameter = undefined;
      this._regexMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactMatch = value.exactMatch;
      this._presentMatch = value.presentMatch;
      this._queryParameter = value.queryParameter;
      this._regexMatch = value.regexMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // present_match - computed: false, optional: true, required: false
  private _presentMatch?: boolean | cdktf.IResolvable; 
  public get presentMatch() {
    return this.getBooleanAttribute('present_match');
  }
  public set presentMatch(value: boolean | cdktf.IResolvable) {
    this._presentMatch = value;
  }
  public resetPresentMatch() {
    this._presentMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presentMatchInput() {
    return this._presentMatch;
  }

  // query_parameter - computed: false, optional: true, required: false
  private _queryParameter?: string; 
  public get queryParameter() {
    return this.getStringAttribute('query_parameter');
  }
  public set queryParameter(value: string) {
    this._queryParameter = value;
  }
  public resetQueryParameter() {
    this._queryParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterInput() {
    return this._queryParameter;
  }

  // regex_match - computed: false, optional: true, required: false
  private _regexMatch?: string; 
  public get regexMatch() {
    return this.getStringAttribute('regex_match');
  }
  public set regexMatch(value: string) {
    this._regexMatch = value;
  }
  public resetRegexMatch() {
    this._regexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMatchInput() {
    return this._regexMatch;
  }
}

export class NetworkServicesHttpRouteRulesMatchesQueryParametersList extends cdktf.ComplexList {
  public internalValue? : NetworkServicesHttpRouteRulesMatchesQueryParameters[] | cdktf.IResolvable

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
  public get(index: number): NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference {
    return new NetworkServicesHttpRouteRulesMatchesQueryParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkServicesHttpRouteRulesMatches {
  /**
  * The HTTP request path value should exactly match this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#full_path_match NetworkServicesHttpRoute#full_path_match}
  */
  readonly fullPathMatch?: string;
  /**
  * Specifies if prefixMatch and fullPathMatch matches are case sensitive. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#ignore_case NetworkServicesHttpRoute#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * The HTTP request path value must begin with specified prefixMatch. prefixMatch must begin with a /.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#prefix_match NetworkServicesHttpRoute#prefix_match}
  */
  readonly prefixMatch?: string;
  /**
  * The HTTP request path value must satisfy the regular expression specified by regexMatch after removing any query parameters and anchor supplied with the original URL. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#regex_match NetworkServicesHttpRoute#regex_match}
  */
  readonly regexMatch?: string;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#headers NetworkServicesHttpRoute#headers}
  */
  readonly headers?: NetworkServicesHttpRouteRulesMatchesHeaders[] | cdktf.IResolvable;
  /**
  * query_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#query_parameters NetworkServicesHttpRoute#query_parameters}
  */
  readonly queryParameters?: NetworkServicesHttpRouteRulesMatchesQueryParameters[] | cdktf.IResolvable;
}

export function networkServicesHttpRouteRulesMatchesToTerraform(struct?: NetworkServicesHttpRouteRulesMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_path_match: cdktf.stringToTerraform(struct!.fullPathMatch),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    prefix_match: cdktf.stringToTerraform(struct!.prefixMatch),
    regex_match: cdktf.stringToTerraform(struct!.regexMatch),
    headers: cdktf.listMapper(networkServicesHttpRouteRulesMatchesHeadersToTerraform, true)(struct!.headers),
    query_parameters: cdktf.listMapper(networkServicesHttpRouteRulesMatchesQueryParametersToTerraform, true)(struct!.queryParameters),
  }
}


export function networkServicesHttpRouteRulesMatchesToHclTerraform(struct?: NetworkServicesHttpRouteRulesMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full_path_match: {
      value: cdktf.stringToHclTerraform(struct!.fullPathMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_match: {
      value: cdktf.stringToHclTerraform(struct!.prefixMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_match: {
      value: cdktf.stringToHclTerraform(struct!.regexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(networkServicesHttpRouteRulesMatchesHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesHttpRouteRulesMatchesHeadersList",
    },
    query_parameters: {
      value: cdktf.listMapperHcl(networkServicesHttpRouteRulesMatchesQueryParametersToHclTerraform, true)(struct!.queryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesHttpRouteRulesMatchesQueryParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesHttpRouteRulesMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkServicesHttpRouteRulesMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullPathMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullPathMatch = this._fullPathMatch;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._prefixMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixMatch = this._prefixMatch;
    }
    if (this._regexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexMatch = this._regexMatch;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._queryParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameters = this._queryParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesHttpRouteRulesMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fullPathMatch = undefined;
      this._ignoreCase = undefined;
      this._prefixMatch = undefined;
      this._regexMatch = undefined;
      this._headers.internalValue = undefined;
      this._queryParameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fullPathMatch = value.fullPathMatch;
      this._ignoreCase = value.ignoreCase;
      this._prefixMatch = value.prefixMatch;
      this._regexMatch = value.regexMatch;
      this._headers.internalValue = value.headers;
      this._queryParameters.internalValue = value.queryParameters;
    }
  }

  // full_path_match - computed: false, optional: true, required: false
  private _fullPathMatch?: string; 
  public get fullPathMatch() {
    return this.getStringAttribute('full_path_match');
  }
  public set fullPathMatch(value: string) {
    this._fullPathMatch = value;
  }
  public resetFullPathMatch() {
    this._fullPathMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullPathMatchInput() {
    return this._fullPathMatch;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // prefix_match - computed: false, optional: true, required: false
  private _prefixMatch?: string; 
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }
  public set prefixMatch(value: string) {
    this._prefixMatch = value;
  }
  public resetPrefixMatch() {
    this._prefixMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixMatchInput() {
    return this._prefixMatch;
  }

  // regex_match - computed: false, optional: true, required: false
  private _regexMatch?: string; 
  public get regexMatch() {
    return this.getStringAttribute('regex_match');
  }
  public set regexMatch(value: string) {
    this._regexMatch = value;
  }
  public resetRegexMatch() {
    this._regexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMatchInput() {
    return this._regexMatch;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new NetworkServicesHttpRouteRulesMatchesHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: NetworkServicesHttpRouteRulesMatchesHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // query_parameters - computed: false, optional: true, required: false
  private _queryParameters = new NetworkServicesHttpRouteRulesMatchesQueryParametersList(this, "query_parameters", false);
  public get queryParameters() {
    return this._queryParameters;
  }
  public putQueryParameters(value: NetworkServicesHttpRouteRulesMatchesQueryParameters[] | cdktf.IResolvable) {
    this._queryParameters.internalValue = value;
  }
  public resetQueryParameters() {
    this._queryParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParametersInput() {
    return this._queryParameters.internalValue;
  }
}

export class NetworkServicesHttpRouteRulesMatchesList extends cdktf.ComplexList {
  public internalValue? : NetworkServicesHttpRouteRulesMatches[] | cdktf.IResolvable

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
  public get(index: number): NetworkServicesHttpRouteRulesMatchesOutputReference {
    return new NetworkServicesHttpRouteRulesMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkServicesHttpRouteRules {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#action NetworkServicesHttpRoute#action}
  */
  readonly action?: NetworkServicesHttpRouteRulesAction;
  /**
  * matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#matches NetworkServicesHttpRoute#matches}
  */
  readonly matches?: NetworkServicesHttpRouteRulesMatches[] | cdktf.IResolvable;
}

export function networkServicesHttpRouteRulesToTerraform(struct?: NetworkServicesHttpRouteRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: networkServicesHttpRouteRulesActionToTerraform(struct!.action),
    matches: cdktf.listMapper(networkServicesHttpRouteRulesMatchesToTerraform, true)(struct!.matches),
  }
}


export function networkServicesHttpRouteRulesToHclTerraform(struct?: NetworkServicesHttpRouteRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: networkServicesHttpRouteRulesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesHttpRouteRulesActionList",
    },
    matches: {
      value: cdktf.listMapperHcl(networkServicesHttpRouteRulesMatchesToHclTerraform, true)(struct!.matches),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesHttpRouteRulesMatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesHttpRouteRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkServicesHttpRouteRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._matches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matches = this._matches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesHttpRouteRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._matches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._matches.internalValue = value.matches;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new NetworkServicesHttpRouteRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: NetworkServicesHttpRouteRulesAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // matches - computed: false, optional: true, required: false
  private _matches = new NetworkServicesHttpRouteRulesMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }
  public putMatches(value: NetworkServicesHttpRouteRulesMatches[] | cdktf.IResolvable) {
    this._matches.internalValue = value;
  }
  public resetMatches() {
    this._matches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesInput() {
    return this._matches.internalValue;
  }
}

export class NetworkServicesHttpRouteRulesList extends cdktf.ComplexList {
  public internalValue? : NetworkServicesHttpRouteRules[] | cdktf.IResolvable

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
  public get(index: number): NetworkServicesHttpRouteRulesOutputReference {
    return new NetworkServicesHttpRouteRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkServicesHttpRouteTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#create NetworkServicesHttpRoute#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#delete NetworkServicesHttpRoute#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#update NetworkServicesHttpRoute#update}
  */
  readonly update?: string;
}

export function networkServicesHttpRouteTimeoutsToTerraform(struct?: NetworkServicesHttpRouteTimeouts | cdktf.IResolvable): any {
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


export function networkServicesHttpRouteTimeoutsToHclTerraform(struct?: NetworkServicesHttpRouteTimeouts | cdktf.IResolvable): any {
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

export class NetworkServicesHttpRouteTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkServicesHttpRouteTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkServicesHttpRouteTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route google_network_services_http_route}
*/
export class NetworkServicesHttpRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_services_http_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkServicesHttpRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkServicesHttpRoute to import
  * @param importFromId The id of the existing NetworkServicesHttpRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkServicesHttpRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_network_services_http_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_http_route google_network_services_http_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkServicesHttpRouteConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkServicesHttpRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_services_http_route',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.50.0',
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
    this._description = config.description;
    this._gateways = config.gateways;
    this._hostnames = config.hostnames;
    this._id = config.id;
    this._labels = config.labels;
    this._meshes = config.meshes;
    this._name = config.name;
    this._project = config.project;
    this._rules.internalValue = config.rules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // gateways - computed: false, optional: true, required: false
  private _gateways?: string[]; 
  public get gateways() {
    return this.getListAttribute('gateways');
  }
  public set gateways(value: string[]) {
    this._gateways = value;
  }
  public resetGateways() {
    this._gateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways;
  }

  // hostnames - computed: false, optional: false, required: true
  private _hostnames?: string[]; 
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // meshes - computed: false, optional: true, required: false
  private _meshes?: string[]; 
  public get meshes() {
    return this.getListAttribute('meshes');
  }
  public set meshes(value: string[]) {
    this._meshes = value;
  }
  public resetMeshes() {
    this._meshes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshesInput() {
    return this._meshes;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new NetworkServicesHttpRouteRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: NetworkServicesHttpRouteRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkServicesHttpRouteTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkServicesHttpRouteTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gateways),
      hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostnames),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      meshes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._meshes),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      rules: cdktf.listMapper(networkServicesHttpRouteRulesToTerraform, true)(this._rules.internalValue),
      timeouts: networkServicesHttpRouteTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateways: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._gateways),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hostnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostnames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      meshes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._meshes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      rules: {
        value: cdktf.listMapperHcl(networkServicesHttpRouteRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkServicesHttpRouteRulesList",
      },
      timeouts: {
        value: networkServicesHttpRouteTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkServicesHttpRouteTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
