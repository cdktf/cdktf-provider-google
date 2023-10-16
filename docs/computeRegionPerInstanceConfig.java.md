# `google_compute_region_per_instance_config`

Refer to the Terraform Registory for docs: [`google_compute_region_per_instance_config`](https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config).

# `computeRegionPerInstanceConfig` Submodule <a name="`computeRegionPerInstanceConfig` Submodule" id="@cdktf/provider-google.computeRegionPerInstanceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionPerInstanceConfig <a name="ComputeRegionPerInstanceConfig" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config google_compute_region_per_instance_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_per_instance_config.ComputeRegionPerInstanceConfig;

ComputeRegionPerInstanceConfig.Builder.create(Construct scope, java.lang.String id)
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
    .regionInstanceGroupManager(java.lang.String)
//  .id(java.lang.String)
//  .minimalAction(java.lang.String)
//  .mostDisruptiveAllowedAction(java.lang.String)
//  .preservedState(ComputeRegionPerInstanceConfigPreservedState)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .removeInstanceStateOnDestroy(java.lang.Boolean)
//  .removeInstanceStateOnDestroy(IResolvable)
//  .timeouts(ComputeRegionPerInstanceConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name for this per-instance config and its corresponding instance. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.regionInstanceGroupManager">regionInstanceGroupManager</a></code> | <code>java.lang.String</code> | The region instance group manager this instance config is part of. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#id ComputeRegionPerInstanceConfig#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.minimalAction">minimalAction</a></code> | <code>java.lang.String</code> | The minimal action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.mostDisruptiveAllowedAction">mostDisruptiveAllowedAction</a></code> | <code>java.lang.String</code> | The most disruptive action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.preservedState">preservedState</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a></code> | preserved_state block. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#project ComputeRegionPerInstanceConfig#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where the containing instance group manager is located. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.removeInstanceStateOnDestroy">removeInstanceStateOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, deleting this config will immediately remove any specified state from the underlying instance. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts">ComputeRegionPerInstanceConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name for this per-instance config and its corresponding instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#name ComputeRegionPerInstanceConfig#name}

---

##### `regionInstanceGroupManager`<sup>Required</sup> <a name="regionInstanceGroupManager" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.regionInstanceGroupManager"></a>

- *Type:* java.lang.String

The region instance group manager this instance config is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#region_instance_group_manager ComputeRegionPerInstanceConfig#region_instance_group_manager}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#id ComputeRegionPerInstanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimalAction`<sup>Optional</sup> <a name="minimalAction" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.minimalAction"></a>

- *Type:* java.lang.String

The minimal action to perform on the instance during an update.

Default is 'NONE'. Possible values are:

* REPLACE
* RESTART
* REFRESH
* NONE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#minimal_action ComputeRegionPerInstanceConfig#minimal_action}

---

##### `mostDisruptiveAllowedAction`<sup>Optional</sup> <a name="mostDisruptiveAllowedAction" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.mostDisruptiveAllowedAction"></a>

- *Type:* java.lang.String

The most disruptive action to perform on the instance during an update.

Default is 'REPLACE'. Possible values are:

* REPLACE
* RESTART
* REFRESH
* NONE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#most_disruptive_allowed_action ComputeRegionPerInstanceConfig#most_disruptive_allowed_action}

---

##### `preservedState`<sup>Optional</sup> <a name="preservedState" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.preservedState"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a>

preserved_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#preserved_state ComputeRegionPerInstanceConfig#preserved_state}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#project ComputeRegionPerInstanceConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where the containing instance group manager is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#region ComputeRegionPerInstanceConfig#region}

---

##### `removeInstanceStateOnDestroy`<sup>Optional</sup> <a name="removeInstanceStateOnDestroy" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.removeInstanceStateOnDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, deleting this config will immediately remove any specified state from the underlying instance.

