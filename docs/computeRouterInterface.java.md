# `google_compute_router_interface`

Refer to the Terraform Registory for docs: [`google_compute_router_interface`](https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface).

# `computeRouterInterface` Submodule <a name="`computeRouterInterface` Submodule" id="@cdktf/provider-google.computeRouterInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRouterInterface <a name="ComputeRouterInterface" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface google_compute_router_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_interface.ComputeRouterInterface;

ComputeRouterInterface.Builder.create(Construct scope, java.lang.String id)
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
    .router(java.lang.String)
//  .id(java.lang.String)
//  .interconnectAttachment(java.lang.String)
//  .ipRange(java.lang.String)
//  .privateIpAddress(java.lang.String)
//  .project(java.lang.String)
//  .redundantInterface(java.lang.String)
//  .region(java.lang.String)
//  .subnetwork(java.lang.String)
//  .timeouts(ComputeRouterInterfaceTimeouts)
//  .vpnTunnel(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A unique name for the interface, required by GCE. Changing this forces a new interface to be created. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.router">router</a></code> | <code>java.lang.String</code> | The name of the router this interface will be attached to. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#id ComputeRouterInterface#id}. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.interconnectAttachment">interconnectAttachment</a></code> | <code>java.lang.String</code> | The name or resource link to the VLAN interconnect for this interface. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.ipRange">ipRange</a></code> | <code>java.lang.String</code> | The IP address and range of the interface. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | The regional private internal IP address that is used to establish BGP sessions to a VM instance acting as a third-party Router Appliance. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which this interface's router belongs. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.redundantInterface">redundantInterface</a></code> | <code>java.lang.String</code> | The name of the interface that is redundant to this interface. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region this interface's router sits in. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The URI of the subnetwork resource that this interface belongs to, which must be in the same region as the Cloud Router. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts">ComputeRouterInterfaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.vpnTunnel">vpnTunnel</a></code> | <code>java.lang.String</code> | The name or resource link to the VPN tunnel this interface will be linked to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A unique name for the interface, required by GCE. Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#name ComputeRouterInterface#name}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.router"></a>

- *Type:* java.lang.String

The name of the router this interface will be attached to.

Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#router ComputeRouterInterface#router}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#id ComputeRouterInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnectAttachment`<sup>Optional</sup> <a name="interconnectAttachment" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.interconnectAttachment"></a>

- *Type:* java.lang.String

The name or resource link to the VLAN interconnect for this interface.

Changing this forces a new interface to be created. Only one of interconnect_attachment, subnetwork or vpn_tunnel can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#interconnect_attachment ComputeRouterInterface#interconnect_attachment}

---

##### `ipRange`<sup>Optional</sup> <a name="ipRange" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.ipRange"></a>

- *Type:* java.lang.String

The IP address and range of the interface.

The IP range must be in the RFC3927 link-local IP space. Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#ip_range ComputeRouterInterface#ip_range}

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.privateIpAddress"></a>

- *Type:* java.lang.String

The regional private internal IP address that is used to establish BGP sessions to a VM instance acting as a third-party Router Appliance.

Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#private_ip_address ComputeRouterInterface#private_ip_address}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which this interface's router belongs.

If it is not provided, the provider project is used. Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#project ComputeRouterInterface#project}

---

##### `redundantInterface`<sup>Optional</sup> <a name="redundantInterface" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.redundantInterface"></a>

- *Type:* java.lang.String

The name of the interface that is redundant to this interface.

Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#redundant_interface ComputeRouterInterface#redundant_interface}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region this interface's router sits in.

If not specified, the project region will be used. Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#region ComputeRouterInterface#region}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.subnetwork"></a>

- *Type:* java.lang.String

The URI of the subnetwork resource that this interface belongs to, which must be in the same region as the Cloud Router.

Changing this forces a new interface to be created. Only one of subnetwork, interconnect_attachment or vpn_tunnel can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#subnetwork ComputeRouterInterface#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts">ComputeRouterInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#timeouts ComputeRouterInterface#timeouts}

---

##### `vpnTunnel`<sup>Optional</sup> <a name="vpnTunnel" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.vpnTunnel"></a>

- *Type:* java.lang.String

The name or resource link to the VPN tunnel this interface will be linked to.

