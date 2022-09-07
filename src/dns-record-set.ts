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
  readonly rrdatas: string[];
}

export function dnsRecordSetRoutingPolicyGeoToTerraform(struct?: DnsRecordSetRoutingPolicyGeo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    rrdatas: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rrdatas),
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordSetRoutingPolicyGeo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._rrdatas = undefined;
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

  // rrdatas - computed: false, optional: false, required: true
  private _rrdatas?: string[]; 
  public get rrdatas() {
    return this.getListAttribute('rrdatas');
  }
  public set rrdatas(value: string[]) {
    this._rrdatas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rrdatasInput() {
    return this._rrdatas;
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
export interface DnsRecordSetRoutingPolicyWrr {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#rrdatas DnsRecordSet#rrdatas}
  */
  readonly rrdatas: string[];
  /**
  * The ratio of traffic routed to the target.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#weight DnsRecordSet#weight}
  */
  readonly weight: number;
}

export function dnsRecordSetRoutingPolicyWrrToTerraform(struct?: DnsRecordSetRoutingPolicyWrr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rrdatas: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rrdatas),
    weight: cdktf.numberToTerraform(struct!.weight),
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordSetRoutingPolicyWrr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rrdatas = undefined;
      this._weight = undefined;
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
    }
  }

  // rrdatas - computed: false, optional: false, required: true
  private _rrdatas?: string[]; 
  public get rrdatas() {
    return this.getListAttribute('rrdatas');
  }
  public set rrdatas(value: string[]) {
    this._rrdatas = value;
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
  * geo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dns_record_set#geo DnsRecordSet#geo}
  */
  readonly geo?: DnsRecordSetRoutingPolicyGeo[] | cdktf.IResolvable;
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
    geo: cdktf.listMapper(dnsRecordSetRoutingPolicyGeoToTerraform, true)(struct!.geo),
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
    if (this._geo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geo = this._geo?.internalValue;
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
      this._geo.internalValue = undefined;
      this._wrr.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._geo.internalValue = value.geo;
      this._wrr.internalValue = value.wrr;
    }
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
