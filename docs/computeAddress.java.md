# `computeAddress` Submodule <a name="`computeAddress` Submodule" id="@cdktf/provider-google.computeAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeAddress <a name="ComputeAddress" id="@cdktf/provider-google.computeAddress.ComputeAddress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address google_compute_address}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_address.ComputeAddress;

ComputeAddress.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .address(java.lang.String)
//  .addressType(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ipv6EndpointType(java.lang.String)
//  .ipVersion(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .network(java.lang.String)
//  .networkTier(java.lang.String)
//  .prefixLength(java.lang.Number)
//  .project(java.lang.String)
//  .purpose(java.lang.String)
//  .region(java.lang.String)
//  .subnetwork(java.lang.String)
//  .timeouts(ComputeAddressTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.address">address</a></code> | <code>java.lang.String</code> | The static external IP address represented by this resource. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.addressType">addressType</a></code> | <code>java.lang.String</code> | The type of address to reserve. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#id ComputeAddress#id}. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.ipv6EndpointType">ipv6EndpointType</a></code> | <code>java.lang.String</code> | The endpoint type of this address, which should be VM or NETLB. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | The IP Version that will be used by this address. The default value is 'IPV4'. Possible values: ["IPV4", "IPV6"]. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to this address.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The URL of the network in which to reserve the address. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.networkTier">networkTier</a></code> | <code>java.lang.String</code> | The networking tier used for configuring this address. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.prefixLength">prefixLength</a></code> | <code>java.lang.Number</code> | The prefix length if the resource represents an IP range. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#project ComputeAddress#project}. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.purpose">purpose</a></code> | <code>java.lang.String</code> | The purpose of this resource, which can be one of the following values. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The Region in which the created address should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The URL of the subnetwork in which to reserve the address. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts">ComputeAddressTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#name ComputeAddress#name}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.address"></a>

- *Type:* java.lang.String

The static external IP address represented by this resource.

The IP address must be inside the specified subnetwork,
if any. Set by the API if undefined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#address ComputeAddress#address}

---

##### `addressType`<sup>Optional</sup> <a name="addressType" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.addressType"></a>

- *Type:* java.lang.String

The type of address to reserve.

Note: if you set this argument's value as 'INTERNAL' you need to leave the 'network_tier' argument unset in that resource block. Default value: "EXTERNAL" Possible values: ["INTERNAL", "EXTERNAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#address_type ComputeAddress#address_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#description ComputeAddress#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#id ComputeAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6EndpointType`<sup>Optional</sup> <a name="ipv6EndpointType" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.ipv6EndpointType"></a>

- *Type:* java.lang.String

The endpoint type of this address, which should be VM or NETLB.