When false, deleting this config will *not* immediately remove any state from the underlying instance.
State will be removed on the next instance recreation or update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#remove_instance_state_on_destroy ComputeRegionPerInstanceConfig#remove_instance_state_on_destroy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts">ComputeRegionPerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#timeouts ComputeRegionPerInstanceConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putPreservedState">putPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetMinimalAction">resetMinimalAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetMostDisruptiveAllowedAction">resetMostDisruptiveAllowedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetPreservedState">resetPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetRemoveInstanceStateOnDestroy">resetRemoveInstanceStateOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPreservedState` <a name="putPreservedState" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putPreservedState"></a>

```java
public void putPreservedState(ComputeRegionPerInstanceConfigPreservedState value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putPreservedState.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putTimeouts"></a>

```java
public void putTimeouts(ComputeRegionPerInstanceConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts">ComputeRegionPerInstanceConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetId"></a>

```java
public void resetId()
```

##### `resetMinimalAction` <a name="resetMinimalAction" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetMinimalAction"></a>

```java
public void resetMinimalAction()
```

##### `resetMostDisruptiveAllowedAction` <a name="resetMostDisruptiveAllowedAction" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetMostDisruptiveAllowedAction"></a>

```java
public void resetMostDisruptiveAllowedAction()
```

##### `resetPreservedState` <a name="resetPreservedState" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetPreservedState"></a>

```java
public void resetPreservedState()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRemoveInstanceStateOnDestroy` <a name="resetRemoveInstanceStateOnDestroy" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetRemoveInstanceStateOnDestroy"></a>

```java
public void resetRemoveInstanceStateOnDestroy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_per_instance_config.ComputeRegionPerInstanceConfig;

ComputeRegionPerInstanceConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_per_instance_config.ComputeRegionPerInstanceConfig;

ComputeRegionPerInstanceConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_per_instance_config.ComputeRegionPerInstanceConfig;

ComputeRegionPerInstanceConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.preservedState">preservedState</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference">ComputeRegionPerInstanceConfigPreservedStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference">ComputeRegionPerInstanceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.minimalActionInput">minimalActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.mostDisruptiveAllowedActionInput">mostDisruptiveAllowedActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.preservedStateInput">preservedStateInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.regionInstanceGroupManagerInput">regionInstanceGroupManagerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.removeInstanceStateOnDestroyInput">removeInstanceStateOnDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts">ComputeRegionPerInstanceConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.minimalAction">minimalAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.mostDisruptiveAllowedAction">mostDisruptiveAllowedAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.regionInstanceGroupManager">regionInstanceGroupManager</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.removeInstanceStateOnDestroy">removeInstanceStateOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `preservedState`<sup>Required</sup> <a name="preservedState" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.preservedState"></a>

```java
public ComputeRegionPerInstanceConfigPreservedStateOutputReference getPreservedState();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference">ComputeRegionPerInstanceConfigPreservedStateOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.timeouts"></a>

```java
public ComputeRegionPerInstanceConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference">ComputeRegionPerInstanceConfigTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `minimalActionInput`<sup>Optional</sup> <a name="minimalActionInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.minimalActionInput"></a>

```java
public java.lang.String getMinimalActionInput();
```

- *Type:* java.lang.String

---

##### `mostDisruptiveAllowedActionInput`<sup>Optional</sup> <a name="mostDisruptiveAllowedActionInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.mostDisruptiveAllowedActionInput"></a>

```java
public java.lang.String getMostDisruptiveAllowedActionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `preservedStateInput`<sup>Optional</sup> <a name="preservedStateInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.preservedStateInput"></a>

```java
public ComputeRegionPerInstanceConfigPreservedState getPreservedStateInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `regionInstanceGroupManagerInput`<sup>Optional</sup> <a name="regionInstanceGroupManagerInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.regionInstanceGroupManagerInput"></a>

```java
public java.lang.String getRegionInstanceGroupManagerInput();
```

- *Type:* java.lang.String

---

##### `removeInstanceStateOnDestroyInput`<sup>Optional</sup> <a name="removeInstanceStateOnDestroyInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.removeInstanceStateOnDestroyInput"></a>

```java
public java.lang.Object getRemoveInstanceStateOnDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts">ComputeRegionPerInstanceConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `minimalAction`<sup>Required</sup> <a name="minimalAction" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.minimalAction"></a>

```java
public java.lang.String getMinimalAction();
```

- *Type:* java.lang.String

---

##### `mostDisruptiveAllowedAction`<sup>Required</sup> <a name="mostDisruptiveAllowedAction" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.mostDisruptiveAllowedAction"></a>

```java
public java.lang.String getMostDisruptiveAllowedAction();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `regionInstanceGroupManager`<sup>Required</sup> <a name="regionInstanceGroupManager" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.regionInstanceGroupManager"></a>

```java
public java.lang.String getRegionInstanceGroupManager();
```

- *Type:* java.lang.String

---

##### `removeInstanceStateOnDestroy`<sup>Required</sup> <a name="removeInstanceStateOnDestroy" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.removeInstanceStateOnDestroy"></a>

```java
public java.lang.Object getRemoveInstanceStateOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionPerInstanceConfigConfig <a name="ComputeRegionPerInstanceConfigConfig" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_per_instance_config.ComputeRegionPerInstanceConfigConfig;

ComputeRegionPerInstanceConfigConfig.builder()
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
    .regionInstanceGroupManager(java.lang.String)
//  .id(java.lang.String)
//  .minimalAction(java.lang.String)
//  .mostDisruptiveAllowedAction(java.lang.String)
//  .preservedState(ComputeRegionPerInstanceConfigPreservedState)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .removeInstanceStateOnDestroy(java.lang.Boolean)
//  .removeInstanceStateOnDestroy(IResolvable)
//  .timeouts(ComputeRegionPerInstanceConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name for this per-instance config and its corresponding instance. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.regionInstanceGroupManager">regionInstanceGroupManager</a></code> | <code>java.lang.String</code> | The region instance group manager this instance config is part of. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#id ComputeRegionPerInstanceConfig#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.minimalAction">minimalAction</a></code> | <code>java.lang.String</code> | The minimal action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.mostDisruptiveAllowedAction">mostDisruptiveAllowedAction</a></code> | <code>java.lang.String</code> | The most disruptive action to perform on the instance during an update. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.preservedState">preservedState</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a></code> | preserved_state block. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#project ComputeRegionPerInstanceConfig#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where the containing instance group manager is located. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.removeInstanceStateOnDestroy">removeInstanceStateOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, deleting this config will immediately remove any specified state from the underlying instance. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts">ComputeRegionPerInstanceConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name for this per-instance config and its corresponding instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#name ComputeRegionPerInstanceConfig#name}

---

##### `regionInstanceGroupManager`<sup>Required</sup> <a name="regionInstanceGroupManager" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.regionInstanceGroupManager"></a>

```java
public java.lang.String getRegionInstanceGroupManager();
```

- *Type:* java.lang.String

The region instance group manager this instance config is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#region_instance_group_manager ComputeRegionPerInstanceConfig#region_instance_group_manager}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#id ComputeRegionPerInstanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimalAction`<sup>Optional</sup> <a name="minimalAction" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.minimalAction"></a>

```java
public java.lang.String getMinimalAction();
```

- *Type:* java.lang.String

The minimal action to perform on the instance during an update.

Default is 'NONE'. Possible values are:

* REPLACE
* RESTART
* REFRESH
* NONE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#minimal_action ComputeRegionPerInstanceConfig#minimal_action}

---

##### `mostDisruptiveAllowedAction`<sup>Optional</sup> <a name="mostDisruptiveAllowedAction" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.mostDisruptiveAllowedAction"></a>

```java
public java.lang.String getMostDisruptiveAllowedAction();
```

- *Type:* java.lang.String

The most disruptive action to perform on the instance during an update.

Default is 'REPLACE'. Possible values are:

* REPLACE
* RESTART
* REFRESH
* NONE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#most_disruptive_allowed_action ComputeRegionPerInstanceConfig#most_disruptive_allowed_action}

---

##### `preservedState`<sup>Optional</sup> <a name="preservedState" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.preservedState"></a>

```java
public ComputeRegionPerInstanceConfigPreservedState getPreservedState();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a>

preserved_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#preserved_state ComputeRegionPerInstanceConfig#preserved_state}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#project ComputeRegionPerInstanceConfig#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where the containing instance group manager is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#region ComputeRegionPerInstanceConfig#region}

---

##### `removeInstanceStateOnDestroy`<sup>Optional</sup> <a name="removeInstanceStateOnDestroy" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.removeInstanceStateOnDestroy"></a>

```java
public java.lang.Object getRemoveInstanceStateOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, deleting this config will immediately remove any specified state from the underlying instance.

When false, deleting this config will *not* immediately remove any state from the underlying instance.
State will be removed on the next instance recreation or update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#remove_instance_state_on_destroy ComputeRegionPerInstanceConfig#remove_instance_state_on_destroy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigConfig.property.timeouts"></a>

```java
public ComputeRegionPerInstanceConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts">ComputeRegionPerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#timeouts ComputeRegionPerInstanceConfig#timeouts}

---

### ComputeRegionPerInstanceConfigPreservedState <a name="ComputeRegionPerInstanceConfigPreservedState" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_per_instance_config.ComputeRegionPerInstanceConfigPreservedState;

ComputeRegionPerInstanceConfigPreservedState.builder()
//  .disk(IResolvable)
//  .disk(java.util.List<ComputeRegionPerInstanceConfigPreservedStateDisk>)
//  .externalIp(IResolvable)
//  .externalIp(java.util.List<ComputeRegionPerInstanceConfigPreservedStateExternalIp>)
//  .internalIp(IResolvable)
//  .internalIp(java.util.List<ComputeRegionPerInstanceConfigPreservedStateInternalIp>)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.disk">disk</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk">ComputeRegionPerInstanceConfigPreservedStateDisk</a>></code> | disk block. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.externalIp">externalIp</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp">ComputeRegionPerInstanceConfigPreservedStateExternalIp</a>></code> | external_ip block. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.internalIp">internalIp</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp">ComputeRegionPerInstanceConfigPreservedStateInternalIp</a>></code> | internal_ip block. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Preserved metadata defined for this instance. This is a list of key->value pairs. |

---

##### `disk`<sup>Optional</sup> <a name="disk" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.disk"></a>

```java
public java.lang.Object getDisk();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk">ComputeRegionPerInstanceConfigPreservedStateDisk</a>>

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#disk ComputeRegionPerInstanceConfig#disk}

---

##### `externalIp`<sup>Optional</sup> <a name="externalIp" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.externalIp"></a>

```java
public java.lang.Object getExternalIp();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp">ComputeRegionPerInstanceConfigPreservedStateExternalIp</a>>

external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#external_ip ComputeRegionPerInstanceConfig#external_ip}

---

##### `internalIp`<sup>Optional</sup> <a name="internalIp" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.internalIp"></a>

```java
public java.lang.Object getInternalIp();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp">ComputeRegionPerInstanceConfigPreservedStateInternalIp</a>>

internal_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#internal_ip ComputeRegionPerInstanceConfig#internal_ip}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Preserved metadata defined for this instance. This is a list of key->value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#metadata ComputeRegionPerInstanceConfig#metadata}

---

### ComputeRegionPerInstanceConfigPreservedStateDisk <a name="ComputeRegionPerInstanceConfigPreservedStateDisk" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_per_instance_config.ComputeRegionPerInstanceConfigPreservedStateDisk;

ComputeRegionPerInstanceConfigPreservedStateDisk.builder()
    .deviceName(java.lang.String)
    .source(java.lang.String)
//  .deleteRule(java.lang.String)
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.source">source</a></code> | <code>java.lang.String</code> | The URI of an existing persistent disk to attach under the specified device-name in the format 'projects/project-id/zones/zone/disks/disk-name'. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.deleteRule">deleteRule</a></code> | <code>java.lang.String</code> | A value that prescribes what should happen to the stateful disk when the VM instance is deleted. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.mode">mode</a></code> | <code>java.lang.String</code> | The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"]. |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#device_name ComputeRegionPerInstanceConfig#device_name}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

