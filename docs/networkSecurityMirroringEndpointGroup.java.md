# `networkSecurityMirroringEndpointGroup` Submodule <a name="`networkSecurityMirroringEndpointGroup` Submodule" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityMirroringEndpointGroup <a name="NetworkSecurityMirroringEndpointGroup" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group google_network_security_mirroring_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_mirroring_endpoint_group.NetworkSecurityMirroringEndpointGroup;

NetworkSecurityMirroringEndpointGroup.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .mirroringDeploymentGroup(java.lang.String)
    .mirroringEndpointGroupId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(NetworkSecurityMirroringEndpointGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The cloud location of the endpoint group, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.mirroringDeploymentGroup">mirroringDeploymentGroup</a></code> | <code>java.lang.String</code> | The deployment group that this DIRECT endpoint group is connected to, for example: 'projects/123456789/locations/global/mirroringDeploymentGroups/my-dg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.mirroringEndpointGroupId">mirroringEndpointGroupId</a></code> | <code>java.lang.String</code> | The ID to use for the endpoint group, which will become the final component of the endpoint group's resource name. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | User-provided description of the endpoint group. Used as additional context for the endpoint group. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#id NetworkSecurityMirroringEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#project NetworkSecurityMirroringEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts">NetworkSecurityMirroringEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The cloud location of the endpoint group, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#location NetworkSecurityMirroringEndpointGroup#location}

---

##### `mirroringDeploymentGroup`<sup>Required</sup> <a name="mirroringDeploymentGroup" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.mirroringDeploymentGroup"></a>

- *Type:* java.lang.String

The deployment group that this DIRECT endpoint group is connected to, for example: 'projects/123456789/locations/global/mirroringDeploymentGroups/my-dg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#mirroring_deployment_group NetworkSecurityMirroringEndpointGroup#mirroring_deployment_group}

---

##### `mirroringEndpointGroupId`<sup>Required</sup> <a name="mirroringEndpointGroupId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.mirroringEndpointGroupId"></a>

- *Type:* java.lang.String

The ID to use for the endpoint group, which will become the final component of the endpoint group's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#mirroring_endpoint_group_id NetworkSecurityMirroringEndpointGroup#mirroring_endpoint_group_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

User-provided description of the endpoint group. Used as additional context for the endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#description NetworkSecurityMirroringEndpointGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#id NetworkSecurityMirroringEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#labels NetworkSecurityMirroringEndpointGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#project NetworkSecurityMirroringEndpointGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts">NetworkSecurityMirroringEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#timeouts NetworkSecurityMirroringEndpointGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.putTimeouts"></a>

```java
public void putTimeouts(NetworkSecurityMirroringEndpointGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts">NetworkSecurityMirroringEndpointGroupTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityMirroringEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_mirroring_endpoint_group.NetworkSecurityMirroringEndpointGroup;

NetworkSecurityMirroringEndpointGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_mirroring_endpoint_group.NetworkSecurityMirroringEndpointGroup;

NetworkSecurityMirroringEndpointGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_mirroring_endpoint_group.NetworkSecurityMirroringEndpointGroup;

NetworkSecurityMirroringEndpointGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_mirroring_endpoint_group.NetworkSecurityMirroringEndpointGroup;

NetworkSecurityMirroringEndpointGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkSecurityMirroringEndpointGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkSecurityMirroringEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkSecurityMirroringEndpointGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkSecurityMirroringEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityMirroringEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.associations">associations</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList">NetworkSecurityMirroringEndpointGroupAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.connectedDeploymentGroups">connectedDeploymentGroups</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList">NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference">NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.mirroringDeploymentGroupInput">mirroringDeploymentGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.mirroringEndpointGroupIdInput">mirroringEndpointGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts">NetworkSecurityMirroringEndpointGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.mirroringDeploymentGroup">mirroringDeploymentGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.mirroringEndpointGroupId">mirroringEndpointGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `associations`<sup>Required</sup> <a name="associations" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.associations"></a>

```java
public NetworkSecurityMirroringEndpointGroupAssociationsList getAssociations();
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList">NetworkSecurityMirroringEndpointGroupAssociationsList</a>

---

##### `connectedDeploymentGroups`<sup>Required</sup> <a name="connectedDeploymentGroups" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.connectedDeploymentGroups"></a>

```java
public NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList getConnectedDeploymentGroups();
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList">NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.timeouts"></a>

```java
public NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference">NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mirroringDeploymentGroupInput`<sup>Optional</sup> <a name="mirroringDeploymentGroupInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.mirroringDeploymentGroupInput"></a>

```java
public java.lang.String getMirroringDeploymentGroupInput();
```

- *Type:* java.lang.String

---

##### `mirroringEndpointGroupIdInput`<sup>Optional</sup> <a name="mirroringEndpointGroupIdInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.mirroringEndpointGroupIdInput"></a>

```java
public java.lang.String getMirroringEndpointGroupIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts">NetworkSecurityMirroringEndpointGroupTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `mirroringDeploymentGroup`<sup>Required</sup> <a name="mirroringDeploymentGroup" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.mirroringDeploymentGroup"></a>

```java
public java.lang.String getMirroringDeploymentGroup();
```

- *Type:* java.lang.String

---

##### `mirroringEndpointGroupId`<sup>Required</sup> <a name="mirroringEndpointGroupId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.mirroringEndpointGroupId"></a>

```java
public java.lang.String getMirroringEndpointGroupId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityMirroringEndpointGroupAssociations <a name="NetworkSecurityMirroringEndpointGroupAssociations" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_mirroring_endpoint_group.NetworkSecurityMirroringEndpointGroupAssociations;

NetworkSecurityMirroringEndpointGroupAssociations.builder()
    .build();
```


### NetworkSecurityMirroringEndpointGroupConfig <a name="NetworkSecurityMirroringEndpointGroupConfig" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_mirroring_endpoint_group.NetworkSecurityMirroringEndpointGroupConfig;

NetworkSecurityMirroringEndpointGroupConfig.builder()
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
    .location(java.lang.String)
    .mirroringDeploymentGroup(java.lang.String)
    .mirroringEndpointGroupId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(NetworkSecurityMirroringEndpointGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.location">location</a></code> | <code>java.lang.String</code> | The cloud location of the endpoint group, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.mirroringDeploymentGroup">mirroringDeploymentGroup</a></code> | <code>java.lang.String</code> | The deployment group that this DIRECT endpoint group is connected to, for example: 'projects/123456789/locations/global/mirroringDeploymentGroups/my-dg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.mirroringEndpointGroupId">mirroringEndpointGroupId</a></code> | <code>java.lang.String</code> | The ID to use for the endpoint group, which will become the final component of the endpoint group's resource name. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | User-provided description of the endpoint group. Used as additional context for the endpoint group. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#id NetworkSecurityMirroringEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#project NetworkSecurityMirroringEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts">NetworkSecurityMirroringEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The cloud location of the endpoint group, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#location NetworkSecurityMirroringEndpointGroup#location}

---

##### `mirroringDeploymentGroup`<sup>Required</sup> <a name="mirroringDeploymentGroup" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.mirroringDeploymentGroup"></a>

```java
public java.lang.String getMirroringDeploymentGroup();
```

- *Type:* java.lang.String

The deployment group that this DIRECT endpoint group is connected to, for example: 'projects/123456789/locations/global/mirroringDeploymentGroups/my-dg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#mirroring_deployment_group NetworkSecurityMirroringEndpointGroup#mirroring_deployment_group}

---

##### `mirroringEndpointGroupId`<sup>Required</sup> <a name="mirroringEndpointGroupId" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.mirroringEndpointGroupId"></a>

```java
public java.lang.String getMirroringEndpointGroupId();
```

- *Type:* java.lang.String

The ID to use for the endpoint group, which will become the final component of the endpoint group's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#mirroring_endpoint_group_id NetworkSecurityMirroringEndpointGroup#mirroring_endpoint_group_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

User-provided description of the endpoint group. Used as additional context for the endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#description NetworkSecurityMirroringEndpointGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#id NetworkSecurityMirroringEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#labels NetworkSecurityMirroringEndpointGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#project NetworkSecurityMirroringEndpointGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConfig.property.timeouts"></a>

```java
public NetworkSecurityMirroringEndpointGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts">NetworkSecurityMirroringEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#timeouts NetworkSecurityMirroringEndpointGroup#timeouts}

---

### NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups <a name="NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_mirroring_endpoint_group.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups;

NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups.builder()
    .build();
```


### NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations <a name="NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_mirroring_endpoint_group.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations;

NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations.builder()
    .build();
```


### NetworkSecurityMirroringEndpointGroupTimeouts <a name="NetworkSecurityMirroringEndpointGroupTimeouts" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_mirroring_endpoint_group.NetworkSecurityMirroringEndpointGroupTimeouts;

NetworkSecurityMirroringEndpointGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#create NetworkSecurityMirroringEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#delete NetworkSecurityMirroringEndpointGroup#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#update NetworkSecurityMirroringEndpointGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#create NetworkSecurityMirroringEndpointGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#delete NetworkSecurityMirroringEndpointGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_security_mirroring_endpoint_group#update NetworkSecurityMirroringEndpointGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityMirroringEndpointGroupAssociationsList <a name="NetworkSecurityMirroringEndpointGroupAssociationsList" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_mirroring_endpoint_group.NetworkSecurityMirroringEndpointGroupAssociationsList;

new NetworkSecurityMirroringEndpointGroupAssociationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.get"></a>

```java
public NetworkSecurityMirroringEndpointGroupAssociationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetworkSecurityMirroringEndpointGroupAssociationsOutputReference <a name="NetworkSecurityMirroringEndpointGroupAssociationsOutputReference" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_mirroring_endpoint_group.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference;

new NetworkSecurityMirroringEndpointGroupAssociationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociations">NetworkSecurityMirroringEndpointGroupAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.internalValue"></a>

```java
public NetworkSecurityMirroringEndpointGroupAssociations getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupAssociations">NetworkSecurityMirroringEndpointGroupAssociations</a>

---


### NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList <a name="NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_mirroring_endpoint_group.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList;

new NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.get"></a>

```java
public NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList <a name="NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_mirroring_endpoint_group.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList;

new NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.get"></a>

```java
public NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference <a name="NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_mirroring_endpoint_group.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference;

new NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations">NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.internalValue"></a>

```java
public NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations">NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations</a>

---


### NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference <a name="NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_mirroring_endpoint_group.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference;

new NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.locations">locations</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList">NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups">NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.locations"></a>

```java
public NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList getLocations();
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList">NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.internalValue"></a>

```java
public NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups">NetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups</a>

---


### NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference <a name="NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_security_mirroring_endpoint_group.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference;

new NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts">NetworkSecurityMirroringEndpointGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkSecurityMirroringEndpointGroup.NetworkSecurityMirroringEndpointGroupTimeouts">NetworkSecurityMirroringEndpointGroupTimeouts</a>

---



