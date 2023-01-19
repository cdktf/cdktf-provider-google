// https://www.terraform.io/docs/providers/google/r/dns_record_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsRecordSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#id DnsRecordSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the zone in which this record set will reside.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#managed_zone DnsRecordSet#managed_zone}
  */
  readonly managedZone: string;
  /**
  * The DNS name this record set will apply to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#name DnsRecordSet#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#project DnsRecordSet#project}
  */
  readonly project?: string;
  /**
  * The string data for the records in this record set whose meaning depends on the DNS type. For TXT record, if the string data contains spaces, add surrounding \" if you don't want your string to get split on spaces. To specify a single record value longer than 255 characters such as a TXT record for DKIM, add \"\" inside the Terraform configuration string (e.g. "first255characters\"\"morecharacters").
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#rrdatas DnsRecordSet#rrdatas}
  */
  readonly rrdatas?: string[];
  /**
  * The time-to-live of this record set (seconds).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#ttl DnsRecordSet#ttl}
  */
  readonly ttl?: number;
  /**
  * The DNS record set type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#type DnsRecordSet#type}
  */
  readonly type: string;
  /**
  * routing_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#routing_policy DnsRecordSet#routing_policy}
  */
  readonly routingPolicy?: DnsRecordSetRoutingPolicy;
}
export interface DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers {
  /**
  * The frontend IP address of the load balancer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#ip_address DnsRecordSet#ip_address}
  */
  readonly ipAddress: string;
  /**
  * The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#ip_protocol DnsRecordSet#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#load_balancer_type DnsRecordSet#load_balancer_type}
  */
  readonly loadBalancerType: string;
  /**
  * The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#network_url DnsRecordSet#network_url}
  */
  readonly networkUrl: string;
  /**
  * The configured port of the load balancer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#port DnsRecordSet#port}
  */
  readonly port: string;
  /**
  * The ID of the project in which the load balancer belongs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#project DnsRecordSet#project}
  */
  readonly project: string;
  /**
  * The region of the load balancer. Only needed for regional load balancers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#region DnsRecordSet#region}
  */
  readonly region?: string;
}

export function dnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersToTerraform(struct?: DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    load_balancer_type: cdktf.stringToTerraform(struct!.loadBalancerType),
    network_url: cdktf.stringToTerraform(struct!.networkUrl),
    port: cdktf.stringToTerraform(struct!.port),
    project: cdktf.stringToTerraform(struct!.project),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export class DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._loadBalancerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerType = this._loadBalancerType;
    }
    if (this._networkUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkUrl = this._networkUrl;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._ipProtocol = undefined;
      this._loadBalancerType = undefined;
      this._networkUrl = undefined;
      this._port = undefined;
      this._project = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._ipProtocol = value.ipProtocol;
      this._loadBalancerType = value.loadBalancerType;
      this._networkUrl = value.networkUrl;
      this._port = value.port;
      this._project = value.project;
      this._region = value.region;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_protocol - computed: false, optional: false, required: true
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // load_balancer_type - computed: false, optional: false, required: true
  private _loadBalancerType?: string; 
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }
  public set loadBalancerType(value: string) {
    this._loadBalancerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTypeInput() {
    return this._loadBalancerType;
  }

  // network_url - computed: false, optional: false, required: true
  private _networkUrl?: string; 
  public get networkUrl() {
    return this.getStringAttribute('network_url');
  }
  public set networkUrl(value: string) {
    this._networkUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUrlInput() {
    return this._networkUrl;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: true, required: false
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
}

export class DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList extends cdktf.ComplexList {
  public internalValue? : DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers[] | cdktf.IResolvable

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
  public get(index: number): DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference {
    return new DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsRecordSetRoutingPolicyGeoHealthCheckedTargets {
  /**
  * internal_load_balancers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#internal_load_balancers DnsRecordSet#internal_load_balancers}
  */
  readonly internalLoadBalancers: DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers[] | cdktf.IResolvable;
}

export function dnsRecordSetRoutingPolicyGeoHealthCheckedTargetsToTerraform(struct?: DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference | DnsRecordSetRoutingPolicyGeoHealthCheckedTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_load_balancers: cdktf.listMapper(dnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersToTerraform, true)(struct!.internalLoadBalancers),
  }
}

export class DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsRecordSetRoutingPolicyGeoHealthCheckedTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalLoadBalancers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalLoadBalancers = this._internalLoadBalancers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordSetRoutingPolicyGeoHealthCheckedTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._internalLoadBalancers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._internalLoadBalancers.internalValue = value.internalLoadBalancers;
    }
  }

  // internal_load_balancers - computed: false, optional: false, required: true
  private _internalLoadBalancers = new DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancersList(this, "internal_load_balancers", false);
  public get internalLoadBalancers() {
    return this._internalLoadBalancers;
  }
  public putInternalLoadBalancers(value: DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers[] | cdktf.IResolvable) {
    this._internalLoadBalancers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalLoadBalancersInput() {
    return this._internalLoadBalancers.internalValue;
  }
}
export interface DnsRecordSetRoutingPolicyGeo {
  /**
  * The location name defined in Google Cloud.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#location DnsRecordSet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#rrdatas DnsRecordSet#rrdatas}
  */
  readonly rrdatas?: string[];
  /**
  * health_checked_targets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#health_checked_targets DnsRecordSet#health_checked_targets}
  */
  readonly healthCheckedTargets?: DnsRecordSetRoutingPolicyGeoHealthCheckedTargets;
}

export function dnsRecordSetRoutingPolicyGeoToTerraform(struct?: DnsRecordSetRoutingPolicyGeo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    rrdatas: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rrdatas),
    health_checked_targets: dnsRecordSetRoutingPolicyGeoHealthCheckedTargetsToTerraform(struct!.healthCheckedTargets),
  }
}

export class DnsRecordSetRoutingPolicyGeoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsRecordSetRoutingPolicyGeo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._rrdatas !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrdatas = this._rrdatas;
    }
    if (this._healthCheckedTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckedTargets = this._healthCheckedTargets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordSetRoutingPolicyGeo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._rrdatas = undefined;
      this._healthCheckedTargets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._rrdatas = value.rrdatas;
      this._healthCheckedTargets.internalValue = value.healthCheckedTargets;
    }
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

  // rrdatas - computed: false, optional: true, required: false
  private _rrdatas?: string[]; 
  public get rrdatas() {
    return this.getListAttribute('rrdatas');
  }
  public set rrdatas(value: string[]) {
    this._rrdatas = value;
  }
  public resetRrdatas() {
    this._rrdatas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrdatasInput() {
    return this._rrdatas;
  }

  // health_checked_targets - computed: false, optional: true, required: false
  private _healthCheckedTargets = new DnsRecordSetRoutingPolicyGeoHealthCheckedTargetsOutputReference(this, "health_checked_targets");
  public get healthCheckedTargets() {
    return this._healthCheckedTargets;
  }
  public putHealthCheckedTargets(value: DnsRecordSetRoutingPolicyGeoHealthCheckedTargets) {
    this._healthCheckedTargets.internalValue = value;
  }
  public resetHealthCheckedTargets() {
    this._healthCheckedTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckedTargetsInput() {
    return this._healthCheckedTargets.internalValue;
  }
}

export class DnsRecordSetRoutingPolicyGeoList extends cdktf.ComplexList {
  public internalValue? : DnsRecordSetRoutingPolicyGeo[] | cdktf.IResolvable

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
  public get(index: number): DnsRecordSetRoutingPolicyGeoOutputReference {
    return new DnsRecordSetRoutingPolicyGeoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers {
  /**
  * The frontend IP address of the load balancer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#ip_address DnsRecordSet#ip_address}
  */
  readonly ipAddress: string;
  /**
  * The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#ip_protocol DnsRecordSet#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#load_balancer_type DnsRecordSet#load_balancer_type}
  */
  readonly loadBalancerType: string;
  /**
  * The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#network_url DnsRecordSet#network_url}
  */
  readonly networkUrl: string;
  /**
  * The configured port of the load balancer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#port DnsRecordSet#port}
  */
  readonly port: string;
  /**
  * The ID of the project in which the load balancer belongs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#project DnsRecordSet#project}
  */
  readonly project: string;
  /**
  * The region of the load balancer. Only needed for regional load balancers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#region DnsRecordSet#region}
  */
  readonly region?: string;
}

export function dnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersToTerraform(struct?: DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    load_balancer_type: cdktf.stringToTerraform(struct!.loadBalancerType),
    network_url: cdktf.stringToTerraform(struct!.networkUrl),
    port: cdktf.stringToTerraform(struct!.port),
    project: cdktf.stringToTerraform(struct!.project),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export class DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._loadBalancerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerType = this._loadBalancerType;
    }
    if (this._networkUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkUrl = this._networkUrl;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._ipProtocol = undefined;
      this._loadBalancerType = undefined;
      this._networkUrl = undefined;
      this._port = undefined;
      this._project = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._ipProtocol = value.ipProtocol;
      this._loadBalancerType = value.loadBalancerType;
      this._networkUrl = value.networkUrl;
      this._port = value.port;
      this._project = value.project;
      this._region = value.region;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_protocol - computed: false, optional: false, required: true
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // load_balancer_type - computed: false, optional: false, required: true
  private _loadBalancerType?: string; 
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }
  public set loadBalancerType(value: string) {
    this._loadBalancerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTypeInput() {
    return this._loadBalancerType;
  }

  // network_url - computed: false, optional: false, required: true
  private _networkUrl?: string; 
  public get networkUrl() {
    return this.getStringAttribute('network_url');
  }
  public set networkUrl(value: string) {
    this._networkUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUrlInput() {
    return this._networkUrl;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: true, required: false
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
}

export class DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList extends cdktf.ComplexList {
  public internalValue? : DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers[] | cdktf.IResolvable

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
  public get(index: number): DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference {
    return new DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets {
  /**
  * internal_load_balancers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#internal_load_balancers DnsRecordSet#internal_load_balancers}
  */
  readonly internalLoadBalancers: DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers[] | cdktf.IResolvable;
}

export function dnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsToTerraform(struct?: DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference | DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_load_balancers: cdktf.listMapper(dnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersToTerraform, true)(struct!.internalLoadBalancers),
  }
}

export class DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalLoadBalancers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalLoadBalancers = this._internalLoadBalancers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._internalLoadBalancers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._internalLoadBalancers.internalValue = value.internalLoadBalancers;
    }
  }

  // internal_load_balancers - computed: false, optional: false, required: true
  private _internalLoadBalancers = new DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancersList(this, "internal_load_balancers", false);
  public get internalLoadBalancers() {
    return this._internalLoadBalancers;
  }
  public putInternalLoadBalancers(value: DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers[] | cdktf.IResolvable) {
    this._internalLoadBalancers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalLoadBalancersInput() {
    return this._internalLoadBalancers.internalValue;
  }
}
export interface DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo {
  /**
  * The location name defined in Google Cloud.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#location DnsRecordSet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#rrdatas DnsRecordSet#rrdatas}
  */
  readonly rrdatas?: string[];
  /**
  * health_checked_targets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#health_checked_targets DnsRecordSet#health_checked_targets}
  */
  readonly healthCheckedTargets?: DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets;
}

export function dnsRecordSetRoutingPolicyPrimaryBackupBackupGeoToTerraform(struct?: DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    rrdatas: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rrdatas),
    health_checked_targets: dnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsToTerraform(struct!.healthCheckedTargets),
  }
}

export class DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._rrdatas !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrdatas = this._rrdatas;
    }
    if (this._healthCheckedTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckedTargets = this._healthCheckedTargets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._rrdatas = undefined;
      this._healthCheckedTargets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._rrdatas = value.rrdatas;
      this._healthCheckedTargets.internalValue = value.healthCheckedTargets;
    }
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

  // rrdatas - computed: false, optional: true, required: false
  private _rrdatas?: string[]; 
  public get rrdatas() {
    return this.getListAttribute('rrdatas');
  }
  public set rrdatas(value: string[]) {
    this._rrdatas = value;
  }
  public resetRrdatas() {
    this._rrdatas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrdatasInput() {
    return this._rrdatas;
  }

  // health_checked_targets - computed: false, optional: true, required: false
  private _healthCheckedTargets = new DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsOutputReference(this, "health_checked_targets");
  public get healthCheckedTargets() {
    return this._healthCheckedTargets;
  }
  public putHealthCheckedTargets(value: DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets) {
    this._healthCheckedTargets.internalValue = value;
  }
  public resetHealthCheckedTargets() {
    this._healthCheckedTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckedTargetsInput() {
    return this._healthCheckedTargets.internalValue;
  }
}

export class DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList extends cdktf.ComplexList {
  public internalValue? : DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo[] | cdktf.IResolvable

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
  public get(index: number): DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference {
    return new DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers {
  /**
  * The frontend IP address of the load balancer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#ip_address DnsRecordSet#ip_address}
  */
  readonly ipAddress: string;
  /**
  * The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#ip_protocol DnsRecordSet#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#load_balancer_type DnsRecordSet#load_balancer_type}
  */
  readonly loadBalancerType: string;
  /**
  * The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#network_url DnsRecordSet#network_url}
  */
  readonly networkUrl: string;
  /**
  * The configured port of the load balancer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#port DnsRecordSet#port}
  */
  readonly port: string;
  /**
  * The ID of the project in which the load balancer belongs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#project DnsRecordSet#project}
  */
  readonly project: string;
  /**
  * The region of the load balancer. Only needed for regional load balancers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#region DnsRecordSet#region}
  */
  readonly region?: string;
}

export function dnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersToTerraform(struct?: DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    load_balancer_type: cdktf.stringToTerraform(struct!.loadBalancerType),
    network_url: cdktf.stringToTerraform(struct!.networkUrl),
    port: cdktf.stringToTerraform(struct!.port),
    project: cdktf.stringToTerraform(struct!.project),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export class DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._loadBalancerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerType = this._loadBalancerType;
    }
    if (this._networkUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkUrl = this._networkUrl;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._ipProtocol = undefined;
      this._loadBalancerType = undefined;
      this._networkUrl = undefined;
      this._port = undefined;
      this._project = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._ipProtocol = value.ipProtocol;
      this._loadBalancerType = value.loadBalancerType;
      this._networkUrl = value.networkUrl;
      this._port = value.port;
      this._project = value.project;
      this._region = value.region;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_protocol - computed: false, optional: false, required: true
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // load_balancer_type - computed: false, optional: false, required: true
  private _loadBalancerType?: string; 
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }
  public set loadBalancerType(value: string) {
    this._loadBalancerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTypeInput() {
    return this._loadBalancerType;
  }

  // network_url - computed: false, optional: false, required: true
  private _networkUrl?: string; 
  public get networkUrl() {
    return this.getStringAttribute('network_url');
  }
  public set networkUrl(value: string) {
    this._networkUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUrlInput() {
    return this._networkUrl;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: true, required: false
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
}

export class DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList extends cdktf.ComplexList {
  public internalValue? : DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers[] | cdktf.IResolvable

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
  public get(index: number): DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference {
    return new DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsRecordSetRoutingPolicyPrimaryBackupPrimary {
  /**
  * internal_load_balancers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#internal_load_balancers DnsRecordSet#internal_load_balancers}
  */
  readonly internalLoadBalancers: DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers[] | cdktf.IResolvable;
}

export function dnsRecordSetRoutingPolicyPrimaryBackupPrimaryToTerraform(struct?: DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference | DnsRecordSetRoutingPolicyPrimaryBackupPrimary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_load_balancers: cdktf.listMapper(dnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersToTerraform, true)(struct!.internalLoadBalancers),
  }
}

export class DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsRecordSetRoutingPolicyPrimaryBackupPrimary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalLoadBalancers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalLoadBalancers = this._internalLoadBalancers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordSetRoutingPolicyPrimaryBackupPrimary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._internalLoadBalancers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._internalLoadBalancers.internalValue = value.internalLoadBalancers;
    }
  }

  // internal_load_balancers - computed: false, optional: false, required: true
  private _internalLoadBalancers = new DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancersList(this, "internal_load_balancers", false);
  public get internalLoadBalancers() {
    return this._internalLoadBalancers;
  }
  public putInternalLoadBalancers(value: DnsRecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers[] | cdktf.IResolvable) {
    this._internalLoadBalancers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalLoadBalancersInput() {
    return this._internalLoadBalancers.internalValue;
  }
}
export interface DnsRecordSetRoutingPolicyPrimaryBackup {
  /**
  * Specifies whether to enable fencing for backup geo queries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#enable_geo_fencing_for_backups DnsRecordSet#enable_geo_fencing_for_backups}
  */
  readonly enableGeoFencingForBackups?: boolean | cdktf.IResolvable;
  /**
  * Specifies the percentage of traffic to send to the backup targets even when the primary targets are healthy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#trickle_ratio DnsRecordSet#trickle_ratio}
  */
  readonly trickleRatio?: number;
  /**
  * backup_geo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#backup_geo DnsRecordSet#backup_geo}
  */
  readonly backupGeo: DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo[] | cdktf.IResolvable;
  /**
  * primary block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#primary DnsRecordSet#primary}
  */
  readonly primary: DnsRecordSetRoutingPolicyPrimaryBackupPrimary;
}

export function dnsRecordSetRoutingPolicyPrimaryBackupToTerraform(struct?: DnsRecordSetRoutingPolicyPrimaryBackupOutputReference | DnsRecordSetRoutingPolicyPrimaryBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_geo_fencing_for_backups: cdktf.booleanToTerraform(struct!.enableGeoFencingForBackups),
    trickle_ratio: cdktf.numberToTerraform(struct!.trickleRatio),
    backup_geo: cdktf.listMapper(dnsRecordSetRoutingPolicyPrimaryBackupBackupGeoToTerraform, true)(struct!.backupGeo),
    primary: dnsRecordSetRoutingPolicyPrimaryBackupPrimaryToTerraform(struct!.primary),
  }
}

export class DnsRecordSetRoutingPolicyPrimaryBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsRecordSetRoutingPolicyPrimaryBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableGeoFencingForBackups !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableGeoFencingForBackups = this._enableGeoFencingForBackups;
    }
    if (this._trickleRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.trickleRatio = this._trickleRatio;
    }
    if (this._backupGeo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupGeo = this._backupGeo?.internalValue;
    }
    if (this._primary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordSetRoutingPolicyPrimaryBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableGeoFencingForBackups = undefined;
      this._trickleRatio = undefined;
      this._backupGeo.internalValue = undefined;
      this._primary.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableGeoFencingForBackups = value.enableGeoFencingForBackups;
      this._trickleRatio = value.trickleRatio;
      this._backupGeo.internalValue = value.backupGeo;
      this._primary.internalValue = value.primary;
    }
  }

  // enable_geo_fencing_for_backups - computed: false, optional: true, required: false
  private _enableGeoFencingForBackups?: boolean | cdktf.IResolvable; 
  public get enableGeoFencingForBackups() {
    return this.getBooleanAttribute('enable_geo_fencing_for_backups');
  }
  public set enableGeoFencingForBackups(value: boolean | cdktf.IResolvable) {
    this._enableGeoFencingForBackups = value;
  }
  public resetEnableGeoFencingForBackups() {
    this._enableGeoFencingForBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGeoFencingForBackupsInput() {
    return this._enableGeoFencingForBackups;
  }

  // trickle_ratio - computed: false, optional: true, required: false
  private _trickleRatio?: number; 
  public get trickleRatio() {
    return this.getNumberAttribute('trickle_ratio');
  }
  public set trickleRatio(value: number) {
    this._trickleRatio = value;
  }
  public resetTrickleRatio() {
    this._trickleRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trickleRatioInput() {
    return this._trickleRatio;
  }

  // backup_geo - computed: false, optional: false, required: true
  private _backupGeo = new DnsRecordSetRoutingPolicyPrimaryBackupBackupGeoList(this, "backup_geo", false);
  public get backupGeo() {
    return this._backupGeo;
  }
  public putBackupGeo(value: DnsRecordSetRoutingPolicyPrimaryBackupBackupGeo[] | cdktf.IResolvable) {
    this._backupGeo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupGeoInput() {
    return this._backupGeo.internalValue;
  }

  // primary - computed: false, optional: false, required: true
  private _primary = new DnsRecordSetRoutingPolicyPrimaryBackupPrimaryOutputReference(this, "primary");
  public get primary() {
    return this._primary;
  }
  public putPrimary(value: DnsRecordSetRoutingPolicyPrimaryBackupPrimary) {
    this._primary.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary.internalValue;
  }
}
export interface DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers {
  /**
  * The frontend IP address of the load balancer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#ip_address DnsRecordSet#ip_address}
  */
  readonly ipAddress: string;
  /**
  * The configured IP protocol of the load balancer. This value is case-sensitive. Possible values: ["tcp", "udp"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#ip_protocol DnsRecordSet#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * The type of load balancer. This value is case-sensitive. Possible values: ["regionalL4ilb"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#load_balancer_type DnsRecordSet#load_balancer_type}
  */
  readonly loadBalancerType: string;
  /**
  * The fully qualified url of the network in which the load balancer belongs. This should be formatted like `https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#network_url DnsRecordSet#network_url}
  */
  readonly networkUrl: string;
  /**
  * The configured port of the load balancer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#port DnsRecordSet#port}
  */
  readonly port: string;
  /**
  * The ID of the project in which the load balancer belongs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#project DnsRecordSet#project}
  */
  readonly project: string;
  /**
  * The region of the load balancer. Only needed for regional load balancers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#region DnsRecordSet#region}
  */
  readonly region?: string;
}

export function dnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersToTerraform(struct?: DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    load_balancer_type: cdktf.stringToTerraform(struct!.loadBalancerType),
    network_url: cdktf.stringToTerraform(struct!.networkUrl),
    port: cdktf.stringToTerraform(struct!.port),
    project: cdktf.stringToTerraform(struct!.project),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export class DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._loadBalancerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerType = this._loadBalancerType;
    }
    if (this._networkUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkUrl = this._networkUrl;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._ipProtocol = undefined;
      this._loadBalancerType = undefined;
      this._networkUrl = undefined;
      this._port = undefined;
      this._project = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._ipProtocol = value.ipProtocol;
      this._loadBalancerType = value.loadBalancerType;
      this._networkUrl = value.networkUrl;
      this._port = value.port;
      this._project = value.project;
      this._region = value.region;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_protocol - computed: false, optional: false, required: true
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // load_balancer_type - computed: false, optional: false, required: true
  private _loadBalancerType?: string; 
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }
  public set loadBalancerType(value: string) {
    this._loadBalancerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTypeInput() {
    return this._loadBalancerType;
  }

  // network_url - computed: false, optional: false, required: true
  private _networkUrl?: string; 
  public get networkUrl() {
    return this.getStringAttribute('network_url');
  }
  public set networkUrl(value: string) {
    this._networkUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUrlInput() {
    return this._networkUrl;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: true, required: false
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
}

export class DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList extends cdktf.ComplexList {
  public internalValue? : DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers[] | cdktf.IResolvable

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
  public get(index: number): DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference {
    return new DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsRecordSetRoutingPolicyWrrHealthCheckedTargets {
  /**
  * internal_load_balancers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#internal_load_balancers DnsRecordSet#internal_load_balancers}
  */
  readonly internalLoadBalancers: DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers[] | cdktf.IResolvable;
}

export function dnsRecordSetRoutingPolicyWrrHealthCheckedTargetsToTerraform(struct?: DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference | DnsRecordSetRoutingPolicyWrrHealthCheckedTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_load_balancers: cdktf.listMapper(dnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersToTerraform, true)(struct!.internalLoadBalancers),
  }
}

export class DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsRecordSetRoutingPolicyWrrHealthCheckedTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalLoadBalancers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalLoadBalancers = this._internalLoadBalancers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordSetRoutingPolicyWrrHealthCheckedTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._internalLoadBalancers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._internalLoadBalancers.internalValue = value.internalLoadBalancers;
    }
  }

  // internal_load_balancers - computed: false, optional: false, required: true
  private _internalLoadBalancers = new DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancersList(this, "internal_load_balancers", false);
  public get internalLoadBalancers() {
    return this._internalLoadBalancers;
  }
  public putInternalLoadBalancers(value: DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers[] | cdktf.IResolvable) {
    this._internalLoadBalancers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalLoadBalancersInput() {
    return this._internalLoadBalancers.internalValue;
  }
}
export interface DnsRecordSetRoutingPolicyWrr {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#rrdatas DnsRecordSet#rrdatas}
  */
  readonly rrdatas?: string[];
  /**
  * The ratio of traffic routed to the target.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#weight DnsRecordSet#weight}
  */
  readonly weight: number;
  /**
  * health_checked_targets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#health_checked_targets DnsRecordSet#health_checked_targets}
  */
  readonly healthCheckedTargets?: DnsRecordSetRoutingPolicyWrrHealthCheckedTargets;
}

export function dnsRecordSetRoutingPolicyWrrToTerraform(struct?: DnsRecordSetRoutingPolicyWrr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rrdatas: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rrdatas),
    weight: cdktf.numberToTerraform(struct!.weight),
    health_checked_targets: dnsRecordSetRoutingPolicyWrrHealthCheckedTargetsToTerraform(struct!.healthCheckedTargets),
  }
}

export class DnsRecordSetRoutingPolicyWrrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsRecordSetRoutingPolicyWrr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rrdatas !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrdatas = this._rrdatas;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._healthCheckedTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckedTargets = this._healthCheckedTargets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordSetRoutingPolicyWrr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rrdatas = undefined;
      this._weight = undefined;
      this._healthCheckedTargets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rrdatas = value.rrdatas;
      this._weight = value.weight;
      this._healthCheckedTargets.internalValue = value.healthCheckedTargets;
    }
  }

  // rrdatas - computed: false, optional: true, required: false
  private _rrdatas?: string[]; 
  public get rrdatas() {
    return this.getListAttribute('rrdatas');
  }
  public set rrdatas(value: string[]) {
    this._rrdatas = value;
  }
  public resetRrdatas() {
    this._rrdatas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrdatasInput() {
    return this._rrdatas;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // health_checked_targets - computed: false, optional: true, required: false
  private _healthCheckedTargets = new DnsRecordSetRoutingPolicyWrrHealthCheckedTargetsOutputReference(this, "health_checked_targets");
  public get healthCheckedTargets() {
    return this._healthCheckedTargets;
  }
  public putHealthCheckedTargets(value: DnsRecordSetRoutingPolicyWrrHealthCheckedTargets) {
    this._healthCheckedTargets.internalValue = value;
  }
  public resetHealthCheckedTargets() {
    this._healthCheckedTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckedTargetsInput() {
    return this._healthCheckedTargets.internalValue;
  }
}

export class DnsRecordSetRoutingPolicyWrrList extends cdktf.ComplexList {
  public internalValue? : DnsRecordSetRoutingPolicyWrr[] | cdktf.IResolvable

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
  public get(index: number): DnsRecordSetRoutingPolicyWrrOutputReference {
    return new DnsRecordSetRoutingPolicyWrrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsRecordSetRoutingPolicy {
  /**
  * Specifies whether to enable fencing for geo queries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#enable_geo_fencing DnsRecordSet#enable_geo_fencing}
  */
  readonly enableGeoFencing?: boolean | cdktf.IResolvable;
  /**
  * geo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#geo DnsRecordSet#geo}
  */
  readonly geo?: DnsRecordSetRoutingPolicyGeo[] | cdktf.IResolvable;
  /**
  * primary_backup block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#primary_backup DnsRecordSet#primary_backup}
  */
  readonly primaryBackup?: DnsRecordSetRoutingPolicyPrimaryBackup;
  /**
  * wrr block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#wrr DnsRecordSet#wrr}
  */
  readonly wrr?: DnsRecordSetRoutingPolicyWrr[] | cdktf.IResolvable;
}

export function dnsRecordSetRoutingPolicyToTerraform(struct?: DnsRecordSetRoutingPolicyOutputReference | DnsRecordSetRoutingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_geo_fencing: cdktf.booleanToTerraform(struct!.enableGeoFencing),
    geo: cdktf.listMapper(dnsRecordSetRoutingPolicyGeoToTerraform, true)(struct!.geo),
    primary_backup: dnsRecordSetRoutingPolicyPrimaryBackupToTerraform(struct!.primaryBackup),
    wrr: cdktf.listMapper(dnsRecordSetRoutingPolicyWrrToTerraform, true)(struct!.wrr),
  }
}

export class DnsRecordSetRoutingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsRecordSetRoutingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableGeoFencing !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableGeoFencing = this._enableGeoFencing;
    }
    if (this._geo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geo = this._geo?.internalValue;
    }
    if (this._primaryBackup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryBackup = this._primaryBackup?.internalValue;
    }
    if (this._wrr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrr = this._wrr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordSetRoutingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableGeoFencing = undefined;
      this._geo.internalValue = undefined;
      this._primaryBackup.internalValue = undefined;
      this._wrr.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableGeoFencing = value.enableGeoFencing;
      this._geo.internalValue = value.geo;
      this._primaryBackup.internalValue = value.primaryBackup;
      this._wrr.internalValue = value.wrr;
    }
  }

  // enable_geo_fencing - computed: false, optional: true, required: false
  private _enableGeoFencing?: boolean | cdktf.IResolvable; 
  public get enableGeoFencing() {
    return this.getBooleanAttribute('enable_geo_fencing');
  }
  public set enableGeoFencing(value: boolean | cdktf.IResolvable) {
    this._enableGeoFencing = value;
  }
  public resetEnableGeoFencing() {
    this._enableGeoFencing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGeoFencingInput() {
    return this._enableGeoFencing;
  }

  // geo - computed: false, optional: true, required: false
  private _geo = new DnsRecordSetRoutingPolicyGeoList(this, "geo", false);
  public get geo() {
    return this._geo;
  }
  public putGeo(value: DnsRecordSetRoutingPolicyGeo[] | cdktf.IResolvable) {
    this._geo.internalValue = value;
  }
  public resetGeo() {
    this._geo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoInput() {
    return this._geo.internalValue;
  }

  // primary_backup - computed: false, optional: true, required: false
  private _primaryBackup = new DnsRecordSetRoutingPolicyPrimaryBackupOutputReference(this, "primary_backup");
  public get primaryBackup() {
    return this._primaryBackup;
  }
  public putPrimaryBackup(value: DnsRecordSetRoutingPolicyPrimaryBackup) {
    this._primaryBackup.internalValue = value;
  }
  public resetPrimaryBackup() {
    this._primaryBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryBackupInput() {
    return this._primaryBackup.internalValue;
  }

  // wrr - computed: false, optional: true, required: false
  private _wrr = new DnsRecordSetRoutingPolicyWrrList(this, "wrr", false);
  public get wrr() {
    return this._wrr;
  }
  public putWrr(value: DnsRecordSetRoutingPolicyWrr[] | cdktf.IResolvable) {
    this._wrr.internalValue = value;
  }
  public resetWrr() {
    this._wrr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrrInput() {
    return this._wrr.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dns_record_set google_dns_record_set}
*/
export class DnsRecordSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dns_record_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dns_record_set google_dns_record_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsRecordSetConfig
  */
  public constructor(scope: Construct, id: string, config: DnsRecordSetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dns_record_set',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.49.0',
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
    this._id = config.id;
    this._managedZone = config.managedZone;
    this._name = config.name;
    this._project = config.project;
    this._rrdatas = config.rrdatas;
    this._ttl = config.ttl;
    this._type = config.type;
    this._routingPolicy.internalValue = config.routingPolicy;
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

  // managed_zone - computed: false, optional: false, required: true
  private _managedZone?: string; 
  public get managedZone() {
    return this.getStringAttribute('managed_zone');
  }
  public set managedZone(value: string) {
    this._managedZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedZoneInput() {
    return this._managedZone;
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

  // rrdatas - computed: false, optional: true, required: false
  private _rrdatas?: string[]; 
  public get rrdatas() {
    return this.getListAttribute('rrdatas');
  }
  public set rrdatas(value: string[]) {
    this._rrdatas = value;
  }
  public resetRrdatas() {
    this._rrdatas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrdatasInput() {
    return this._rrdatas;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // routing_policy - computed: false, optional: true, required: false
  private _routingPolicy = new DnsRecordSetRoutingPolicyOutputReference(this, "routing_policy");
  public get routingPolicy() {
    return this._routingPolicy;
  }
  public putRoutingPolicy(value: DnsRecordSetRoutingPolicy) {
    this._routingPolicy.internalValue = value;
  }
  public resetRoutingPolicy() {
    this._routingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyInput() {
    return this._routingPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      managed_zone: cdktf.stringToTerraform(this._managedZone),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      rrdatas: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rrdatas),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      routing_policy: dnsRecordSetRoutingPolicyToTerraform(this._routingPolicy.internalValue),
    };
  }
}
