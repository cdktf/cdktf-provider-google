// https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkServicesLbTrafficExtensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human-readable description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#description NetworkServicesLbTrafficExtension#description}
  */
  readonly description?: string;
  /**
  * A list of references to the forwarding rules to which this service extension is attached to.
  * At least one forwarding rule is required. There can be only one LBTrafficExtension resource per forwarding rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#forwarding_rules NetworkServicesLbTrafficExtension#forwarding_rules}
  */
  readonly forwardingRules: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#id NetworkServicesLbTrafficExtension#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of labels associated with the LbTrafficExtension resource.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#labels NetworkServicesLbTrafficExtension#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.
  * For more information, refer to [Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service) and
  * [Supported application load balancers](https://cloud.google.com/service-extensions/docs/callouts-overview#supported-lbs). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#load_balancing_scheme NetworkServicesLbTrafficExtension#load_balancing_scheme}
  */
  readonly loadBalancingScheme?: string;
  /**
  * The location of the traffic extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#location NetworkServicesLbTrafficExtension#location}
  */
  readonly location: string;
  /**
  * Name of the LbTrafficExtension resource in the following format: projects/{project}/locations/{location}/lbTrafficExtensions/{lbTrafficExtension}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#name NetworkServicesLbTrafficExtension#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#project NetworkServicesLbTrafficExtension#project}
  */
  readonly project?: string;
  /**
  * extension_chains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#extension_chains NetworkServicesLbTrafficExtension#extension_chains}
  */
  readonly extensionChains: NetworkServicesLbTrafficExtensionExtensionChains[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#timeouts NetworkServicesLbTrafficExtension#timeouts}
  */
  readonly timeouts?: NetworkServicesLbTrafficExtensionTimeouts;
}
export interface NetworkServicesLbTrafficExtensionExtensionChainsExtensions {
  /**
  * The :authority header in the gRPC request sent from Envoy to the extension service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#authority NetworkServicesLbTrafficExtension#authority}
  */
  readonly authority?: string;
  /**
  * Determines how the proxy behaves if the call to the extension fails or times out.
  * When set to TRUE, request or response processing continues without error.
  * Any subsequent extensions in the extension chain are also executed.
  * When set to FALSE: * If response headers have not been delivered to the downstream client,
  * a generic 500 error is returned to the client. The error response can be tailored by
  * configuring a custom error response in the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#fail_open NetworkServicesLbTrafficExtension#fail_open}
  */
  readonly failOpen?: boolean | cdktf.IResolvable;
  /**
  * List of the HTTP headers to forward to the extension (from the client or backend).
  * If omitted, all headers are sent. Each element is a string indicating the header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#forward_headers NetworkServicesLbTrafficExtension#forward_headers}
  */
  readonly forwardHeaders?: string[];
  /**
  * Metadata associated with the extension. This field is used to pass metadata to the extension service.
  * You can set up key value pairs for metadata as you like and need.
  * f.e. {"key": "value", "key2": "value2"}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#metadata NetworkServicesLbTrafficExtension#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The name for this extension. The name is logged as part of the HTTP request logs.
  * The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
  * and can have a maximum length of 63 characters. Additionally, the first character must be a letter
  * and the last a letter or a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#name NetworkServicesLbTrafficExtension#name}
  */
  readonly name: string;
  /**
  * The reference to the service that runs the extension. Must be a reference to a backend service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#service NetworkServicesLbTrafficExtension#service}
  */
  readonly service: string;
  /**
  * A set of events during request or response processing for which this extension is called.
  * This field is required for the LbTrafficExtension resource. It's not relevant for the LbRouteExtension
  * resource. Possible values:'EVENT_TYPE_UNSPECIFIED', 'REQUEST_HEADERS', 'REQUEST_BODY', 'RESPONSE_HEADERS',
  * 'RESPONSE_BODY', 'RESPONSE_BODY' and 'RESPONSE_BODY'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#supported_events NetworkServicesLbTrafficExtension#supported_events}
  */
  readonly supportedEvents?: string[];
  /**
  * Specifies the timeout for each individual message on the stream. The timeout must be between 10-1000 milliseconds.
  * A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#timeout NetworkServicesLbTrafficExtension#timeout}
  */
  readonly timeout?: string;
}

export function networkServicesLbTrafficExtensionExtensionChainsExtensionsToTerraform(struct?: NetworkServicesLbTrafficExtensionExtensionChainsExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authority: cdktf.stringToTerraform(struct!.authority),
    fail_open: cdktf.booleanToTerraform(struct!.failOpen),
    forward_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.forwardHeaders),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    name: cdktf.stringToTerraform(struct!.name),
    service: cdktf.stringToTerraform(struct!.service),
    supported_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedEvents),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function networkServicesLbTrafficExtensionExtensionChainsExtensionsToHclTerraform(struct?: NetworkServicesLbTrafficExtensionExtensionChainsExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authority: {
      value: cdktf.stringToHclTerraform(struct!.authority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_open: {
      value: cdktf.booleanToHclTerraform(struct!.failOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.forwardHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    supported_events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedEvents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkServicesLbTrafficExtensionExtensionChainsExtensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authority !== undefined) {
      hasAnyValues = true;
      internalValueResult.authority = this._authority;
    }
    if (this._failOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOpen = this._failOpen;
    }
    if (this._forwardHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardHeaders = this._forwardHeaders;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._supportedEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedEvents = this._supportedEvents;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesLbTrafficExtensionExtensionChainsExtensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authority = undefined;
      this._failOpen = undefined;
      this._forwardHeaders = undefined;
      this._metadata = undefined;
      this._name = undefined;
      this._service = undefined;
      this._supportedEvents = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authority = value.authority;
      this._failOpen = value.failOpen;
      this._forwardHeaders = value.forwardHeaders;
      this._metadata = value.metadata;
      this._name = value.name;
      this._service = value.service;
      this._supportedEvents = value.supportedEvents;
      this._timeout = value.timeout;
    }
  }

  // authority - computed: false, optional: true, required: false
  private _authority?: string; 
  public get authority() {
    return this.getStringAttribute('authority');
  }
  public set authority(value: string) {
    this._authority = value;
  }
  public resetAuthority() {
    this._authority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorityInput() {
    return this._authority;
  }

  // fail_open - computed: false, optional: true, required: false
  private _failOpen?: boolean | cdktf.IResolvable; 
  public get failOpen() {
    return this.getBooleanAttribute('fail_open');
  }
  public set failOpen(value: boolean | cdktf.IResolvable) {
    this._failOpen = value;
  }
  public resetFailOpen() {
    this._failOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOpenInput() {
    return this._failOpen;
  }

  // forward_headers - computed: false, optional: true, required: false
  private _forwardHeaders?: string[]; 
  public get forwardHeaders() {
    return this.getListAttribute('forward_headers');
  }
  public set forwardHeaders(value: string[]) {
    this._forwardHeaders = value;
  }
  public resetForwardHeaders() {
    this._forwardHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardHeadersInput() {
    return this._forwardHeaders;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // supported_events - computed: false, optional: true, required: false
  private _supportedEvents?: string[]; 
  public get supportedEvents() {
    return this.getListAttribute('supported_events');
  }
  public set supportedEvents(value: string[]) {
    this._supportedEvents = value;
  }
  public resetSupportedEvents() {
    this._supportedEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedEventsInput() {
    return this._supportedEvents;
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
}

export class NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList extends cdktf.ComplexList {
  public internalValue? : NetworkServicesLbTrafficExtensionExtensionChainsExtensions[] | cdktf.IResolvable

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
  public get(index: number): NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference {
    return new NetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition {
  /**
  * A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#cel_expression NetworkServicesLbTrafficExtension#cel_expression}
  */
  readonly celExpression: string;
}

export function networkServicesLbTrafficExtensionExtensionChainsMatchConditionToTerraform(struct?: NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference | NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cel_expression: cdktf.stringToTerraform(struct!.celExpression),
  }
}


export function networkServicesLbTrafficExtensionExtensionChainsMatchConditionToHclTerraform(struct?: NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference | NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cel_expression: {
      value: cdktf.stringToHclTerraform(struct!.celExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._celExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.celExpression = this._celExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._celExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._celExpression = value.celExpression;
    }
  }

  // cel_expression - computed: false, optional: false, required: true
  private _celExpression?: string; 
  public get celExpression() {
    return this.getStringAttribute('cel_expression');
  }
  public set celExpression(value: string) {
    this._celExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get celExpressionInput() {
    return this._celExpression;
  }
}
export interface NetworkServicesLbTrafficExtensionExtensionChains {
  /**
  * The name for this extension chain. The name is logged as part of the HTTP request logs.
  * The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
  * and can have a maximum length of 63 characters. Additionally, the first character must be a letter
  * and the last a letter or a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#name NetworkServicesLbTrafficExtension#name}
  */
  readonly name: string;
  /**
  * extensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#extensions NetworkServicesLbTrafficExtension#extensions}
  */
  readonly extensions: NetworkServicesLbTrafficExtensionExtensionChainsExtensions[] | cdktf.IResolvable;
  /**
  * match_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#match_condition NetworkServicesLbTrafficExtension#match_condition}
  */
  readonly matchCondition: NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition;
}

export function networkServicesLbTrafficExtensionExtensionChainsToTerraform(struct?: NetworkServicesLbTrafficExtensionExtensionChains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    extensions: cdktf.listMapper(networkServicesLbTrafficExtensionExtensionChainsExtensionsToTerraform, true)(struct!.extensions),
    match_condition: networkServicesLbTrafficExtensionExtensionChainsMatchConditionToTerraform(struct!.matchCondition),
  }
}


export function networkServicesLbTrafficExtensionExtensionChainsToHclTerraform(struct?: NetworkServicesLbTrafficExtensionExtensionChains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extensions: {
      value: cdktf.listMapperHcl(networkServicesLbTrafficExtensionExtensionChainsExtensionsToHclTerraform, true)(struct!.extensions),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList",
    },
    match_condition: {
      value: networkServicesLbTrafficExtensionExtensionChainsMatchConditionToHclTerraform(struct!.matchCondition),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkServicesLbTrafficExtensionExtensionChainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkServicesLbTrafficExtensionExtensionChains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._extensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensions = this._extensions?.internalValue;
    }
    if (this._matchCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCondition = this._matchCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkServicesLbTrafficExtensionExtensionChains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._extensions.internalValue = undefined;
      this._matchCondition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._extensions.internalValue = value.extensions;
      this._matchCondition.internalValue = value.matchCondition;
    }
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

  // extensions - computed: false, optional: false, required: true
  private _extensions = new NetworkServicesLbTrafficExtensionExtensionChainsExtensionsList(this, "extensions", false);
  public get extensions() {
    return this._extensions;
  }
  public putExtensions(value: NetworkServicesLbTrafficExtensionExtensionChainsExtensions[] | cdktf.IResolvable) {
    this._extensions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions.internalValue;
  }

  // match_condition - computed: false, optional: false, required: true
  private _matchCondition = new NetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference(this, "match_condition");
  public get matchCondition() {
    return this._matchCondition;
  }
  public putMatchCondition(value: NetworkServicesLbTrafficExtensionExtensionChainsMatchCondition) {
    this._matchCondition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchConditionInput() {
    return this._matchCondition.internalValue;
  }
}

export class NetworkServicesLbTrafficExtensionExtensionChainsList extends cdktf.ComplexList {
  public internalValue? : NetworkServicesLbTrafficExtensionExtensionChains[] | cdktf.IResolvable

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
  public get(index: number): NetworkServicesLbTrafficExtensionExtensionChainsOutputReference {
    return new NetworkServicesLbTrafficExtensionExtensionChainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkServicesLbTrafficExtensionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#create NetworkServicesLbTrafficExtension#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#delete NetworkServicesLbTrafficExtension#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#update NetworkServicesLbTrafficExtension#update}
  */
  readonly update?: string;
}

export function networkServicesLbTrafficExtensionTimeoutsToTerraform(struct?: NetworkServicesLbTrafficExtensionTimeouts | cdktf.IResolvable): any {
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


export function networkServicesLbTrafficExtensionTimeoutsToHclTerraform(struct?: NetworkServicesLbTrafficExtensionTimeouts | cdktf.IResolvable): any {
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

export class NetworkServicesLbTrafficExtensionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkServicesLbTrafficExtensionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkServicesLbTrafficExtensionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension google_network_services_lb_traffic_extension}
*/
export class NetworkServicesLbTrafficExtension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_services_lb_traffic_extension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkServicesLbTrafficExtension resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkServicesLbTrafficExtension to import
  * @param importFromId The id of the existing NetworkServicesLbTrafficExtension that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkServicesLbTrafficExtension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_network_services_lb_traffic_extension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/network_services_lb_traffic_extension google_network_services_lb_traffic_extension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkServicesLbTrafficExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkServicesLbTrafficExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_services_lb_traffic_extension',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.36.0',
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
    this._forwardingRules = config.forwardingRules;
    this._id = config.id;
    this._labels = config.labels;
    this._loadBalancingScheme = config.loadBalancingScheme;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._extensionChains.internalValue = config.extensionChains;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // forwarding_rules - computed: false, optional: false, required: true
  private _forwardingRules?: string[]; 
  public get forwardingRules() {
    return this.getListAttribute('forwarding_rules');
  }
  public set forwardingRules(value: string[]) {
    this._forwardingRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingRulesInput() {
    return this._forwardingRules;
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

  // load_balancing_scheme - computed: false, optional: true, required: false
  private _loadBalancingScheme?: string; 
  public get loadBalancingScheme() {
    return this.getStringAttribute('load_balancing_scheme');
  }
  public set loadBalancingScheme(value: string) {
    this._loadBalancingScheme = value;
  }
  public resetLoadBalancingScheme() {
    this._loadBalancingScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingSchemeInput() {
    return this._loadBalancingScheme;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // extension_chains - computed: false, optional: false, required: true
  private _extensionChains = new NetworkServicesLbTrafficExtensionExtensionChainsList(this, "extension_chains", false);
  public get extensionChains() {
    return this._extensionChains;
  }
  public putExtensionChains(value: NetworkServicesLbTrafficExtensionExtensionChains[] | cdktf.IResolvable) {
    this._extensionChains.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionChainsInput() {
    return this._extensionChains.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkServicesLbTrafficExtensionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkServicesLbTrafficExtensionTimeouts) {
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
      forwarding_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._forwardingRules),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      load_balancing_scheme: cdktf.stringToTerraform(this._loadBalancingScheme),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      extension_chains: cdktf.listMapper(networkServicesLbTrafficExtensionExtensionChainsToTerraform, true)(this._extensionChains.internalValue),
      timeouts: networkServicesLbTrafficExtensionTimeoutsToTerraform(this._timeouts.internalValue),
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
      forwarding_rules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._forwardingRules),
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
      load_balancing_scheme: {
        value: cdktf.stringToHclTerraform(this._loadBalancingScheme),
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
      extension_chains: {
        value: cdktf.listMapperHcl(networkServicesLbTrafficExtensionExtensionChainsToHclTerraform, true)(this._extensionChains.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkServicesLbTrafficExtensionExtensionChainsList",
      },
      timeouts: {
        value: networkServicesLbTrafficExtensionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkServicesLbTrafficExtensionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
