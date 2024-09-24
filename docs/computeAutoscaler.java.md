# `computeAutoscaler` Submodule <a name="`computeAutoscaler` Submodule" id="@cdktf/provider-google.computeAutoscaler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeAutoscaler <a name="ComputeAutoscaler" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler google_compute_autoscaler}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscaler;

ComputeAutoscaler.Builder.create(Construct scope, java.lang.String id)
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
    .autoscalingPolicy(ComputeAutoscalerAutoscalingPolicy)
    .name(java.lang.String)
    .target(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputeAutoscalerTimeouts)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.autoscalingPolicy">autoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a></code> | autoscaling_policy block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.target">target</a></code> | <code>java.lang.String</code> | URL of the managed instance group that this autoscaler will scale. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#id ComputeAutoscaler#id}. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#project ComputeAutoscaler#project}. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts">ComputeAutoscalerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | URL of the zone where the instance group resides. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscalingPolicy`<sup>Required</sup> <a name="autoscalingPolicy" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.autoscalingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a>

autoscaling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#autoscaling_policy ComputeAutoscaler#autoscaling_policy}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#name ComputeAutoscaler#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.target"></a>

- *Type:* java.lang.String

URL of the managed instance group that this autoscaler will scale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#target ComputeAutoscaler#target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#description ComputeAutoscaler#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#id ComputeAutoscaler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#project ComputeAutoscaler#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts">ComputeAutoscalerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#timeouts ComputeAutoscaler#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

URL of the zone where the instance group resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#zone ComputeAutoscaler#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.putAutoscalingPolicy">putAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscalingPolicy` <a name="putAutoscalingPolicy" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.putAutoscalingPolicy"></a>