Changing this forces a new interface to be created. Only one of vpn_tunnel, interconnect_attachment or subnetwork can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#vpn_tunnel ComputeRouterInterface#vpn_tunnel}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetInterconnectAttachment">resetInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetIpRange">resetIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetPrivateIpAddress">resetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetRedundantInterface">resetRedundantInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetVpnTunnel">resetVpnTunnel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.putTimeouts"></a>

```java
public void putTimeouts(ComputeRouterInterfaceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts">ComputeRouterInterfaceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetId"></a>

```java
public void resetId()
```

##### `resetInterconnectAttachment` <a name="resetInterconnectAttachment" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetInterconnectAttachment"></a>

```java
public void resetInterconnectAttachment()
```

##### `resetIpRange` <a name="resetIpRange" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetIpRange"></a>

```java
public void resetIpRange()
```

##### `resetPrivateIpAddress` <a name="resetPrivateIpAddress" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetPrivateIpAddress"></a>

```java
public void resetPrivateIpAddress()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetProject"></a>

```java
public void resetProject()
```

##### `resetRedundantInterface` <a name="resetRedundantInterface" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetRedundantInterface"></a>

```java
public void resetRedundantInterface()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetSubnetwork"></a>

```java
public void resetSubnetwork()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpnTunnel` <a name="resetVpnTunnel" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetVpnTunnel"></a>

```java
public void resetVpnTunnel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_interface.ComputeRouterInterface;

ComputeRouterInterface.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_interface.ComputeRouterInterface;

ComputeRouterInterface.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_interface.ComputeRouterInterface;

ComputeRouterInterface.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference">ComputeRouterInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.interconnectAttachmentInput">interconnectAttachmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.ipRangeInput">ipRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.redundantInterfaceInput">redundantInterfaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.routerInput">routerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts">ComputeRouterInterfaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.vpnTunnelInput">vpnTunnelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.interconnectAttachment">interconnectAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.ipRange">ipRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.redundantInterface">redundantInterface</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.router">router</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.vpnTunnel">vpnTunnel</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.timeouts"></a>

```java
public ComputeRouterInterfaceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference">ComputeRouterInterfaceTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `interconnectAttachmentInput`<sup>Optional</sup> <a name="interconnectAttachmentInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.interconnectAttachmentInput"></a>

```java
public java.lang.String getInterconnectAttachmentInput();
```

- *Type:* java.lang.String

---

##### `ipRangeInput`<sup>Optional</sup> <a name="ipRangeInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.ipRangeInput"></a>

```java
public java.lang.String getIpRangeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.privateIpAddressInput"></a>

```java
public java.lang.String getPrivateIpAddressInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `redundantInterfaceInput`<sup>Optional</sup> <a name="redundantInterfaceInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.redundantInterfaceInput"></a>

```java
public java.lang.String getRedundantInterfaceInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.routerInput"></a>

```java
public java.lang.String getRouterInput();
```

- *Type:* java.lang.String

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts">ComputeRouterInterfaceTimeouts</a>

---

##### `vpnTunnelInput`<sup>Optional</sup> <a name="vpnTunnelInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.vpnTunnelInput"></a>

```java
public java.lang.String getVpnTunnelInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `interconnectAttachment`<sup>Required</sup> <a name="interconnectAttachment" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.interconnectAttachment"></a>

```java
public java.lang.String getInterconnectAttachment();
```

- *Type:* java.lang.String

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.ipRange"></a>

```java
public java.lang.String getIpRange();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `redundantInterface`<sup>Required</sup> <a name="redundantInterface" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.redundantInterface"></a>

```java
public java.lang.String getRedundantInterface();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.router"></a>

```java
public java.lang.String getRouter();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `vpnTunnel`<sup>Required</sup> <a name="vpnTunnel" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.vpnTunnel"></a>

