# `computeInstanceGroup` Submodule <a name="`computeInstanceGroup` Submodule" id="@cdktf/provider-google.computeInstanceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInstanceGroup <a name="ComputeInstanceGroup" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group google_compute_instance_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_instance_group.ComputeInstanceGroup;

ComputeInstanceGroup.Builder.create(Construct scope, java.lang.String id)
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
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .instances(java.util.List<java.lang.String>)
//  .namedPort(IResolvable)
//  .namedPort(java.util.List<ComputeInstanceGroupNamedPort>)
//  .network(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputeInstanceGroupTimeouts)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the instance group. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional textual description of the instance group. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#id ComputeInstanceGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | The list of instances in the group, in self_link format. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.namedPort">namedPort</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPort">ComputeInstanceGroupNamedPort</a>></code> | named_port block. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The URL of the network the instance group is in. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeouts">ComputeInstanceGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | The zone that this instance group should be created in. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the instance group.

Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#name ComputeInstanceGroup#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional textual description of the instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#description ComputeInstanceGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#id ComputeInstanceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.instances"></a>

- *Type:* java.util.List<java.lang.String>

The list of instances in the group, in self_link format.

When adding instances they must all be in the same network and zone as the instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#instances ComputeInstanceGroup#instances}

---

##### `namedPort`<sup>Optional</sup> <a name="namedPort" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.namedPort"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPort">ComputeInstanceGroupNamedPort</a>>

named_port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#named_port ComputeInstanceGroup#named_port}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The URL of the network the instance group is in.

If this is different from the network where the instances are in, the creation fails. Defaults to the network where the instances are in (if neither network nor instances is specified, this field will be blank).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#network ComputeInstanceGroup#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#project ComputeInstanceGroup#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeouts">ComputeInstanceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#timeouts ComputeInstanceGroup#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

The zone that this instance group should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#zone ComputeInstanceGroup#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.putNamedPort">putNamedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.resetInstances">resetInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.resetNamedPort">resetNamedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNamedPort` <a name="putNamedPort" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.putNamedPort"></a>