The URI of an existing persistent disk to attach under the specified device-name in the format 'projects/project-id/zones/zone/disks/disk-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#source ComputeRegionPerInstanceConfig#source}

---

##### `deleteRule`<sup>Optional</sup> <a name="deleteRule" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.deleteRule"></a>

```java
public java.lang.String getDeleteRule();
```

- *Type:* java.lang.String

A value that prescribes what should happen to the stateful disk when the VM instance is deleted.

The available options are 'NEVER' and 'ON_PERMANENT_INSTANCE_DELETION'.
'NEVER' - detach the disk when the VM is deleted, but do not delete the disk.
'ON_PERMANENT_INSTANCE_DELETION' will delete the stateful disk when the VM is permanently
deleted from the instance group. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#delete_rule ComputeRegionPerInstanceConfig#delete_rule}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The mode of the disk. Default value: "READ_WRITE" Possible values: ["READ_ONLY", "READ_WRITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#mode ComputeRegionPerInstanceConfig#mode}

---

### ComputeRegionPerInstanceConfigPreservedStateExternalIp <a name="ComputeRegionPerInstanceConfigPreservedStateExternalIp" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_per_instance_config.ComputeRegionPerInstanceConfigPreservedStateExternalIp;

ComputeRegionPerInstanceConfigPreservedStateExternalIp.builder()
    .interfaceName(java.lang.String)