This is
used for deciding which type of endpoint this address can be used after
the external IPv6 address reservation. Possible values: ["VM", "NETLB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#ipv6_endpoint_type ComputeAddress#ipv6_endpoint_type}

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.ipVersion"></a>

- *Type:* java.lang.String

The IP Version that will be used by this address. The default value is 'IPV4'. Possible values: ["IPV4", "IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#ip_version ComputeAddress#ip_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to apply to this address.  A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#labels ComputeAddress#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The URL of the network in which to reserve the address.

This field
can only be used with INTERNAL type with the VPC_PEERING and
IPSEC_INTERCONNECT purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#network ComputeAddress#network}

---

##### `networkTier`<sup>Optional</sup> <a name="networkTier" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.networkTier"></a>

- *Type:* java.lang.String

The networking tier used for configuring this address.

If this field is not
specified, it is assumed to be PREMIUM.
This argument should not be used when configuring Internal addresses, because [network tier cannot be set for internal traffic; it's always Premium](https://cloud.google.com/network-tiers/docs/overview). Possible values: ["PREMIUM", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#network_tier ComputeAddress#network_tier}

---

##### `prefixLength`<sup>Optional</sup> <a name="prefixLength" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.prefixLength"></a>

- *Type:* java.lang.Number

The prefix length if the resource represents an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#prefix_length ComputeAddress#prefix_length}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#project ComputeAddress#project}.

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.purpose"></a>

- *Type:* java.lang.String

The purpose of this resource, which can be one of the following values.

* GCE_ENDPOINT for addresses that are used by VM instances, alias IP
  ranges, load balancers, and similar resources.
* SHARED_LOADBALANCER_VIP for an address that can be used by multiple
  internal load balancers.
* VPC_PEERING for addresses that are reserved for VPC peer networks.
* IPSEC_INTERCONNECT for addresses created from a private IP range that
  are reserved for a VLAN attachment in an HA VPN over Cloud Interconnect
  configuration. These addresses are regional resources.
* PRIVATE_SERVICE_CONNECT for a private network address that is used to
  configure Private Service Connect. Only global internal addresses can use
  this purpose.

This should only be set when using an Internal address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#purpose ComputeAddress#purpose}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The Region in which the created address should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#region ComputeAddress#region}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.subnetwork"></a>

- *Type:* java.lang.String

The URL of the subnetwork in which to reserve the address.

If an IP
address is specified, it must be within the subnetwork's IP range.
This field can only be used with INTERNAL type with
GCE_ENDPOINT/DNS_RESOLVER purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#subnetwork ComputeAddress#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeAddress.ComputeAddress.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts">ComputeAddressTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#timeouts ComputeAddress#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetAddressType">resetAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetIpv6EndpointType">resetIpv6EndpointType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetNetworkTier">resetNetworkTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetPrefixLength">resetPrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetPurpose">resetPurpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeAddress.ComputeAddress.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeAddress.ComputeAddress.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeAddress.ComputeAddress.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAddress.ComputeAddress.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeAddress.ComputeAddress.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeAddress.ComputeAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeAddress.ComputeAddress.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeAddress.ComputeAddress.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeAddress.ComputeAddress.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeAddress.ComputeAddress.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeAddress.ComputeAddress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeAddress.ComputeAddress.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeAddress.ComputeAddress.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeAddress.ComputeAddress.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeAddress.ComputeAddress.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeAddress.ComputeAddress.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeAddress.ComputeAddress.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeAddress.ComputeAddress.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeAddress.ComputeAddress.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeAddress.ComputeAddress.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeAddress.ComputeAddress.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeAddress.ComputeAddress.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeAddress.ComputeAddress.putTimeouts"></a>

```java
public void putTimeouts(ComputeAddressTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAddress.ComputeAddress.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts">ComputeAddressTimeouts</a>

---

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetAddressType` <a name="resetAddressType" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetAddressType"></a>

```java
public void resetAddressType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetId"></a>

```java
public void resetId()
```

##### `resetIpv6EndpointType` <a name="resetIpv6EndpointType" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetIpv6EndpointType"></a>

```java
public void resetIpv6EndpointType()
```

##### `resetIpVersion` <a name="resetIpVersion" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetIpVersion"></a>

```java
public void resetIpVersion()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetNetworkTier` <a name="resetNetworkTier" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetNetworkTier"></a>

```java
public void resetNetworkTier()
```

##### `resetPrefixLength` <a name="resetPrefixLength" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetPrefixLength"></a>

```java
public void resetPrefixLength()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetProject"></a>

```java
public void resetProject()
```

##### `resetPurpose` <a name="resetPurpose" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetPurpose"></a>

```java
public void resetPurpose()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetSubnetwork"></a>

```java
public void resetSubnetwork()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeAddress.ComputeAddress.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeAddress resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeAddress.ComputeAddress.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_address.ComputeAddress;

ComputeAddress.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeAddress.ComputeAddress.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeAddress.ComputeAddress.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_address.ComputeAddress;

ComputeAddress.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeAddress.ComputeAddress.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeAddress.ComputeAddress.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_address.ComputeAddress;

ComputeAddress.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeAddress.ComputeAddress.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeAddress.ComputeAddress.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_address.ComputeAddress;

ComputeAddress.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeAddress.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeAddress resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeAddress.ComputeAddress.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeAddress.ComputeAddress.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeAddress to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeAddress.ComputeAddress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeAddress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeAddress.ComputeAddress.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeAddress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.labelFingerprint">labelFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference">ComputeAddressTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.users">users</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.addressTypeInput">addressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.ipv6EndpointTypeInput">ipv6EndpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.ipVersionInput">ipVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.networkTierInput">networkTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.prefixLengthInput">prefixLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.purposeInput">purposeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts">ComputeAddressTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.addressType">addressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.ipv6EndpointType">ipv6EndpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.networkTier">networkTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.prefixLength">prefixLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.purpose">purpose</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.labelFingerprint"></a>

```java
public java.lang.String getLabelFingerprint();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.timeouts"></a>

```java
public ComputeAddressTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference">ComputeAddressTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.users"></a>

```java
public java.util.List<java.lang.String> getUsers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `addressTypeInput`<sup>Optional</sup> <a name="addressTypeInput" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.addressTypeInput"></a>

```java
public java.lang.String getAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipv6EndpointTypeInput`<sup>Optional</sup> <a name="ipv6EndpointTypeInput" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.ipv6EndpointTypeInput"></a>

```java
public java.lang.String getIpv6EndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.ipVersionInput"></a>

```java
public java.lang.String getIpVersionInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `networkTierInput`<sup>Optional</sup> <a name="networkTierInput" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.networkTierInput"></a>

```java
public java.lang.String getNetworkTierInput();
```

- *Type:* java.lang.String

---

##### `prefixLengthInput`<sup>Optional</sup> <a name="prefixLengthInput" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.prefixLengthInput"></a>

```java
public java.lang.Number getPrefixLengthInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `purposeInput`<sup>Optional</sup> <a name="purposeInput" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.purposeInput"></a>

```java
public java.lang.String getPurposeInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts">ComputeAddressTimeouts</a>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `addressType`<sup>Required</sup> <a name="addressType" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.addressType"></a>

```java
public java.lang.String getAddressType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipv6EndpointType`<sup>Required</sup> <a name="ipv6EndpointType" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.ipv6EndpointType"></a>

```java
public java.lang.String getIpv6EndpointType();
```

- *Type:* java.lang.String

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.ipVersion"></a>

```java
public java.lang.String getIpVersion();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `networkTier`<sup>Required</sup> <a name="networkTier" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.networkTier"></a>

```java
public java.lang.String getNetworkTier();
```

- *Type:* java.lang.String

---

##### `prefixLength`<sup>Required</sup> <a name="prefixLength" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.prefixLength"></a>

```java
public java.lang.Number getPrefixLength();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.purpose"></a>

```java
public java.lang.String getPurpose();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddress.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeAddress.ComputeAddress.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeAddressConfig <a name="ComputeAddressConfig" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_address.ComputeAddressConfig;

ComputeAddressConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .address(java.lang.String)
//  .addressType(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ipv6EndpointType(java.lang.String)
//  .ipVersion(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .network(java.lang.String)
//  .networkTier(java.lang.String)
//  .prefixLength(java.lang.Number)
//  .project(java.lang.String)
//  .purpose(java.lang.String)
//  .region(java.lang.String)
//  .subnetwork(java.lang.String)
//  .timeouts(ComputeAddressTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.address">address</a></code> | <code>java.lang.String</code> | The static external IP address represented by this resource. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.addressType">addressType</a></code> | <code>java.lang.String</code> | The type of address to reserve. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#id ComputeAddress#id}. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.ipv6EndpointType">ipv6EndpointType</a></code> | <code>java.lang.String</code> | The endpoint type of this address, which should be VM or NETLB. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | The IP Version that will be used by this address. The default value is 'IPV4'. Possible values: ["IPV4", "IPV6"]. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to this address.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.network">network</a></code> | <code>java.lang.String</code> | The URL of the network in which to reserve the address. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.networkTier">networkTier</a></code> | <code>java.lang.String</code> | The networking tier used for configuring this address. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.prefixLength">prefixLength</a></code> | <code>java.lang.Number</code> | The prefix length if the resource represents an IP range. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#project ComputeAddress#project}. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.purpose">purpose</a></code> | <code>java.lang.String</code> | The purpose of this resource, which can be one of the following values. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.region">region</a></code> | <code>java.lang.String</code> | The Region in which the created address should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The URL of the subnetwork in which to reserve the address. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts">ComputeAddressTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#name ComputeAddress#name}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The static external IP address represented by this resource.

The IP address must be inside the specified subnetwork,
if any. Set by the API if undefined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#address ComputeAddress#address}

---

##### `addressType`<sup>Optional</sup> <a name="addressType" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.addressType"></a>

```java
public java.lang.String getAddressType();
```

- *Type:* java.lang.String

The type of address to reserve.

Note: if you set this argument's value as 'INTERNAL' you need to leave the 'network_tier' argument unset in that resource block. Default value: "EXTERNAL" Possible values: ["INTERNAL", "EXTERNAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#address_type ComputeAddress#address_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#description ComputeAddress#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#id ComputeAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6EndpointType`<sup>Optional</sup> <a name="ipv6EndpointType" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.ipv6EndpointType"></a>

```java
public java.lang.String getIpv6EndpointType();
```

- *Type:* java.lang.String

The endpoint type of this address, which should be VM or NETLB.

This is
used for deciding which type of endpoint this address can be used after
the external IPv6 address reservation. Possible values: ["VM", "NETLB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#ipv6_endpoint_type ComputeAddress#ipv6_endpoint_type}

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.ipVersion"></a>

```java
public java.lang.String getIpVersion();
```

- *Type:* java.lang.String

The IP Version that will be used by this address. The default value is 'IPV4'. Possible values: ["IPV4", "IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#ip_version ComputeAddress#ip_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to apply to this address.  A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#labels ComputeAddress#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The URL of the network in which to reserve the address.

This field
can only be used with INTERNAL type with the VPC_PEERING and
IPSEC_INTERCONNECT purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#network ComputeAddress#network}

---

##### `networkTier`<sup>Optional</sup> <a name="networkTier" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.networkTier"></a>

```java
public java.lang.String getNetworkTier();
```

- *Type:* java.lang.String

The networking tier used for configuring this address.

If this field is not
specified, it is assumed to be PREMIUM.
This argument should not be used when configuring Internal addresses, because [network tier cannot be set for internal traffic; it's always Premium](https://cloud.google.com/network-tiers/docs/overview). Possible values: ["PREMIUM", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#network_tier ComputeAddress#network_tier}

---

##### `prefixLength`<sup>Optional</sup> <a name="prefixLength" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.prefixLength"></a>

```java
public java.lang.Number getPrefixLength();
```

- *Type:* java.lang.Number

The prefix length if the resource represents an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#prefix_length ComputeAddress#prefix_length}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#project ComputeAddress#project}.

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.purpose"></a>

```java
public java.lang.String getPurpose();
```

- *Type:* java.lang.String

The purpose of this resource, which can be one of the following values.

* GCE_ENDPOINT for addresses that are used by VM instances, alias IP
  ranges, load balancers, and similar resources.
* SHARED_LOADBALANCER_VIP for an address that can be used by multiple
  internal load balancers.
* VPC_PEERING for addresses that are reserved for VPC peer networks.
* IPSEC_INTERCONNECT for addresses created from a private IP range that
  are reserved for a VLAN attachment in an HA VPN over Cloud Interconnect
  configuration. These addresses are regional resources.
* PRIVATE_SERVICE_CONNECT for a private network address that is used to
  configure Private Service Connect. Only global internal addresses can use
  this purpose.

This should only be set when using an Internal address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#purpose ComputeAddress#purpose}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The Region in which the created address should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#region ComputeAddress#region}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

The URL of the subnetwork in which to reserve the address.

If an IP
address is specified, it must be within the subnetwork's IP range.
This field can only be used with INTERNAL type with
GCE_ENDPOINT/DNS_RESOLVER purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#subnetwork ComputeAddress#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeAddress.ComputeAddressConfig.property.timeouts"></a>

```java
public ComputeAddressTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts">ComputeAddressTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#timeouts ComputeAddress#timeouts}

---

### ComputeAddressTimeouts <a name="ComputeAddressTimeouts" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_address.ComputeAddressTimeouts;

ComputeAddressTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#create ComputeAddress#create}. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#delete ComputeAddress#delete}. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#update ComputeAddress#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#create ComputeAddress#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#delete ComputeAddress#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/resources/compute_address#update ComputeAddress#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeAddressTimeoutsOutputReference <a name="ComputeAddressTimeoutsOutputReference" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_address.ComputeAddressTimeoutsOutputReference;

new ComputeAddressTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts">ComputeAddressTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeAddress.ComputeAddressTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeAddress.ComputeAddressTimeouts">ComputeAddressTimeouts</a>

---