```java
public java.lang.String getVpnTunnel();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRouterInterfaceConfig <a name="ComputeRouterInterfaceConfig" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_interface.ComputeRouterInterfaceConfig;

ComputeRouterInterfaceConfig.builder()
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
    .router(java.lang.String)
//  .id(java.lang.String)
//  .interconnectAttachment(java.lang.String)
//  .ipRange(java.lang.String)
//  .privateIpAddress(java.lang.String)
//  .project(java.lang.String)
//  .redundantInterface(java.lang.String)
//  .region(java.lang.String)
//  .subnetwork(java.lang.String)
//  .timeouts(ComputeRouterInterfaceTimeouts)
//  .vpnTunnel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | A unique name for the interface, required by GCE. Changing this forces a new interface to be created. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.router">router</a></code> | <code>java.lang.String</code> | The name of the router this interface will be attached to. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#id ComputeRouterInterface#id}. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.interconnectAttachment">interconnectAttachment</a></code> | <code>java.lang.String</code> | The name or resource link to the VLAN interconnect for this interface. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.ipRange">ipRange</a></code> | <code>java.lang.String</code> | The IP address and range of the interface. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | The regional private internal IP address that is used to establish BGP sessions to a VM instance acting as a third-party Router Appliance. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which this interface's router belongs. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.redundantInterface">redundantInterface</a></code> | <code>java.lang.String</code> | The name of the interface that is redundant to this interface. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region this interface's router sits in. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The URI of the subnetwork resource that this interface belongs to, which must be in the same region as the Cloud Router. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts">ComputeRouterInterfaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.vpnTunnel">vpnTunnel</a></code> | <code>java.lang.String</code> | The name or resource link to the VPN tunnel this interface will be linked to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A unique name for the interface, required by GCE. Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#name ComputeRouterInterface#name}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.router"></a>

```java
public java.lang.String getRouter();
```

- *Type:* java.lang.String

The name of the router this interface will be attached to.

Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#router ComputeRouterInterface#router}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#id ComputeRouterInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnectAttachment`<sup>Optional</sup> <a name="interconnectAttachment" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.interconnectAttachment"></a>

```java
public java.lang.String getInterconnectAttachment();
```

- *Type:* java.lang.String

The name or resource link to the VLAN interconnect for this interface.

Changing this forces a new interface to be created. Only one of interconnect_attachment, subnetwork or vpn_tunnel can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#interconnect_attachment ComputeRouterInterface#interconnect_attachment}

---

##### `ipRange`<sup>Optional</sup> <a name="ipRange" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.ipRange"></a>

```java
public java.lang.String getIpRange();
```

- *Type:* java.lang.String

The IP address and range of the interface.

The IP range must be in the RFC3927 link-local IP space. Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#ip_range ComputeRouterInterface#ip_range}

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

The regional private internal IP address that is used to establish BGP sessions to a VM instance acting as a third-party Router Appliance.

Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#private_ip_address ComputeRouterInterface#private_ip_address}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which this interface's router belongs.

If it is not provided, the provider project is used. Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#project ComputeRouterInterface#project}

---

##### `redundantInterface`<sup>Optional</sup> <a name="redundantInterface" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.redundantInterface"></a>

```java
public java.lang.String getRedundantInterface();
```

- *Type:* java.lang.String

The name of the interface that is redundant to this interface.

Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#redundant_interface ComputeRouterInterface#redundant_interface}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region this interface's router sits in.

If not specified, the project region will be used. Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#region ComputeRouterInterface#region}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

The URI of the subnetwork resource that this interface belongs to, which must be in the same region as the Cloud Router.

Changing this forces a new interface to be created. Only one of subnetwork, interconnect_attachment or vpn_tunnel can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#subnetwork ComputeRouterInterface#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.timeouts"></a>

```java
public ComputeRouterInterfaceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts">ComputeRouterInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#timeouts ComputeRouterInterface#timeouts}

---

##### `vpnTunnel`<sup>Optional</sup> <a name="vpnTunnel" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.vpnTunnel"></a>

```java
public java.lang.String getVpnTunnel();
```

- *Type:* java.lang.String

The name or resource link to the VPN tunnel this interface will be linked to.

Changing this forces a new interface to be created. Only one of vpn_tunnel, interconnect_attachment or subnetwork can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#vpn_tunnel ComputeRouterInterface#vpn_tunnel}

---

### ComputeRouterInterfaceTimeouts <a name="ComputeRouterInterfaceTimeouts" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_interface.ComputeRouterInterfaceTimeouts;

ComputeRouterInterfaceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#create ComputeRouterInterface#create}. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#delete ComputeRouterInterface#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#create ComputeRouterInterface#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_router_interface#delete ComputeRouterInterface#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRouterInterfaceTimeoutsOutputReference <a name="ComputeRouterInterfaceTimeoutsOutputReference" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_router_interface.ComputeRouterInterfaceTimeoutsOutputReference;

new ComputeRouterInterfaceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts">ComputeRouterInterfaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts">ComputeRouterInterfaceTimeouts</a>

---