//  .autoDelete(java.lang.String)
//  .ipAddress(ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp.property.interfaceName">interfaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#interface_name ComputeRegionPerInstanceConfig#interface_name}. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp.property.autoDelete">autoDelete</a></code> | <code>java.lang.String</code> | These stateful IPs will never be released during autohealing, update or VM instance recreate operations. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp.property.ipAddress">ipAddress</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | ip_address block. |

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp.property.interfaceName"></a>

```java
public java.lang.String getInterfaceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#interface_name ComputeRegionPerInstanceConfig#interface_name}.

---

##### `autoDelete`<sup>Optional</sup> <a name="autoDelete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp.property.autoDelete"></a>

```java
public java.lang.String getAutoDelete();
```

- *Type:* java.lang.String

These stateful IPs will never be released during autohealing, update or VM instance recreate operations.

This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#auto_delete ComputeRegionPerInstanceConfig#auto_delete}

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp.property.ipAddress"></a>

```java
public ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress getIpAddress();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a>

ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#ip_address ComputeRegionPerInstanceConfig#ip_address}

---

### ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress <a name="ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_per_instance_config.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress;

ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress.builder()
//  .address(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress.property.address">address</a></code> | <code>java.lang.String</code> | The URL of the reservation for this IP address. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The URL of the reservation for this IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#address ComputeRegionPerInstanceConfig#address}

