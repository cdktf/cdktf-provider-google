# `google_compute_region_autoscaler`

Refer to the Terraform Registory for docs: [`google_compute_region_autoscaler`](https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler).

# `computeRegionAutoscaler` Submodule <a name="`computeRegionAutoscaler` Submodule" id="@cdktf/provider-google.computeRegionAutoscaler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionAutoscaler <a name="ComputeRegionAutoscaler" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler google_compute_region_autoscaler}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscaler;

ComputeRegionAutoscaler.Builder.create(Construct scope, java.lang.String id)
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
    .autoscalingPolicy(ComputeRegionAutoscalerAutoscalingPolicy)
    .name(java.lang.String)
    .target(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(ComputeRegionAutoscalerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.autoscalingPolicy">autoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a></code> | autoscaling_policy block. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.target">target</a></code> | <code>java.lang.String</code> | URL of the managed instance group that this autoscaler will scale. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#id ComputeRegionAutoscaler#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#project ComputeRegionAutoscaler#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | URL of the region where the instance group resides. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts">ComputeRegionAutoscalerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscalingPolicy`<sup>Required</sup> <a name="autoscalingPolicy" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.autoscalingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a>

autoscaling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#autoscaling_policy ComputeRegionAutoscaler#autoscaling_policy}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#name ComputeRegionAutoscaler#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.target"></a>

- *Type:* java.lang.String

URL of the managed instance group that this autoscaler will scale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#target ComputeRegionAutoscaler#target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#description ComputeRegionAutoscaler#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#id ComputeRegionAutoscaler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#project ComputeRegionAutoscaler#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.region"></a>

- *Type:* java.lang.String

URL of the region where the instance group resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#region ComputeRegionAutoscaler#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts">ComputeRegionAutoscalerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#timeouts ComputeRegionAutoscaler#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putAutoscalingPolicy">putAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAutoscalingPolicy` <a name="putAutoscalingPolicy" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putAutoscalingPolicy"></a>

```java
public void putAutoscalingPolicy(ComputeRegionAutoscalerAutoscalingPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putAutoscalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putTimeouts"></a>

```java
public void putTimeouts(ComputeRegionAutoscalerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts">ComputeRegionAutoscalerTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscaler;

ComputeRegionAutoscaler.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscaler;

ComputeRegionAutoscaler.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscaler;

ComputeRegionAutoscaler.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.autoscalingPolicy">autoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference">ComputeRegionAutoscalerAutoscalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference">ComputeRegionAutoscalerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.autoscalingPolicyInput">autoscalingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts">ComputeRegionAutoscalerTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscalingPolicy`<sup>Required</sup> <a name="autoscalingPolicy" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.autoscalingPolicy"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicyOutputReference getAutoscalingPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference">ComputeRegionAutoscalerAutoscalingPolicyOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.timeouts"></a>

```java
public ComputeRegionAutoscalerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference">ComputeRegionAutoscalerTimeoutsOutputReference</a>

---

##### `autoscalingPolicyInput`<sup>Optional</sup> <a name="autoscalingPolicyInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.autoscalingPolicyInput"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicy getAutoscalingPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts">ComputeRegionAutoscalerTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionAutoscalerAutoscalingPolicy <a name="ComputeRegionAutoscalerAutoscalingPolicy" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscalerAutoscalingPolicy;

ComputeRegionAutoscalerAutoscalingPolicy.builder()
    .maxReplicas(java.lang.Number)
    .minReplicas(java.lang.Number)
//  .cooldownPeriod(java.lang.Number)
//  .cpuUtilization(ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization)
//  .loadBalancingUtilization(ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization)
//  .metric(IResolvable)
//  .metric(java.util.List<ComputeRegionAutoscalerAutoscalingPolicyMetric>)
//  .mode(java.lang.String)
//  .scaleInControl(ComputeRegionAutoscalerAutoscalingPolicyScaleInControl)
//  .scalingSchedules(IResolvable)
//  .scalingSchedules(java.util.List<ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.maxReplicas">maxReplicas</a></code> | <code>java.lang.Number</code> | The maximum number of instances that the autoscaler can scale up to. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.minReplicas">minReplicas</a></code> | <code>java.lang.Number</code> | The minimum number of replicas that the autoscaler can scale down to. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.cooldownPeriod">cooldownPeriod</a></code> | <code>java.lang.Number</code> | The number of seconds that the autoscaler should wait before it starts collecting information from a new instance. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.cpuUtilization">cpuUtilization</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a></code> | cpu_utilization block. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.loadBalancingUtilization">loadBalancingUtilization</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | load_balancing_utilization block. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.metric">metric</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric">ComputeRegionAutoscalerAutoscalingPolicyMetric</a>></code> | metric block. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.mode">mode</a></code> | <code>java.lang.String</code> | Defines operating mode for this policy. Default value: "ON" Possible values: ["OFF", "ONLY_UP", "ON"]. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.scaleInControl">scaleInControl</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl">ComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a></code> | scale_in_control block. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.scalingSchedules">scalingSchedules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>></code> | scaling_schedules block. |

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.maxReplicas"></a>

```java
public java.lang.Number getMaxReplicas();
```

- *Type:* java.lang.Number

The maximum number of instances that the autoscaler can scale up to.

This is required when creating or updating an autoscaler. The
maximum number of replicas should not be lower than minimal number
of replicas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#max_replicas ComputeRegionAutoscaler#max_replicas}

---

##### `minReplicas`<sup>Required</sup> <a name="minReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.minReplicas"></a>

```java
public java.lang.Number getMinReplicas();
```

- *Type:* java.lang.Number

The minimum number of replicas that the autoscaler can scale down to.

This cannot be less than 0. If not provided, autoscaler will
choose a default value depending on maximum number of instances
allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#min_replicas ComputeRegionAutoscaler#min_replicas}

---

##### `cooldownPeriod`<sup>Optional</sup> <a name="cooldownPeriod" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.cooldownPeriod"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#cooldown_period ComputeRegionAutoscaler#cooldown_period}

---

##### `cpuUtilization`<sup>Optional</sup> <a name="cpuUtilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.cpuUtilization"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization getCpuUtilization();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a>

cpu_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#cpu_utilization ComputeRegionAutoscaler#cpu_utilization}

---

##### `loadBalancingUtilization`<sup>Optional</sup> <a name="loadBalancingUtilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.loadBalancingUtilization"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization getLoadBalancingUtilization();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

load_balancing_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#load_balancing_utilization ComputeRegionAutoscaler#load_balancing_utilization}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.metric"></a>

```java
public java.lang.Object getMetric();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric">ComputeRegionAutoscalerAutoscalingPolicyMetric</a>>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#metric ComputeRegionAutoscaler#metric}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Defines operating mode for this policy. Default value: "ON" Possible values: ["OFF", "ONLY_UP", "ON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#mode ComputeRegionAutoscaler#mode}

---

##### `scaleInControl`<sup>Optional</sup> <a name="scaleInControl" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.scaleInControl"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicyScaleInControl getScaleInControl();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl">ComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a>

scale_in_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#scale_in_control ComputeRegionAutoscaler#scale_in_control}

---

##### `scalingSchedules`<sup>Optional</sup> <a name="scalingSchedules" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.scalingSchedules"></a>

```java
public java.lang.Object getScalingSchedules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>>

scaling_schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#scaling_schedules ComputeRegionAutoscaler#scaling_schedules}

---

### ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization <a name="ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization;

ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization.builder()
    .target(java.lang.Number)
//  .predictiveMethod(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization.property.target">target</a></code> | <code>java.lang.Number</code> | The target CPU utilization that the autoscaler should maintain. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization.property.predictiveMethod">predictiveMethod</a></code> | <code>java.lang.String</code> | Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization.property.target"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#target ComputeRegionAutoscaler#target}

---

##### `predictiveMethod`<sup>Optional</sup> <a name="predictiveMethod" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization.property.predictiveMethod"></a>

```java
public java.lang.String getPredictiveMethod();
```

- *Type:* java.lang.String

Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:.

* NONE (default). No predictive method is used. The autoscaler scales the group to meet current demand based on real-time metrics.
* OPTIMIZE_AVAILABILITY. Predictive autoscaling improves availability by monitoring daily and weekly load patterns and scaling out ahead of anticipated demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#predictive_method ComputeRegionAutoscaler#predictive_method}

---

### ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization <a name="ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization;

ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization.builder()
    .target(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization.property.target">target</a></code> | <code>java.lang.Number</code> | Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain.

Must
be a positive float value. If not defined, the default is 0.8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#target ComputeRegionAutoscaler#target}

---

### ComputeRegionAutoscalerAutoscalingPolicyMetric <a name="ComputeRegionAutoscalerAutoscalingPolicyMetric" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric;

ComputeRegionAutoscalerAutoscalingPolicyMetric.builder()
    .name(java.lang.String)
//  .target(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.name">name</a></code> | <code>java.lang.String</code> | The identifier (type) of the Stackdriver Monitoring metric. The metric cannot have negative values. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.target">target</a></code> | <code>java.lang.Number</code> | The target value of the metric that autoscaler should maintain. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.type">type</a></code> | <code>java.lang.String</code> | Defines how target utilization value is expressed for a Stackdriver Monitoring metric. Possible values: ["GAUGE", "DELTA_PER_SECOND", "DELTA_PER_MINUTE"]. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The identifier (type) of the Stackdriver Monitoring metric. The metric cannot have negative values.

The metric must have a value type of INT64 or DOUBLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#name ComputeRegionAutoscaler#name}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.target"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#target ComputeRegionAutoscaler#target}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Defines how target utilization value is expressed for a Stackdriver Monitoring metric. Possible values: ["GAUGE", "DELTA_PER_SECOND", "DELTA_PER_MINUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#type ComputeRegionAutoscaler#type}

---

### ComputeRegionAutoscalerAutoscalingPolicyScaleInControl <a name="ComputeRegionAutoscalerAutoscalingPolicyScaleInControl" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl;

ComputeRegionAutoscalerAutoscalingPolicyScaleInControl.builder()
//  .maxScaledInReplicas(ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas)
//  .timeWindowSec(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl.property.maxScaledInReplicas">maxScaledInReplicas</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | max_scaled_in_replicas block. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl.property.timeWindowSec">timeWindowSec</a></code> | <code>java.lang.Number</code> | How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above. |

---

##### `maxScaledInReplicas`<sup>Optional</sup> <a name="maxScaledInReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl.property.maxScaledInReplicas"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas getMaxScaledInReplicas();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

max_scaled_in_replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#max_scaled_in_replicas ComputeRegionAutoscaler#max_scaled_in_replicas}

---

##### `timeWindowSec`<sup>Optional</sup> <a name="timeWindowSec" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl.property.timeWindowSec"></a>

```java
public java.lang.Number getTimeWindowSec();
```

- *Type:* java.lang.Number

How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#time_window_sec ComputeRegionAutoscaler#time_window_sec}

---

### ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas <a name="ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas;

ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.builder()
//  .fixed(java.lang.Number)
//  .percent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.fixed">fixed</a></code> | <code>java.lang.Number</code> | Specifies a fixed number of VM instances. This must be a positive integer. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.percent">percent</a></code> | <code>java.lang.Number</code> | Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. |

---

##### `fixed`<sup>Optional</sup> <a name="fixed" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.fixed"></a>

```java
public java.lang.Number getFixed();
```

- *Type:* java.lang.Number

Specifies a fixed number of VM instances. This must be a positive integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#fixed ComputeRegionAutoscaler#fixed}

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#percent ComputeRegionAutoscaler#percent}

---

### ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules <a name="ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules;

ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.builder()
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
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.durationSec">durationSec</a></code> | <code>java.lang.Number</code> | The duration of time intervals (in seconds) for which this scaling schedule will be running. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.minRequiredReplicas">minRequiredReplicas</a></code> | <code>java.lang.Number</code> | Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#name ComputeRegionAutoscaler#name}. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.schedule">schedule</a></code> | <code>java.lang.String</code> | The start timestamps of time intervals when this scaling schedule should provide a scaling signal. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.description">description</a></code> | <code>java.lang.String</code> | A description of a scaling schedule. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | A boolean value that specifies if a scaling schedule can influence autoscaler recommendations. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | The time zone to be used when interpreting the schedule. |

---

##### `durationSec`<sup>Required</sup> <a name="durationSec" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.durationSec"></a>

```java
public java.lang.Number getDurationSec();
```

- *Type:* java.lang.Number

The duration of time intervals (in seconds) for which this scaling schedule will be running.

The minimum allowed value is 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#duration_sec ComputeRegionAutoscaler#duration_sec}

---

##### `minRequiredReplicas`<sup>Required</sup> <a name="minRequiredReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.minRequiredReplicas"></a>

```java
public java.lang.Number getMinRequiredReplicas();
```

- *Type:* java.lang.Number

Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#min_required_replicas ComputeRegionAutoscaler#min_required_replicas}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#name ComputeRegionAutoscaler#name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

The start timestamps of time intervals when this scaling schedule should provide a scaling signal.

This field uses the extended cron format (with an optional year field).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#schedule ComputeRegionAutoscaler#schedule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of a scaling schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#description ComputeRegionAutoscaler#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

A boolean value that specifies if a scaling schedule can influence autoscaler recommendations.

If set to true, then a scaling schedule has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#disabled ComputeRegionAutoscaler#disabled}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

The time zone to be used when interpreting the schedule.

The value of this field must be a time zone name from the tz database: http://en.wikipedia.org/wiki/Tz_database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#time_zone ComputeRegionAutoscaler#time_zone}

---

### ComputeRegionAutoscalerConfig <a name="ComputeRegionAutoscalerConfig" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscalerConfig;

ComputeRegionAutoscalerConfig.builder()
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
    .autoscalingPolicy(ComputeRegionAutoscalerAutoscalingPolicy)
    .name(java.lang.String)
    .target(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(ComputeRegionAutoscalerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.autoscalingPolicy">autoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a></code> | autoscaling_policy block. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.target">target</a></code> | <code>java.lang.String</code> | URL of the managed instance group that this autoscaler will scale. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#id ComputeRegionAutoscaler#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#project ComputeRegionAutoscaler#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.region">region</a></code> | <code>java.lang.String</code> | URL of the region where the instance group resides. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts">ComputeRegionAutoscalerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscalingPolicy`<sup>Required</sup> <a name="autoscalingPolicy" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.autoscalingPolicy"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicy getAutoscalingPolicy();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a>

autoscaling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#autoscaling_policy ComputeRegionAutoscaler#autoscaling_policy}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#name ComputeRegionAutoscaler#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

URL of the managed instance group that this autoscaler will scale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#target ComputeRegionAutoscaler#target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#description ComputeRegionAutoscaler#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#id ComputeRegionAutoscaler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#project ComputeRegionAutoscaler#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

URL of the region where the instance group resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#region ComputeRegionAutoscaler#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.timeouts"></a>

```java
public ComputeRegionAutoscalerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts">ComputeRegionAutoscalerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#timeouts ComputeRegionAutoscaler#timeouts}

---

### ComputeRegionAutoscalerTimeouts <a name="ComputeRegionAutoscalerTimeouts" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscalerTimeouts;

ComputeRegionAutoscalerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#create ComputeRegionAutoscaler#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#delete ComputeRegionAutoscaler#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#update ComputeRegionAutoscaler#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#create ComputeRegionAutoscaler#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#delete ComputeRegionAutoscaler#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/compute_region_autoscaler#update ComputeRegionAutoscaler#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference <a name="ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference;

new ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resetPredictiveMethod">resetPredictiveMethod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPredictiveMethod` <a name="resetPredictiveMethod" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resetPredictiveMethod"></a>

```java
public void resetPredictiveMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethodInput">predictiveMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethod">predictiveMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.target">target</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `predictiveMethodInput`<sup>Optional</sup> <a name="predictiveMethodInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethodInput"></a>

```java
public java.lang.String getPredictiveMethodInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.targetInput"></a>

```java
public java.lang.Number getTargetInput();
```

- *Type:* java.lang.Number

---

##### `predictiveMethod`<sup>Required</sup> <a name="predictiveMethod" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethod"></a>

```java
public java.lang.String getPredictiveMethod();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.internalValue"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a>

---


### ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference <a name="ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference;

new ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.target">target</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.targetInput"></a>

```java
public java.lang.Number getTargetInput();
```

- *Type:* java.lang.Number

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.internalValue"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---


### ComputeRegionAutoscalerAutoscalingPolicyMetricList <a name="ComputeRegionAutoscalerAutoscalingPolicyMetricList" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList;

new ComputeRegionAutoscalerAutoscalingPolicyMetricList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.get"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric">ComputeRegionAutoscalerAutoscalingPolicyMetric</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric">ComputeRegionAutoscalerAutoscalingPolicyMetric</a>>

---


### ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference <a name="ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference;

new ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetTarget"></a>

```java
public void resetTarget()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.target">target</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric">ComputeRegionAutoscalerAutoscalingPolicyMetric</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.targetInput"></a>

```java
public java.lang.Number getTargetInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric">ComputeRegionAutoscalerAutoscalingPolicyMetric</a> OR com.hashicorp.cdktf.IResolvable

---


### ComputeRegionAutoscalerAutoscalingPolicyOutputReference <a name="ComputeRegionAutoscalerAutoscalingPolicyOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference;

new ComputeRegionAutoscalerAutoscalingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization">putCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization">putLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScaleInControl">putScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules">putScalingSchedules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetCooldownPeriod">resetCooldownPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetCpuUtilization">resetCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetLoadBalancingUtilization">resetLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetScaleInControl">resetScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetScalingSchedules">resetScalingSchedules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCpuUtilization` <a name="putCpuUtilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization"></a>

```java
public void putCpuUtilization(ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a>

---

##### `putLoadBalancingUtilization` <a name="putLoadBalancingUtilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization"></a>

```java
public void putLoadBalancingUtilization(ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---

##### `putMetric` <a name="putMetric" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putMetric"></a>

```java
public void putMetric(IResolvable OR java.util.List<ComputeRegionAutoscalerAutoscalingPolicyMetric> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putMetric.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric">ComputeRegionAutoscalerAutoscalingPolicyMetric</a>>

---

##### `putScaleInControl` <a name="putScaleInControl" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScaleInControl"></a>

```java
public void putScaleInControl(ComputeRegionAutoscalerAutoscalingPolicyScaleInControl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScaleInControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl">ComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a>

---

##### `putScalingSchedules` <a name="putScalingSchedules" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules"></a>

```java
public void putScalingSchedules(IResolvable OR java.util.List<ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>>

---

##### `resetCooldownPeriod` <a name="resetCooldownPeriod" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetCooldownPeriod"></a>

```java
public void resetCooldownPeriod()
```

##### `resetCpuUtilization` <a name="resetCpuUtilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetCpuUtilization"></a>

```java
public void resetCpuUtilization()
```

##### `resetLoadBalancingUtilization` <a name="resetLoadBalancingUtilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetLoadBalancingUtilization"></a>

```java
public void resetLoadBalancingUtilization()
```

##### `resetMetric` <a name="resetMetric" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetMetric"></a>

```java
public void resetMetric()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetMode"></a>

```java
public void resetMode()
```

##### `resetScaleInControl` <a name="resetScaleInControl" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetScaleInControl"></a>

```java
public void resetScaleInControl()
```

##### `resetScalingSchedules` <a name="resetScalingSchedules" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetScalingSchedules"></a>

```java
public void resetScalingSchedules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilization">cpuUtilization</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilization">loadBalancingUtilization</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList">ComputeRegionAutoscalerAutoscalingPolicyMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scaleInControl">scaleInControl</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedules">scalingSchedules</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriodInput">cooldownPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilizationInput">cpuUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilizationInput">loadBalancingUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.maxReplicasInput">maxReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.metricInput">metricInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric">ComputeRegionAutoscalerAutoscalingPolicyMetric</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.minReplicasInput">minReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scaleInControlInput">scaleInControlInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl">ComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedulesInput">scalingSchedulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriod">cooldownPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.maxReplicas">maxReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.minReplicas">minReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuUtilization`<sup>Required</sup> <a name="cpuUtilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilization"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference getCpuUtilization();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference</a>

---

##### `loadBalancingUtilization`<sup>Required</sup> <a name="loadBalancingUtilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilization"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference getLoadBalancingUtilization();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference</a>

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.metric"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicyMetricList getMetric();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList">ComputeRegionAutoscalerAutoscalingPolicyMetricList</a>

---

##### `scaleInControl`<sup>Required</sup> <a name="scaleInControl" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scaleInControl"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference getScaleInControl();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference</a>

---

##### `scalingSchedules`<sup>Required</sup> <a name="scalingSchedules" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedules"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList getScalingSchedules();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList</a>

---

##### `cooldownPeriodInput`<sup>Optional</sup> <a name="cooldownPeriodInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriodInput"></a>

```java
public java.lang.Number getCooldownPeriodInput();
```

- *Type:* java.lang.Number

---

##### `cpuUtilizationInput`<sup>Optional</sup> <a name="cpuUtilizationInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilizationInput"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization getCpuUtilizationInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a>

---

##### `loadBalancingUtilizationInput`<sup>Optional</sup> <a name="loadBalancingUtilizationInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilizationInput"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization getLoadBalancingUtilizationInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---

##### `maxReplicasInput`<sup>Optional</sup> <a name="maxReplicasInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.maxReplicasInput"></a>

```java
public java.lang.Number getMaxReplicasInput();
```

- *Type:* java.lang.Number

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.metricInput"></a>

```java
public java.lang.Object getMetricInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric">ComputeRegionAutoscalerAutoscalingPolicyMetric</a>>

---

##### `minReplicasInput`<sup>Optional</sup> <a name="minReplicasInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.minReplicasInput"></a>

```java
public java.lang.Number getMinReplicasInput();
```

- *Type:* java.lang.Number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `scaleInControlInput`<sup>Optional</sup> <a name="scaleInControlInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scaleInControlInput"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicyScaleInControl getScaleInControlInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl">ComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a>

---

##### `scalingSchedulesInput`<sup>Optional</sup> <a name="scalingSchedulesInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedulesInput"></a>

```java
public java.lang.Object getScalingSchedulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>>

---

##### `cooldownPeriod`<sup>Required</sup> <a name="cooldownPeriod" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriod"></a>

```java
public java.lang.Number getCooldownPeriod();
```

- *Type:* java.lang.Number

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.maxReplicas"></a>

```java
public java.lang.Number getMaxReplicas();
```

- *Type:* java.lang.Number

---

##### `minReplicas`<sup>Required</sup> <a name="minReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.minReplicas"></a>

```java
public java.lang.Number getMinReplicas();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.internalValue"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a>

---


### ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference <a name="ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference;

new ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetFixed">resetFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetPercent">resetPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFixed` <a name="resetFixed" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetFixed"></a>

```java
public void resetFixed()
```

##### `resetPercent` <a name="resetPercent" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetPercent"></a>

```java
public void resetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixedInput">fixedInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percentInput">percentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixed">fixed</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percent">percent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fixedInput`<sup>Optional</sup> <a name="fixedInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixedInput"></a>

```java
public java.lang.Number getFixedInput();
```

- *Type:* java.lang.Number

---

##### `percentInput`<sup>Optional</sup> <a name="percentInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percentInput"></a>

```java
public java.lang.Number getPercentInput();
```

- *Type:* java.lang.Number

---

##### `fixed`<sup>Required</sup> <a name="fixed" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixed"></a>

```java
public java.lang.Number getFixed();
```

- *Type:* java.lang.Number

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.internalValue"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---


### ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference <a name="ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference;

new ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas">putMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetMaxScaledInReplicas">resetMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetTimeWindowSec">resetTimeWindowSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaxScaledInReplicas` <a name="putMaxScaledInReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas"></a>

```java
public void putMaxScaledInReplicas(ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---

##### `resetMaxScaledInReplicas` <a name="resetMaxScaledInReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetMaxScaledInReplicas"></a>

```java
public void resetMaxScaledInReplicas()
```

##### `resetTimeWindowSec` <a name="resetTimeWindowSec" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetTimeWindowSec"></a>

```java
public void resetTimeWindowSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicas">maxScaledInReplicas</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicasInput">maxScaledInReplicasInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSecInput">timeWindowSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSec">timeWindowSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl">ComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxScaledInReplicas`<sup>Required</sup> <a name="maxScaledInReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicas"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference getMaxScaledInReplicas();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference</a>

---

##### `maxScaledInReplicasInput`<sup>Optional</sup> <a name="maxScaledInReplicasInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicasInput"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas getMaxScaledInReplicasInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---

##### `timeWindowSecInput`<sup>Optional</sup> <a name="timeWindowSecInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSecInput"></a>

```java
public java.lang.Number getTimeWindowSecInput();
```

- *Type:* java.lang.Number

---

##### `timeWindowSec`<sup>Required</sup> <a name="timeWindowSec" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSec"></a>

```java
public java.lang.Number getTimeWindowSec();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.internalValue"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicyScaleInControl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl">ComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a>

---


### ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList <a name="ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList;

new ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.get"></a>

```java
public ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>>

---


### ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference <a name="ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference;

new ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSecInput">durationSecInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicasInput">minRequiredReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSec">durationSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicas">minRequiredReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `durationSecInput`<sup>Optional</sup> <a name="durationSecInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSecInput"></a>

```java
public java.lang.Number getDurationSecInput();
```

- *Type:* java.lang.Number

---

##### `minRequiredReplicasInput`<sup>Optional</sup> <a name="minRequiredReplicasInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicasInput"></a>

```java
public java.lang.Number getMinRequiredReplicasInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `durationSec`<sup>Required</sup> <a name="durationSec" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSec"></a>

```java
public java.lang.Number getDurationSec();
```

- *Type:* java.lang.Number

---

##### `minRequiredReplicas`<sup>Required</sup> <a name="minRequiredReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicas"></a>

```java
public java.lang.Number getMinRequiredReplicas();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a> OR com.hashicorp.cdktf.IResolvable

---


### ComputeRegionAutoscalerTimeoutsOutputReference <a name="ComputeRegionAutoscalerTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_autoscaler.ComputeRegionAutoscalerTimeoutsOutputReference;

new ComputeRegionAutoscalerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts">ComputeRegionAutoscalerTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts">ComputeRegionAutoscalerTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