```java
public void putNamedPort(IResolvable OR java.util.List<ComputeInstanceGroupNamedPort> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.putNamedPort.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPort">ComputeInstanceGroupNamedPort</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.putTimeouts"></a>

```java
public void putTimeouts(ComputeInstanceGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeouts">ComputeInstanceGroupTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.resetId"></a>

```java
public void resetId()
```

##### `resetInstances` <a name="resetInstances" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.resetInstances"></a>

```java
public void resetInstances()
```

##### `resetNamedPort` <a name="resetNamedPort" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.resetNamedPort"></a>

```java
public void resetNamedPort()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeInstanceGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_instance_group.ComputeInstanceGroup;

ComputeInstanceGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_instance_group.ComputeInstanceGroup;

ComputeInstanceGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_instance_group.ComputeInstanceGroup;

ComputeInstanceGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_instance_group.ComputeInstanceGroup;

ComputeInstanceGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeInstanceGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeInstanceGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeInstanceGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeInstanceGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeInstanceGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.namedPort">namedPort</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList">ComputeInstanceGroupNamedPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference">ComputeInstanceGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.instancesInput">instancesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.namedPortInput">namedPortInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPort">ComputeInstanceGroupNamedPort</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeouts">ComputeInstanceGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `namedPort`<sup>Required</sup> <a name="namedPort" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.namedPort"></a>

```java
public ComputeInstanceGroupNamedPortList getNamedPort();
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList">ComputeInstanceGroupNamedPortList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.timeouts"></a>

```java
public ComputeInstanceGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference">ComputeInstanceGroupTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.instancesInput"></a>

```java
public java.util.List<java.lang.String> getInstancesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namedPortInput`<sup>Optional</sup> <a name="namedPortInput" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.namedPortInput"></a>

```java
public java.lang.Object getNamedPortInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPort">ComputeInstanceGroupNamedPort</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeouts">ComputeInstanceGroupTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.instances"></a>

```java
public java.util.List<java.lang.String> getInstances();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInstanceGroupConfig <a name="ComputeInstanceGroupConfig" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_instance_group.ComputeInstanceGroupConfig;

ComputeInstanceGroupConfig.builder()
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
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .instances(java.util.List<java.lang.String>)
//  .namedPort(IResolvable)
//  .namedPort(java.util.List<ComputeInstanceGroupNamedPort>)
//  .network(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputeInstanceGroupTimeouts)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the instance group. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional textual description of the instance group. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#id ComputeInstanceGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | The list of instances in the group, in self_link format. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.namedPort">namedPort</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPort">ComputeInstanceGroupNamedPort</a>></code> | named_port block. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.network">network</a></code> | <code>java.lang.String</code> | The URL of the network the instance group is in. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeouts">ComputeInstanceGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | The zone that this instance group should be created in. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the instance group.

Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#name ComputeInstanceGroup#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional textual description of the instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#description ComputeInstanceGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#id ComputeInstanceGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.instances"></a>

```java
public java.util.List<java.lang.String> getInstances();
```

- *Type:* java.util.List<java.lang.String>

The list of instances in the group, in self_link format.

When adding instances they must all be in the same network and zone as the instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#instances ComputeInstanceGroup#instances}

---

##### `namedPort`<sup>Optional</sup> <a name="namedPort" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.namedPort"></a>

```java
public java.lang.Object getNamedPort();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPort">ComputeInstanceGroupNamedPort</a>>

named_port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#named_port ComputeInstanceGroup#named_port}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The URL of the network the instance group is in.

If this is different from the network where the instances are in, the creation fails. Defaults to the network where the instances are in (if neither network nor instances is specified, this field will be blank).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#network ComputeInstanceGroup#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#project ComputeInstanceGroup#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.timeouts"></a>

```java
public ComputeInstanceGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeouts">ComputeInstanceGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#timeouts ComputeInstanceGroup#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

The zone that this instance group should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#zone ComputeInstanceGroup#zone}

---

### ComputeInstanceGroupNamedPort <a name="ComputeInstanceGroupNamedPort" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPort.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_instance_group.ComputeInstanceGroupNamedPort;

ComputeInstanceGroupNamedPort.builder()
    .name(java.lang.String)
    .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPort.property.name">name</a></code> | <code>java.lang.String</code> | The name which the port will be mapped to. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPort.property.port">port</a></code> | <code>java.lang.Number</code> | The port number to map the name to. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPort.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name which the port will be mapped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#name ComputeInstanceGroup#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPort.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port number to map the name to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#port ComputeInstanceGroup#port}

---

### ComputeInstanceGroupTimeouts <a name="ComputeInstanceGroupTimeouts" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_instance_group.ComputeInstanceGroupTimeouts;

ComputeInstanceGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#create ComputeInstanceGroup#create}. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#delete ComputeInstanceGroup#delete}. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#update ComputeInstanceGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#create ComputeInstanceGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#delete ComputeInstanceGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/compute_instance_group#update ComputeInstanceGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInstanceGroupNamedPortList <a name="ComputeInstanceGroupNamedPortList" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_instance_group.ComputeInstanceGroupNamedPortList;

new ComputeInstanceGroupNamedPortList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.get"></a>

```java
public ComputeInstanceGroupNamedPortOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPort">ComputeInstanceGroupNamedPort</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPort">ComputeInstanceGroupNamedPort</a>>

---


### ComputeInstanceGroupNamedPortOutputReference <a name="ComputeInstanceGroupNamedPortOutputReference" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_instance_group.ComputeInstanceGroupNamedPortOutputReference;

new ComputeInstanceGroupNamedPortOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPort">ComputeInstanceGroupNamedPort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPortOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupNamedPort">ComputeInstanceGroupNamedPort</a>

---


### ComputeInstanceGroupTimeoutsOutputReference <a name="ComputeInstanceGroupTimeoutsOutputReference" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_instance_group.ComputeInstanceGroupTimeoutsOutputReference;

new ComputeInstanceGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeouts">ComputeInstanceGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeInstanceGroup.ComputeInstanceGroupTimeouts">ComputeInstanceGroupTimeouts</a>

---