---

### ComputeRegionPerInstanceConfigPreservedStateInternalIp <a name="ComputeRegionPerInstanceConfigPreservedStateInternalIp" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_per_instance_config.ComputeRegionPerInstanceConfigPreservedStateInternalIp;

ComputeRegionPerInstanceConfigPreservedStateInternalIp.builder()
    .interfaceName(java.lang.String)
//  .autoDelete(java.lang.String)
//  .ipAddress(ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp.property.interfaceName">interfaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#interface_name ComputeRegionPerInstanceConfig#interface_name}. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp.property.autoDelete">autoDelete</a></code> | <code>java.lang.String</code> | These stateful IPs will never be released during autohealing, update or VM instance recreate operations. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp.property.ipAddress">ipAddress</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | ip_address block. |

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp.property.interfaceName"></a>

```java
public java.lang.String getInterfaceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#interface_name ComputeRegionPerInstanceConfig#interface_name}.

---

##### `autoDelete`<sup>Optional</sup> <a name="autoDelete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp.property.autoDelete"></a>

```java
public java.lang.String getAutoDelete();
```

- *Type:* java.lang.String

These stateful IPs will never be released during autohealing, update or VM instance recreate operations.

This flag is used to configure if the IP reservation should be deleted after it is no longer used by the group, e.g. when the given instance or the whole group is deleted. Default value: "NEVER" Possible values: ["NEVER", "ON_PERMANENT_INSTANCE_DELETION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#auto_delete ComputeRegionPerInstanceConfig#auto_delete}

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp.property.ipAddress"></a>

```java
public ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress getIpAddress();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a>

