# `vmwareengineNetworkPolicy` Submodule <a name="`vmwareengineNetworkPolicy` Submodule" id="@cdktf/provider-google.vmwareengineNetworkPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareengineNetworkPolicy <a name="VmwareengineNetworkPolicy" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy google_vmwareengine_network_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vmwareengine_network_policy.VmwareengineNetworkPolicy;

VmwareengineNetworkPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .edgeServicesCidr(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .vmwareEngineNetwork(java.lang.String)
//  .description(java.lang.String)
//  .externalIp(VmwareengineNetworkPolicyExternalIp)
//  .id(java.lang.String)
//  .internetAccess(VmwareengineNetworkPolicyInternetAccess)
//  .project(java.lang.String)
//  .timeouts(VmwareengineNetworkPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.edgeServicesCidr">edgeServicesCidr</a></code> | <code>java.lang.String</code> | IP address range in CIDR notation used to create internet access and external IP access. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The resource name of the location (region) to create the new network policy in. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The ID of the Network Policy. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.vmwareEngineNetwork">vmwareEngineNetwork</a></code> | <code>java.lang.String</code> | The relative resource name of the VMware Engine network. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | User-provided description for this network policy. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.externalIp">externalIp</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a></code> | external_ip block. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#id VmwareengineNetworkPolicy#id}. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.internetAccess">internetAccess</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a></code> | internet_access block. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#project VmwareengineNetworkPolicy#project}. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts">VmwareengineNetworkPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `edgeServicesCidr`<sup>Required</sup> <a name="edgeServicesCidr" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.edgeServicesCidr"></a>

- *Type:* java.lang.String

IP address range in CIDR notation used to create internet access and external IP access.

An RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any
prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#edge_services_cidr VmwareengineNetworkPolicy#edge_services_cidr}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The resource name of the location (region) to create the new network policy in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-central1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#location VmwareengineNetworkPolicy#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The ID of the Network Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#name VmwareengineNetworkPolicy#name}

---

##### `vmwareEngineNetwork`<sup>Required</sup> <a name="vmwareEngineNetwork" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.vmwareEngineNetwork"></a>

- *Type:* java.lang.String

The relative resource name of the VMware Engine network.

Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#vmware_engine_network VmwareengineNetworkPolicy#vmware_engine_network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

User-provided description for this network policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#description VmwareengineNetworkPolicy#description}

---

##### `externalIp`<sup>Optional</sup> <a name="externalIp" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.externalIp"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a>

external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#external_ip VmwareengineNetworkPolicy#external_ip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#id VmwareengineNetworkPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internetAccess`<sup>Optional</sup> <a name="internetAccess" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.internetAccess"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a>

internet_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#internet_access VmwareengineNetworkPolicy#internet_access}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#project VmwareengineNetworkPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts">VmwareengineNetworkPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#timeouts VmwareengineNetworkPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putExternalIp">putExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putInternetAccess">putInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetExternalIp">resetExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetInternetAccess">resetInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExternalIp` <a name="putExternalIp" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putExternalIp"></a>

```java
public void putExternalIp(VmwareengineNetworkPolicyExternalIp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putExternalIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a>

---

##### `putInternetAccess` <a name="putInternetAccess" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putInternetAccess"></a>

```java
public void putInternetAccess(VmwareengineNetworkPolicyInternetAccess value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putInternetAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putTimeouts"></a>

```java
public void putTimeouts(VmwareengineNetworkPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts">VmwareengineNetworkPolicyTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExternalIp` <a name="resetExternalIp" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetExternalIp"></a>

```java
public void resetExternalIp()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetInternetAccess` <a name="resetInternetAccess" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetInternetAccess"></a>

```java
public void resetInternetAccess()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VmwareengineNetworkPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.vmwareengine_network_policy.VmwareengineNetworkPolicy;

VmwareengineNetworkPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.vmwareengine_network_policy.VmwareengineNetworkPolicy;

VmwareengineNetworkPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.vmwareengine_network_policy.VmwareengineNetworkPolicy;

VmwareengineNetworkPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.vmwareengine_network_policy.VmwareengineNetworkPolicy;

VmwareengineNetworkPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VmwareengineNetworkPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VmwareengineNetworkPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VmwareengineNetworkPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VmwareengineNetworkPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VmwareengineNetworkPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.externalIp">externalIp</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference">VmwareengineNetworkPolicyExternalIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.internetAccess">internetAccess</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference">VmwareengineNetworkPolicyInternetAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference">VmwareengineNetworkPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.vmwareEngineNetworkCanonical">vmwareEngineNetworkCanonical</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.edgeServicesCidrInput">edgeServicesCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.externalIpInput">externalIpInput</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.internetAccessInput">internetAccessInput</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts">VmwareengineNetworkPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.vmwareEngineNetworkInput">vmwareEngineNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.edgeServicesCidr">edgeServicesCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.vmwareEngineNetwork">vmwareEngineNetwork</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `externalIp`<sup>Required</sup> <a name="externalIp" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.externalIp"></a>

```java
public VmwareengineNetworkPolicyExternalIpOutputReference getExternalIp();
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference">VmwareengineNetworkPolicyExternalIpOutputReference</a>

---

##### `internetAccess`<sup>Required</sup> <a name="internetAccess" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.internetAccess"></a>

```java
public VmwareengineNetworkPolicyInternetAccessOutputReference getInternetAccess();
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference">VmwareengineNetworkPolicyInternetAccessOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.timeouts"></a>

```java
public VmwareengineNetworkPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference">VmwareengineNetworkPolicyTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `vmwareEngineNetworkCanonical`<sup>Required</sup> <a name="vmwareEngineNetworkCanonical" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.vmwareEngineNetworkCanonical"></a>

```java
public java.lang.String getVmwareEngineNetworkCanonical();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `edgeServicesCidrInput`<sup>Optional</sup> <a name="edgeServicesCidrInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.edgeServicesCidrInput"></a>

```java
public java.lang.String getEdgeServicesCidrInput();
```

- *Type:* java.lang.String

---

##### `externalIpInput`<sup>Optional</sup> <a name="externalIpInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.externalIpInput"></a>

```java
public VmwareengineNetworkPolicyExternalIp getExternalIpInput();
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `internetAccessInput`<sup>Optional</sup> <a name="internetAccessInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.internetAccessInput"></a>

```java
public VmwareengineNetworkPolicyInternetAccess getInternetAccessInput();
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts">VmwareengineNetworkPolicyTimeouts</a>

---

##### `vmwareEngineNetworkInput`<sup>Optional</sup> <a name="vmwareEngineNetworkInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.vmwareEngineNetworkInput"></a>

```java
public java.lang.String getVmwareEngineNetworkInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `edgeServicesCidr`<sup>Required</sup> <a name="edgeServicesCidr" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.edgeServicesCidr"></a>

```java
public java.lang.String getEdgeServicesCidr();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `vmwareEngineNetwork`<sup>Required</sup> <a name="vmwareEngineNetwork" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.vmwareEngineNetwork"></a>

```java
public java.lang.String getVmwareEngineNetwork();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareengineNetworkPolicyConfig <a name="VmwareengineNetworkPolicyConfig" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vmwareengine_network_policy.VmwareengineNetworkPolicyConfig;

VmwareengineNetworkPolicyConfig.builder()
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
    .edgeServicesCidr(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .vmwareEngineNetwork(java.lang.String)
//  .description(java.lang.String)
//  .externalIp(VmwareengineNetworkPolicyExternalIp)
//  .id(java.lang.String)
//  .internetAccess(VmwareengineNetworkPolicyInternetAccess)
//  .project(java.lang.String)
//  .timeouts(VmwareengineNetworkPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.edgeServicesCidr">edgeServicesCidr</a></code> | <code>java.lang.String</code> | IP address range in CIDR notation used to create internet access and external IP access. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.location">location</a></code> | <code>java.lang.String</code> | The resource name of the location (region) to create the new network policy in. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The ID of the Network Policy. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.vmwareEngineNetwork">vmwareEngineNetwork</a></code> | <code>java.lang.String</code> | The relative resource name of the VMware Engine network. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | User-provided description for this network policy. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.externalIp">externalIp</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a></code> | external_ip block. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#id VmwareengineNetworkPolicy#id}. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.internetAccess">internetAccess</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a></code> | internet_access block. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#project VmwareengineNetworkPolicy#project}. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts">VmwareengineNetworkPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `edgeServicesCidr`<sup>Required</sup> <a name="edgeServicesCidr" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.edgeServicesCidr"></a>

```java
public java.lang.String getEdgeServicesCidr();
```

- *Type:* java.lang.String

IP address range in CIDR notation used to create internet access and external IP access.

An RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any
prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#edge_services_cidr VmwareengineNetworkPolicy#edge_services_cidr}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The resource name of the location (region) to create the new network policy in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-central1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#location VmwareengineNetworkPolicy#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The ID of the Network Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#name VmwareengineNetworkPolicy#name}

---

##### `vmwareEngineNetwork`<sup>Required</sup> <a name="vmwareEngineNetwork" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.vmwareEngineNetwork"></a>

```java
public java.lang.String getVmwareEngineNetwork();
```

- *Type:* java.lang.String

The relative resource name of the VMware Engine network.

Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#vmware_engine_network VmwareengineNetworkPolicy#vmware_engine_network}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

User-provided description for this network policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#description VmwareengineNetworkPolicy#description}

---

##### `externalIp`<sup>Optional</sup> <a name="externalIp" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.externalIp"></a>

```java
public VmwareengineNetworkPolicyExternalIp getExternalIp();
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a>

external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#external_ip VmwareengineNetworkPolicy#external_ip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#id VmwareengineNetworkPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internetAccess`<sup>Optional</sup> <a name="internetAccess" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.internetAccess"></a>

```java
public VmwareengineNetworkPolicyInternetAccess getInternetAccess();
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a>

internet_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#internet_access VmwareengineNetworkPolicy#internet_access}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#project VmwareengineNetworkPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyConfig.property.timeouts"></a>

```java
public VmwareengineNetworkPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts">VmwareengineNetworkPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#timeouts VmwareengineNetworkPolicy#timeouts}

---

### VmwareengineNetworkPolicyExternalIp <a name="VmwareengineNetworkPolicyExternalIp" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vmwareengine_network_policy.VmwareengineNetworkPolicyExternalIp;

VmwareengineNetworkPolicyExternalIp.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if the service is enabled; false otherwise. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if the service is enabled; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#enabled VmwareengineNetworkPolicy#enabled}

---

### VmwareengineNetworkPolicyInternetAccess <a name="VmwareengineNetworkPolicyInternetAccess" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vmwareengine_network_policy.VmwareengineNetworkPolicyInternetAccess;

VmwareengineNetworkPolicyInternetAccess.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | True if the service is enabled; false otherwise. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

True if the service is enabled; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#enabled VmwareengineNetworkPolicy#enabled}

---

### VmwareengineNetworkPolicyTimeouts <a name="VmwareengineNetworkPolicyTimeouts" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vmwareengine_network_policy.VmwareengineNetworkPolicyTimeouts;

VmwareengineNetworkPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#create VmwareengineNetworkPolicy#create}. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#delete VmwareengineNetworkPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#update VmwareengineNetworkPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#create VmwareengineNetworkPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#delete VmwareengineNetworkPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/vmwareengine_network_policy#update VmwareengineNetworkPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwareengineNetworkPolicyExternalIpOutputReference <a name="VmwareengineNetworkPolicyExternalIpOutputReference" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vmwareengine_network_policy.VmwareengineNetworkPolicyExternalIpOutputReference;

new VmwareengineNetworkPolicyExternalIpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIpOutputReference.property.internalValue"></a>

```java
public VmwareengineNetworkPolicyExternalIp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyExternalIp">VmwareengineNetworkPolicyExternalIp</a>

---


### VmwareengineNetworkPolicyInternetAccessOutputReference <a name="VmwareengineNetworkPolicyInternetAccessOutputReference" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vmwareengine_network_policy.VmwareengineNetworkPolicyInternetAccessOutputReference;

new VmwareengineNetworkPolicyInternetAccessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccessOutputReference.property.internalValue"></a>

```java
public VmwareengineNetworkPolicyInternetAccess getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyInternetAccess">VmwareengineNetworkPolicyInternetAccess</a>

---


### VmwareengineNetworkPolicyTimeoutsOutputReference <a name="VmwareengineNetworkPolicyTimeoutsOutputReference" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.vmwareengine_network_policy.VmwareengineNetworkPolicyTimeoutsOutputReference;

new VmwareengineNetworkPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts">VmwareengineNetworkPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.vmwareengineNetworkPolicy.VmwareengineNetworkPolicyTimeouts">VmwareengineNetworkPolicyTimeouts</a>

---