```java
public void putAutoscalingPolicy(ComputeAutoscalerAutoscalingPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.putAutoscalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.putTimeouts"></a>

```java
public void putTimeouts(ComputeAutoscalerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts">ComputeAutoscalerTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeAutoscaler resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscaler;

ComputeAutoscaler.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscaler;

ComputeAutoscaler.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscaler;

ComputeAutoscaler.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscaler;

ComputeAutoscaler.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeAutoscaler.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeAutoscaler resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeAutoscaler to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeAutoscaler that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeAutoscaler to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.autoscalingPolicy">autoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference">ComputeAutoscalerAutoscalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference">ComputeAutoscalerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.autoscalingPolicyInput">autoscalingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts">ComputeAutoscalerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscalingPolicy`<sup>Required</sup> <a name="autoscalingPolicy" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.autoscalingPolicy"></a>

```java
public ComputeAutoscalerAutoscalingPolicyOutputReference getAutoscalingPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference">ComputeAutoscalerAutoscalingPolicyOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.timeouts"></a>

```java
public ComputeAutoscalerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference">ComputeAutoscalerTimeoutsOutputReference</a>

---

##### `autoscalingPolicyInput`<sup>Optional</sup> <a name="autoscalingPolicyInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.autoscalingPolicyInput"></a>

```java
public ComputeAutoscalerAutoscalingPolicy getAutoscalingPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts">ComputeAutoscalerTimeouts</a>

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeAutoscalerAutoscalingPolicy <a name="ComputeAutoscalerAutoscalingPolicy" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscalerAutoscalingPolicy;

ComputeAutoscalerAutoscalingPolicy.builder()
    .maxReplicas(java.lang.Number)
    .minReplicas(java.lang.Number)
//  .cooldownPeriod(java.lang.Number)
//  .cpuUtilization(ComputeAutoscalerAutoscalingPolicyCpuUtilization)
//  .loadBalancingUtilization(ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization)
//  .metric(IResolvable)
//  .metric(java.util.List<ComputeAutoscalerAutoscalingPolicyMetric>)
//  .mode(java.lang.String)
//  .scaleInControl(ComputeAutoscalerAutoscalingPolicyScaleInControl)
//  .scalingSchedules(IResolvable)
//  .scalingSchedules(java.util.List<ComputeAutoscalerAutoscalingPolicyScalingSchedules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.maxReplicas">maxReplicas</a></code> | <code>java.lang.Number</code> | The maximum number of instances that the autoscaler can scale up to. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.minReplicas">minReplicas</a></code> | <code>java.lang.Number</code> | The minimum number of replicas that the autoscaler can scale down to. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.cooldownPeriod">cooldownPeriod</a></code> | <code>java.lang.Number</code> | The number of seconds that the autoscaler should wait before it starts collecting information from a new instance. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.cpuUtilization">cpuUtilization</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization">ComputeAutoscalerAutoscalingPolicyCpuUtilization</a></code> | cpu_utilization block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.loadBalancingUtilization">loadBalancingUtilization</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | load_balancing_utilization block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.metric">metric</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric">ComputeAutoscalerAutoscalingPolicyMetric</a>></code> | metric block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.mode">mode</a></code> | <code>java.lang.String</code> | Defines operating mode for this policy. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.scaleInControl">scaleInControl</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl">ComputeAutoscalerAutoscalingPolicyScaleInControl</a></code> | scale_in_control block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.scalingSchedules">scalingSchedules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules">ComputeAutoscalerAutoscalingPolicyScalingSchedules</a>></code> | scaling_schedules block. |

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.maxReplicas"></a>

```java
public java.lang.Number getMaxReplicas();
```

- *Type:* java.lang.Number

The maximum number of instances that the autoscaler can scale up to.

This is required when creating or updating an autoscaler. The
maximum number of replicas should not be lower than minimal number
of replicas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#max_replicas ComputeAutoscaler#max_replicas}

---

##### `minReplicas`<sup>Required</sup> <a name="minReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.minReplicas"></a>

```java
public java.lang.Number getMinReplicas();
```

- *Type:* java.lang.Number

The minimum number of replicas that the autoscaler can scale down to.

This cannot be less than 0. If not provided, autoscaler will
choose a default value depending on maximum number of instances
allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#min_replicas ComputeAutoscaler#min_replicas}

---

##### `cooldownPeriod`<sup>Optional</sup> <a name="cooldownPeriod" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.cooldownPeriod"></a>

```java
public java.lang.Number getCooldownPeriod();
```

- *Type:* java.lang.Number

The number of seconds that the autoscaler should wait before it starts collecting information from a new instance.

This prevents
the autoscaler from collecting information when the instance is
initializing, during which the collected usage would not be
reliable. The default time autoscaler waits is 60 seconds.

Virtual machine initialization times might vary because of
numerous factors. We recommend that you test how long an
instance may take to initialize. To do this, create an instance
and time the startup process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#cooldown_period ComputeAutoscaler#cooldown_period}

---

##### `cpuUtilization`<sup>Optional</sup> <a name="cpuUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.cpuUtilization"></a>

```java
public ComputeAutoscalerAutoscalingPolicyCpuUtilization getCpuUtilization();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization">ComputeAutoscalerAutoscalingPolicyCpuUtilization</a>

cpu_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#cpu_utilization ComputeAutoscaler#cpu_utilization}

---

##### `loadBalancingUtilization`<sup>Optional</sup> <a name="loadBalancingUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.loadBalancingUtilization"></a>

```java
public ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization getLoadBalancingUtilization();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

load_balancing_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#load_balancing_utilization ComputeAutoscaler#load_balancing_utilization}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.metric"></a>

```java
public java.lang.Object getMetric();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric">ComputeAutoscalerAutoscalingPolicyMetric</a>>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#metric ComputeAutoscaler#metric}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Defines operating mode for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#mode ComputeAutoscaler#mode}

---

##### `scaleInControl`<sup>Optional</sup> <a name="scaleInControl" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.scaleInControl"></a>

```java
public ComputeAutoscalerAutoscalingPolicyScaleInControl getScaleInControl();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl">ComputeAutoscalerAutoscalingPolicyScaleInControl</a>

scale_in_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#scale_in_control ComputeAutoscaler#scale_in_control}

---

##### `scalingSchedules`<sup>Optional</sup> <a name="scalingSchedules" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.scalingSchedules"></a>

```java
public java.lang.Object getScalingSchedules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules">ComputeAutoscalerAutoscalingPolicyScalingSchedules</a>>

scaling_schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#scaling_schedules ComputeAutoscaler#scaling_schedules}

---

### ComputeAutoscalerAutoscalingPolicyCpuUtilization <a name="ComputeAutoscalerAutoscalingPolicyCpuUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization;

ComputeAutoscalerAutoscalingPolicyCpuUtilization.builder()
    .target(java.lang.Number)
//  .predictiveMethod(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization.property.target">target</a></code> | <code>java.lang.Number</code> | The target CPU utilization that the autoscaler should maintain. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization.property.predictiveMethod">predictiveMethod</a></code> | <code>java.lang.String</code> | Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

The target CPU utilization that the autoscaler should maintain.

Must be a float value in the range (0, 1]. If not specified, the
default is 0.6.

If the CPU level is below the target utilization, the autoscaler
scales down the number of instances until it reaches the minimum
number of instances you specified or until the average CPU of
your instances reaches the target utilization.

If the average CPU is above the target utilization, the autoscaler
scales up until it reaches the maximum number of instances you
specified or until the average utilization reaches the target
utilization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#target ComputeAutoscaler#target}

---

##### `predictiveMethod`<sup>Optional</sup> <a name="predictiveMethod" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization.property.predictiveMethod"></a>

```java
public java.lang.String getPredictiveMethod();
```

- *Type:* java.lang.String

Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:.

* NONE (default). No predictive method is used. The autoscaler scales the group to meet current demand based on real-time metrics.
* OPTIMIZE_AVAILABILITY. Predictive autoscaling improves availability by monitoring daily and weekly load patterns and scaling out ahead of anticipated demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#predictive_method ComputeAutoscaler#predictive_method}

---

### ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization <a name="ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization;

ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization.builder()
    .target(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization.property.target">target</a></code> | <code>java.lang.Number</code> | Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain.

Must
be a positive float value. If not defined, the default is 0.8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#target ComputeAutoscaler#target}

---

### ComputeAutoscalerAutoscalingPolicyMetric <a name="ComputeAutoscalerAutoscalingPolicyMetric" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscalerAutoscalingPolicyMetric;

ComputeAutoscalerAutoscalingPolicyMetric.builder()
    .name(java.lang.String)
//  .target(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.property.name">name</a></code> | <code>java.lang.String</code> | The identifier (type) of the Stackdriver Monitoring metric. The metric cannot have negative values. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.property.target">target</a></code> | <code>java.lang.Number</code> | The target value of the metric that autoscaler should maintain. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.property.type">type</a></code> | <code>java.lang.String</code> | Defines how target utilization value is expressed for a Stackdriver Monitoring metric. Possible values: ["GAUGE", "DELTA_PER_SECOND", "DELTA_PER_MINUTE"]. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The identifier (type) of the Stackdriver Monitoring metric. The metric cannot have negative values.

The metric must have a value type of INT64 or DOUBLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#name ComputeAutoscaler#name}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

The target value of the metric that autoscaler should maintain.

This must be a positive value. A utilization
metric scales number of virtual machines handling requests
to increase or decrease proportionally to the metric.

For example, a good metric to use as a utilizationTarget is
www.googleapis.com/compute/instance/network/received_bytes_count.
The autoscaler will work to keep this value constant for each
of the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#target ComputeAutoscaler#target}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Defines how target utilization value is expressed for a Stackdriver Monitoring metric. Possible values: ["GAUGE", "DELTA_PER_SECOND", "DELTA_PER_MINUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#type ComputeAutoscaler#type}

---

### ComputeAutoscalerAutoscalingPolicyScaleInControl <a name="ComputeAutoscalerAutoscalingPolicyScaleInControl" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl;

ComputeAutoscalerAutoscalingPolicyScaleInControl.builder()
//  .maxScaledInReplicas(ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas)
//  .timeWindowSec(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl.property.maxScaledInReplicas">maxScaledInReplicas</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | max_scaled_in_replicas block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl.property.timeWindowSec">timeWindowSec</a></code> | <code>java.lang.Number</code> | How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above. |

---

##### `maxScaledInReplicas`<sup>Optional</sup> <a name="maxScaledInReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl.property.maxScaledInReplicas"></a>

```java
public ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas getMaxScaledInReplicas();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

max_scaled_in_replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#max_scaled_in_replicas ComputeAutoscaler#max_scaled_in_replicas}

---

##### `timeWindowSec`<sup>Optional</sup> <a name="timeWindowSec" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl.property.timeWindowSec"></a>

```java
public java.lang.Number getTimeWindowSec();
```

- *Type:* java.lang.Number

How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#time_window_sec ComputeAutoscaler#time_window_sec}

---

### ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas <a name="ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas;

ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.builder()
//  .fixed(java.lang.Number)
//  .percent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.fixed">fixed</a></code> | <code>java.lang.Number</code> | Specifies a fixed number of VM instances. This must be a positive integer. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.percent">percent</a></code> | <code>java.lang.Number</code> | Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. |

---

##### `fixed`<sup>Optional</sup> <a name="fixed" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.fixed"></a>

```java
public java.lang.Number getFixed();
```

- *Type:* java.lang.Number

Specifies a fixed number of VM instances. This must be a positive integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#fixed ComputeAutoscaler#fixed}

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#percent ComputeAutoscaler#percent}

---

### ComputeAutoscalerAutoscalingPolicyScalingSchedules <a name="ComputeAutoscalerAutoscalingPolicyScalingSchedules" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules;

ComputeAutoscalerAutoscalingPolicyScalingSchedules.builder()
    .durationSec(java.lang.Number)
    .minRequiredReplicas(java.lang.Number)
    .name(java.lang.String)
    .schedule(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.durationSec">durationSec</a></code> | <code>java.lang.Number</code> | The duration of time intervals (in seconds) for which this scaling schedule will be running. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.minRequiredReplicas">minRequiredReplicas</a></code> | <code>java.lang.Number</code> | Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#name ComputeAutoscaler#name}. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.schedule">schedule</a></code> | <code>java.lang.String</code> | The start timestamps of time intervals when this scaling schedule should provide a scaling signal. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.description">description</a></code> | <code>java.lang.String</code> | A description of a scaling schedule. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | A boolean value that specifies if a scaling schedule can influence autoscaler recommendations. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | The time zone to be used when interpreting the schedule. |

---

##### `durationSec`<sup>Required</sup> <a name="durationSec" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.durationSec"></a>

```java
public java.lang.Number getDurationSec();
```

- *Type:* java.lang.Number

The duration of time intervals (in seconds) for which this scaling schedule will be running.

The minimum allowed value is 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#duration_sec ComputeAutoscaler#duration_sec}

---

##### `minRequiredReplicas`<sup>Required</sup> <a name="minRequiredReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.minRequiredReplicas"></a>

```java
public java.lang.Number getMinRequiredReplicas();
```

- *Type:* java.lang.Number

Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#min_required_replicas ComputeAutoscaler#min_required_replicas}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#name ComputeAutoscaler#name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

The start timestamps of time intervals when this scaling schedule should provide a scaling signal.

This field uses the extended cron format (with an optional year field).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#schedule ComputeAutoscaler#schedule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of a scaling schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#description ComputeAutoscaler#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

A boolean value that specifies if a scaling schedule can influence autoscaler recommendations.

If set to true, then a scaling schedule has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#disabled ComputeAutoscaler#disabled}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

The time zone to be used when interpreting the schedule.

The value of this field must be a time zone name from the tz database: http://en.wikipedia.org/wiki/Tz_database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#time_zone ComputeAutoscaler#time_zone}

---

### ComputeAutoscalerConfig <a name="ComputeAutoscalerConfig" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscalerConfig;

ComputeAutoscalerConfig.builder()
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
    .autoscalingPolicy(ComputeAutoscalerAutoscalingPolicy)
    .name(java.lang.String)
    .target(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputeAutoscalerTimeouts)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.autoscalingPolicy">autoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a></code> | autoscaling_policy block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.target">target</a></code> | <code>java.lang.String</code> | URL of the managed instance group that this autoscaler will scale. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#id ComputeAutoscaler#id}. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#project ComputeAutoscaler#project}. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts">ComputeAutoscalerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | URL of the zone where the instance group resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscalingPolicy`<sup>Required</sup> <a name="autoscalingPolicy" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.autoscalingPolicy"></a>

```java
public ComputeAutoscalerAutoscalingPolicy getAutoscalingPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a>

autoscaling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#autoscaling_policy ComputeAutoscaler#autoscaling_policy}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#name ComputeAutoscaler#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

URL of the managed instance group that this autoscaler will scale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#target ComputeAutoscaler#target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#description ComputeAutoscaler#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#id ComputeAutoscaler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#project ComputeAutoscaler#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.timeouts"></a>

```java
public ComputeAutoscalerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts">ComputeAutoscalerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#timeouts ComputeAutoscaler#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

URL of the zone where the instance group resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#zone ComputeAutoscaler#zone}

---

### ComputeAutoscalerTimeouts <a name="ComputeAutoscalerTimeouts" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscalerTimeouts;

ComputeAutoscalerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#create ComputeAutoscaler#create}. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#delete ComputeAutoscaler#delete}. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#update ComputeAutoscaler#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#create ComputeAutoscaler#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#delete ComputeAutoscaler#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/compute_autoscaler#update ComputeAutoscaler#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference <a name="ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference;

new ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resetPredictiveMethod">resetPredictiveMethod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPredictiveMethod` <a name="resetPredictiveMethod" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resetPredictiveMethod"></a>

```java
public void resetPredictiveMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethodInput">predictiveMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethod">predictiveMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.target">target</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization">ComputeAutoscalerAutoscalingPolicyCpuUtilization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `predictiveMethodInput`<sup>Optional</sup> <a name="predictiveMethodInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethodInput"></a>

```java
public java.lang.String getPredictiveMethodInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.targetInput"></a>

```java
public java.lang.Number getTargetInput();
```

- *Type:* java.lang.Number

---

##### `predictiveMethod`<sup>Required</sup> <a name="predictiveMethod" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethod"></a>

```java
public java.lang.String getPredictiveMethod();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.internalValue"></a>

```java
public ComputeAutoscalerAutoscalingPolicyCpuUtilization getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization">ComputeAutoscalerAutoscalingPolicyCpuUtilization</a>

---


### ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference <a name="ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference;

new ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.target">target</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.targetInput"></a>

```java
public java.lang.Number getTargetInput();
```

- *Type:* java.lang.Number

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.internalValue"></a>

```java
public ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---


### ComputeAutoscalerAutoscalingPolicyMetricList <a name="ComputeAutoscalerAutoscalingPolicyMetricList" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscalerAutoscalingPolicyMetricList;

new ComputeAutoscalerAutoscalingPolicyMetricList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.get"></a>

```java
public ComputeAutoscalerAutoscalingPolicyMetricOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric">ComputeAutoscalerAutoscalingPolicyMetric</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric">ComputeAutoscalerAutoscalingPolicyMetric</a>>

---


### ComputeAutoscalerAutoscalingPolicyMetricOutputReference <a name="ComputeAutoscalerAutoscalingPolicyMetricOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference;

new ComputeAutoscalerAutoscalingPolicyMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetTarget"></a>

```java
public void resetTarget()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.target">target</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric">ComputeAutoscalerAutoscalingPolicyMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.targetInput"></a>

```java
public java.lang.Number getTargetInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric">ComputeAutoscalerAutoscalingPolicyMetric</a>

---


### ComputeAutoscalerAutoscalingPolicyOutputReference <a name="ComputeAutoscalerAutoscalingPolicyOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference;

new ComputeAutoscalerAutoscalingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization">putCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization">putLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putScaleInControl">putScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules">putScalingSchedules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetCooldownPeriod">resetCooldownPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetCpuUtilization">resetCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetLoadBalancingUtilization">resetLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetScaleInControl">resetScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetScalingSchedules">resetScalingSchedules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCpuUtilization` <a name="putCpuUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization"></a>

```java
public void putCpuUtilization(ComputeAutoscalerAutoscalingPolicyCpuUtilization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization">ComputeAutoscalerAutoscalingPolicyCpuUtilization</a>

---

##### `putLoadBalancingUtilization` <a name="putLoadBalancingUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization"></a>

```java
public void putLoadBalancingUtilization(ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---

##### `putMetric` <a name="putMetric" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putMetric"></a>

```java
public void putMetric(IResolvable OR java.util.List<ComputeAutoscalerAutoscalingPolicyMetric> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putMetric.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric">ComputeAutoscalerAutoscalingPolicyMetric</a>>

---

##### `putScaleInControl` <a name="putScaleInControl" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putScaleInControl"></a>

```java
public void putScaleInControl(ComputeAutoscalerAutoscalingPolicyScaleInControl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putScaleInControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl">ComputeAutoscalerAutoscalingPolicyScaleInControl</a>

---

##### `putScalingSchedules` <a name="putScalingSchedules" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules"></a>

```java
public void putScalingSchedules(IResolvable OR java.util.List<ComputeAutoscalerAutoscalingPolicyScalingSchedules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules">ComputeAutoscalerAutoscalingPolicyScalingSchedules</a>>

---

##### `resetCooldownPeriod` <a name="resetCooldownPeriod" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetCooldownPeriod"></a>

```java
public void resetCooldownPeriod()
```

##### `resetCpuUtilization` <a name="resetCpuUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetCpuUtilization"></a>

```java
public void resetCpuUtilization()
```

##### `resetLoadBalancingUtilization` <a name="resetLoadBalancingUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetLoadBalancingUtilization"></a>

```java
public void resetLoadBalancingUtilization()
```

##### `resetMetric` <a name="resetMetric" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetMetric"></a>

```java
public void resetMetric()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetScaleInControl` <a name="resetScaleInControl" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetScaleInControl"></a>

```java
public void resetScaleInControl()
```

##### `resetScalingSchedules` <a name="resetScalingSchedules" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetScalingSchedules"></a>

```java
public void resetScalingSchedules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilization">cpuUtilization</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference">ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilization">loadBalancingUtilization</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList">ComputeAutoscalerAutoscalingPolicyMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleInControl">scaleInControl</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference">ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedules">scalingSchedules</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList">ComputeAutoscalerAutoscalingPolicyScalingSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriodInput">cooldownPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilizationInput">cpuUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization">ComputeAutoscalerAutoscalingPolicyCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilizationInput">loadBalancingUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.maxReplicasInput">maxReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.metricInput">metricInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric">ComputeAutoscalerAutoscalingPolicyMetric</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.minReplicasInput">minReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleInControlInput">scaleInControlInput</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl">ComputeAutoscalerAutoscalingPolicyScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedulesInput">scalingSchedulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules">ComputeAutoscalerAutoscalingPolicyScalingSchedules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriod">cooldownPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.maxReplicas">maxReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.minReplicas">minReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuUtilization`<sup>Required</sup> <a name="cpuUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilization"></a>

```java
public ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference getCpuUtilization();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference">ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference</a>

---

##### `loadBalancingUtilization`<sup>Required</sup> <a name="loadBalancingUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilization"></a>

```java
public ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference getLoadBalancingUtilization();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference</a>

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.metric"></a>

```java
public ComputeAutoscalerAutoscalingPolicyMetricList getMetric();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList">ComputeAutoscalerAutoscalingPolicyMetricList</a>

---

##### `scaleInControl`<sup>Required</sup> <a name="scaleInControl" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleInControl"></a>

```java
public ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference getScaleInControl();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference">ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference</a>

---

##### `scalingSchedules`<sup>Required</sup> <a name="scalingSchedules" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedules"></a>

```java
public ComputeAutoscalerAutoscalingPolicyScalingSchedulesList getScalingSchedules();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList">ComputeAutoscalerAutoscalingPolicyScalingSchedulesList</a>

---

##### `cooldownPeriodInput`<sup>Optional</sup> <a name="cooldownPeriodInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriodInput"></a>

```java
public java.lang.Number getCooldownPeriodInput();
```

- *Type:* java.lang.Number

---

##### `cpuUtilizationInput`<sup>Optional</sup> <a name="cpuUtilizationInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilizationInput"></a>

```java
public ComputeAutoscalerAutoscalingPolicyCpuUtilization getCpuUtilizationInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization">ComputeAutoscalerAutoscalingPolicyCpuUtilization</a>

---

##### `loadBalancingUtilizationInput`<sup>Optional</sup> <a name="loadBalancingUtilizationInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilizationInput"></a>

```java
public ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization getLoadBalancingUtilizationInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---

##### `maxReplicasInput`<sup>Optional</sup> <a name="maxReplicasInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.maxReplicasInput"></a>

```java
public java.lang.Number getMaxReplicasInput();
```

- *Type:* java.lang.Number

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.metricInput"></a>

```java
public java.lang.Object getMetricInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric">ComputeAutoscalerAutoscalingPolicyMetric</a>>

---

##### `minReplicasInput`<sup>Optional</sup> <a name="minReplicasInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.minReplicasInput"></a>

```java
public java.lang.Number getMinReplicasInput();
```

- *Type:* java.lang.Number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `scaleInControlInput`<sup>Optional</sup> <a name="scaleInControlInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleInControlInput"></a>

```java
public ComputeAutoscalerAutoscalingPolicyScaleInControl getScaleInControlInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl">ComputeAutoscalerAutoscalingPolicyScaleInControl</a>

---

##### `scalingSchedulesInput`<sup>Optional</sup> <a name="scalingSchedulesInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedulesInput"></a>

```java
public java.lang.Object getScalingSchedulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules">ComputeAutoscalerAutoscalingPolicyScalingSchedules</a>>

---

##### `cooldownPeriod`<sup>Required</sup> <a name="cooldownPeriod" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriod"></a>

```java
public java.lang.Number getCooldownPeriod();
```

- *Type:* java.lang.Number

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.maxReplicas"></a>

```java
public java.lang.Number getMaxReplicas();
```

- *Type:* java.lang.Number

---

##### `minReplicas`<sup>Required</sup> <a name="minReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.minReplicas"></a>

```java
public java.lang.Number getMinReplicas();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.internalValue"></a>

```java
public ComputeAutoscalerAutoscalingPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a>

---


### ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference <a name="ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference;

new ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetFixed">resetFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetPercent">resetPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFixed` <a name="resetFixed" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetFixed"></a>

```java
public void resetFixed()
```

##### `resetPercent` <a name="resetPercent" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetPercent"></a>

```java
public void resetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixedInput">fixedInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percentInput">percentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixed">fixed</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percent">percent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fixedInput`<sup>Optional</sup> <a name="fixedInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixedInput"></a>

```java
public java.lang.Number getFixedInput();
```

- *Type:* java.lang.Number

---

##### `percentInput`<sup>Optional</sup> <a name="percentInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percentInput"></a>

```java
public java.lang.Number getPercentInput();
```

- *Type:* java.lang.Number

---

##### `fixed`<sup>Required</sup> <a name="fixed" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixed"></a>

```java
public java.lang.Number getFixed();
```

- *Type:* java.lang.Number

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.internalValue"></a>

```java
public ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---


### ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference <a name="ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference;

new ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas">putMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetMaxScaledInReplicas">resetMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetTimeWindowSec">resetTimeWindowSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaxScaledInReplicas` <a name="putMaxScaledInReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas"></a>

```java
public void putMaxScaledInReplicas(ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---

##### `resetMaxScaledInReplicas` <a name="resetMaxScaledInReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetMaxScaledInReplicas"></a>

```java
public void resetMaxScaledInReplicas()
```

##### `resetTimeWindowSec` <a name="resetTimeWindowSec" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetTimeWindowSec"></a>

```java
public void resetTimeWindowSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicas">maxScaledInReplicas</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicasInput">maxScaledInReplicasInput</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSecInput">timeWindowSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSec">timeWindowSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl">ComputeAutoscalerAutoscalingPolicyScaleInControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxScaledInReplicas`<sup>Required</sup> <a name="maxScaledInReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicas"></a>

```java
public ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference getMaxScaledInReplicas();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference</a>

---

##### `maxScaledInReplicasInput`<sup>Optional</sup> <a name="maxScaledInReplicasInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicasInput"></a>

```java
public ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas getMaxScaledInReplicasInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---

##### `timeWindowSecInput`<sup>Optional</sup> <a name="timeWindowSecInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSecInput"></a>

```java
public java.lang.Number getTimeWindowSecInput();
```

- *Type:* java.lang.Number

---

##### `timeWindowSec`<sup>Required</sup> <a name="timeWindowSec" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSec"></a>

```java
public java.lang.Number getTimeWindowSec();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.internalValue"></a>

```java
public ComputeAutoscalerAutoscalingPolicyScaleInControl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl">ComputeAutoscalerAutoscalingPolicyScaleInControl</a>

---


### ComputeAutoscalerAutoscalingPolicyScalingSchedulesList <a name="ComputeAutoscalerAutoscalingPolicyScalingSchedulesList" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList;

new ComputeAutoscalerAutoscalingPolicyScalingSchedulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.get"></a>

```java
public ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules">ComputeAutoscalerAutoscalingPolicyScalingSchedules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules">ComputeAutoscalerAutoscalingPolicyScalingSchedules</a>>

---


### ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference <a name="ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference;

new ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSecInput">durationSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicasInput">minRequiredReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSec">durationSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicas">minRequiredReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules">ComputeAutoscalerAutoscalingPolicyScalingSchedules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `durationSecInput`<sup>Optional</sup> <a name="durationSecInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSecInput"></a>

```java
public java.lang.Number getDurationSecInput();
```

- *Type:* java.lang.Number

---

##### `minRequiredReplicasInput`<sup>Optional</sup> <a name="minRequiredReplicasInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicasInput"></a>

```java
public java.lang.Number getMinRequiredReplicasInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `durationSec`<sup>Required</sup> <a name="durationSec" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSec"></a>

```java
public java.lang.Number getDurationSec();
```

- *Type:* java.lang.Number

---

##### `minRequiredReplicas`<sup>Required</sup> <a name="minRequiredReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicas"></a>

```java
public java.lang.Number getMinRequiredReplicas();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules">ComputeAutoscalerAutoscalingPolicyScalingSchedules</a>

---


### ComputeAutoscalerTimeoutsOutputReference <a name="ComputeAutoscalerTimeoutsOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_autoscaler.ComputeAutoscalerTimeoutsOutputReference;

new ComputeAutoscalerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts">ComputeAutoscalerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts">ComputeAutoscalerTimeouts</a>

---