ip_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#ip_address ComputeRegionPerInstanceConfig#ip_address}

---

### ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress <a name="ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_per_instance_config.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress;

ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress.builder()
//  .address(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress.property.address">address</a></code> | <code>java.lang.String</code> | The URL of the reservation for this IP address. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The URL of the reservation for this IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#address ComputeRegionPerInstanceConfig#address}

---

### ComputeRegionPerInstanceConfigTimeouts <a name="ComputeRegionPerInstanceConfigTimeouts" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_per_instance_config.ComputeRegionPerInstanceConfigTimeouts;

ComputeRegionPerInstanceConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#create ComputeRegionPerInstanceConfig#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#delete ComputeRegionPerInstanceConfig#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#update ComputeRegionPerInstanceConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#create ComputeRegionPerInstanceConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#delete ComputeRegionPerInstanceConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/compute_region_per_instance_config#update ComputeRegionPerInstanceConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionPerInstanceConfigPreservedStateDiskList <a name="ComputeRegionPerInstanceConfigPreservedStateDiskList" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_per_instance_config.ComputeRegionPerInstanceConfigPreservedStateDiskList;

new ComputeRegionPerInstanceConfigPreservedStateDiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.get"></a>

```java
public ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk">ComputeRegionPerInstanceConfigPreservedStateDisk</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk">ComputeRegionPerInstanceConfigPreservedStateDisk</a>>

---


### ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference <a name="ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_per_instance_config.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference;

new ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resetDeleteRule">resetDeleteRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteRule` <a name="resetDeleteRule" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resetDeleteRule"></a>

```java
public void resetDeleteRule()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deleteRuleInput">deleteRuleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deviceNameInput">deviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deleteRule">deleteRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk">ComputeRegionPerInstanceConfigPreservedStateDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteRuleInput`<sup>Optional</sup> <a name="deleteRuleInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deleteRuleInput"></a>

```java
public java.lang.String getDeleteRuleInput();
```

- *Type:* java.lang.String

---

##### `deviceNameInput`<sup>Optional</sup> <a name="deviceNameInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deviceNameInput"></a>

```java
public java.lang.String getDeviceNameInput();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `deleteRule`<sup>Required</sup> <a name="deleteRule" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deleteRule"></a>

```java
public java.lang.String getDeleteRule();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk">ComputeRegionPerInstanceConfigPreservedStateDisk</a>

---


### ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference <a name="ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_per_instance_config.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference;

new ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resetAddress">resetAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.resetAddress"></a>

```java
public void resetAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference.property.internalValue"></a>

```java
public ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a>

---


### ComputeRegionPerInstanceConfigPreservedStateExternalIpList <a name="ComputeRegionPerInstanceConfigPreservedStateExternalIpList" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_per_instance_config.ComputeRegionPerInstanceConfigPreservedStateExternalIpList;

new ComputeRegionPerInstanceConfigPreservedStateExternalIpList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.get"></a>

```java
public ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp">ComputeRegionPerInstanceConfigPreservedStateExternalIp</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp">ComputeRegionPerInstanceConfigPreservedStateExternalIp</a>>

---


### ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference <a name="ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_per_instance_config.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference;

new ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress">putIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resetAutoDelete">resetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpAddress` <a name="putIpAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress"></a>

```java
public void putIpAddress(ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.putIpAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a>

---

##### `resetAutoDelete` <a name="resetAutoDelete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resetAutoDelete"></a>

```java
public void resetAutoDelete()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddress">ipAddress</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDeleteInput">autoDeleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceNameInput">interfaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDelete">autoDelete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceName">interfaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp">ComputeRegionPerInstanceConfigPreservedStateExternalIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddress"></a>

```java
public ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference getIpAddress();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddressOutputReference</a>

---

##### `autoDeleteInput`<sup>Optional</sup> <a name="autoDeleteInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDeleteInput"></a>

```java
public java.lang.String getAutoDeleteInput();
```

- *Type:* java.lang.String

---

##### `interfaceNameInput`<sup>Optional</sup> <a name="interfaceNameInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceNameInput"></a>

```java
public java.lang.String getInterfaceNameInput();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.ipAddressInput"></a>

```java
public ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress getIpAddressInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateExternalIpIpAddress</a>

---

##### `autoDelete`<sup>Required</sup> <a name="autoDelete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.autoDelete"></a>

```java
public java.lang.String getAutoDelete();
```

- *Type:* java.lang.String

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.interfaceName"></a>

```java
public java.lang.String getInterfaceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp">ComputeRegionPerInstanceConfigPreservedStateExternalIp</a>

---


### ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference <a name="ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_per_instance_config.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference;

new ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resetAddress">resetAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.resetAddress"></a>

```java
public void resetAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference.property.internalValue"></a>

```java
public ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a>

---


### ComputeRegionPerInstanceConfigPreservedStateInternalIpList <a name="ComputeRegionPerInstanceConfigPreservedStateInternalIpList" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_per_instance_config.ComputeRegionPerInstanceConfigPreservedStateInternalIpList;

new ComputeRegionPerInstanceConfigPreservedStateInternalIpList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.get"></a>

```java
public ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp">ComputeRegionPerInstanceConfigPreservedStateInternalIp</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp">ComputeRegionPerInstanceConfigPreservedStateInternalIp</a>>

---


### ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference <a name="ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_per_instance_config.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference;

new ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress">putIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resetAutoDelete">resetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIpAddress` <a name="putIpAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress"></a>

```java
public void putIpAddress(ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.putIpAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a>

---

##### `resetAutoDelete` <a name="resetAutoDelete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resetAutoDelete"></a>

```java
public void resetAutoDelete()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddress">ipAddress</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDeleteInput">autoDeleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceNameInput">interfaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDelete">autoDelete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceName">interfaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp">ComputeRegionPerInstanceConfigPreservedStateInternalIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddress"></a>

```java
public ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference getIpAddress();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddressOutputReference</a>

---

##### `autoDeleteInput`<sup>Optional</sup> <a name="autoDeleteInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDeleteInput"></a>

```java
public java.lang.String getAutoDeleteInput();
```

- *Type:* java.lang.String

---

##### `interfaceNameInput`<sup>Optional</sup> <a name="interfaceNameInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceNameInput"></a>

```java
public java.lang.String getInterfaceNameInput();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.ipAddressInput"></a>

```java
public ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress getIpAddressInput();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress">ComputeRegionPerInstanceConfigPreservedStateInternalIpIpAddress</a>

---

##### `autoDelete`<sup>Required</sup> <a name="autoDelete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.autoDelete"></a>

```java
public java.lang.String getAutoDelete();
```

- *Type:* java.lang.String

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.interfaceName"></a>

```java
public java.lang.String getInterfaceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp">ComputeRegionPerInstanceConfigPreservedStateInternalIp</a>

---


### ComputeRegionPerInstanceConfigPreservedStateOutputReference <a name="ComputeRegionPerInstanceConfigPreservedStateOutputReference" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_per_instance_config.ComputeRegionPerInstanceConfigPreservedStateOutputReference;

new ComputeRegionPerInstanceConfigPreservedStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putDisk">putDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putExternalIp">putExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putInternalIp">putInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetDisk">resetDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetExternalIp">resetExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetInternalIp">resetInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDisk` <a name="putDisk" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putDisk"></a>

```java
public void putDisk(IResolvable OR java.util.List<ComputeRegionPerInstanceConfigPreservedStateDisk> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putDisk.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk">ComputeRegionPerInstanceConfigPreservedStateDisk</a>>

---

##### `putExternalIp` <a name="putExternalIp" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putExternalIp"></a>

```java
public void putExternalIp(IResolvable OR java.util.List<ComputeRegionPerInstanceConfigPreservedStateExternalIp> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putExternalIp.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp">ComputeRegionPerInstanceConfigPreservedStateExternalIp</a>>

---

##### `putInternalIp` <a name="putInternalIp" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putInternalIp"></a>

```java
public void putInternalIp(IResolvable OR java.util.List<ComputeRegionPerInstanceConfigPreservedStateInternalIp> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.putInternalIp.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp">ComputeRegionPerInstanceConfigPreservedStateInternalIp</a>>

---

##### `resetDisk` <a name="resetDisk" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetDisk"></a>

```java
public void resetDisk()
```

##### `resetExternalIp` <a name="resetExternalIp" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetExternalIp"></a>

```java
public void resetExternalIp()
```

##### `resetInternalIp` <a name="resetInternalIp" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetInternalIp"></a>

```java
public void resetInternalIp()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.disk">disk</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList">ComputeRegionPerInstanceConfigPreservedStateDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.externalIp">externalIp</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList">ComputeRegionPerInstanceConfigPreservedStateExternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalIp">internalIp</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList">ComputeRegionPerInstanceConfigPreservedStateInternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.diskInput">diskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk">ComputeRegionPerInstanceConfigPreservedStateDisk</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.externalIpInput">externalIpInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp">ComputeRegionPerInstanceConfigPreservedStateExternalIp</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalIpInput">internalIpInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp">ComputeRegionPerInstanceConfigPreservedStateInternalIp</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.disk"></a>

```java
public ComputeRegionPerInstanceConfigPreservedStateDiskList getDisk();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDiskList">ComputeRegionPerInstanceConfigPreservedStateDiskList</a>

---

##### `externalIp`<sup>Required</sup> <a name="externalIp" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.externalIp"></a>

```java
public ComputeRegionPerInstanceConfigPreservedStateExternalIpList getExternalIp();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIpList">ComputeRegionPerInstanceConfigPreservedStateExternalIpList</a>

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalIp"></a>

```java
public ComputeRegionPerInstanceConfigPreservedStateInternalIpList getInternalIp();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIpList">ComputeRegionPerInstanceConfigPreservedStateInternalIpList</a>

---

##### `diskInput`<sup>Optional</sup> <a name="diskInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.diskInput"></a>

```java
public java.lang.Object getDiskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateDisk">ComputeRegionPerInstanceConfigPreservedStateDisk</a>>

---

##### `externalIpInput`<sup>Optional</sup> <a name="externalIpInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.externalIpInput"></a>

```java
public java.lang.Object getExternalIpInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateExternalIp">ComputeRegionPerInstanceConfigPreservedStateExternalIp</a>>

---

##### `internalIpInput`<sup>Optional</sup> <a name="internalIpInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalIpInput"></a>

```java
public java.lang.Object getInternalIpInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateInternalIp">ComputeRegionPerInstanceConfigPreservedStateInternalIp</a>>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedStateOutputReference.property.internalValue"></a>

```java
public ComputeRegionPerInstanceConfigPreservedState getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigPreservedState">ComputeRegionPerInstanceConfigPreservedState</a>

---


### ComputeRegionPerInstanceConfigTimeoutsOutputReference <a name="ComputeRegionPerInstanceConfigTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_region_per_instance_config.ComputeRegionPerInstanceConfigTimeoutsOutputReference;

new ComputeRegionPerInstanceConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts">ComputeRegionPerInstanceConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeRegionPerInstanceConfig.ComputeRegionPerInstanceConfigTimeouts">ComputeRegionPerInstanceConfigTimeouts</a>

---



