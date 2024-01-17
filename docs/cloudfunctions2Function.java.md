# `cloudfunctions2Function` Submodule <a name="`cloudfunctions2Function` Submodule" id="@cdktf/provider-google.cloudfunctions2Function"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloudfunctions2Function <a name="Cloudfunctions2Function" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function google_cloudfunctions2_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2Function;

Cloudfunctions2Function.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .buildConfig(Cloudfunctions2FunctionBuildConfig)
//  .description(java.lang.String)
//  .eventTrigger(Cloudfunctions2FunctionEventTrigger)
//  .id(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .serviceConfig(Cloudfunctions2FunctionServiceConfig)
//  .timeouts(Cloudfunctions2FunctionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of this cloud function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A user-defined name of the function. Function names must be unique globally and match pattern 'projects/* /locations/* /functions/*'. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.buildConfig">buildConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a></code> | build_config block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | User-provided description of a function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.eventTrigger">eventTrigger</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a></code> | event_trigger block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#id Cloudfunctions2Function#id}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs associated with this Cloud Function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#project Cloudfunctions2Function#project}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.serviceConfig">serviceConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a></code> | service_config block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts">Cloudfunctions2FunctionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of this cloud function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#location Cloudfunctions2Function#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A user-defined name of the function. Function names must be unique globally and match pattern 'projects/* /locations/* /functions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#name Cloudfunctions2Function#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `buildConfig`<sup>Optional</sup> <a name="buildConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.buildConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a>

build_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#build_config Cloudfunctions2Function#build_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.description"></a>

- *Type:* java.lang.String

User-provided description of a function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#description Cloudfunctions2Function#description}

---

##### `eventTrigger`<sup>Optional</sup> <a name="eventTrigger" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.eventTrigger"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a>

event_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#event_trigger Cloudfunctions2Function#event_trigger}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#id Cloudfunctions2Function#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.kmsKeyName"></a>

- *Type:* java.lang.String

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources.

It must match the pattern projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#kms_key_name Cloudfunctions2Function#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs associated with this Cloud Function.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#labels Cloudfunctions2Function#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#project Cloudfunctions2Function#project}.

---

##### `serviceConfig`<sup>Optional</sup> <a name="serviceConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.serviceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a>

service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#service_config Cloudfunctions2Function#service_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts">Cloudfunctions2FunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#timeouts Cloudfunctions2Function#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putBuildConfig">putBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putEventTrigger">putEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig">putServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetBuildConfig">resetBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetEventTrigger">resetEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetServiceConfig">resetServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBuildConfig` <a name="putBuildConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putBuildConfig"></a>

```java
public void putBuildConfig(Cloudfunctions2FunctionBuildConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putBuildConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a>

---

##### `putEventTrigger` <a name="putEventTrigger" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putEventTrigger"></a>

```java
public void putEventTrigger(Cloudfunctions2FunctionEventTrigger value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putEventTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a>

---

##### `putServiceConfig` <a name="putServiceConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig"></a>

```java
public void putServiceConfig(Cloudfunctions2FunctionServiceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putServiceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putTimeouts"></a>

```java
public void putTimeouts(Cloudfunctions2FunctionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts">Cloudfunctions2FunctionTimeouts</a>

---

##### `resetBuildConfig` <a name="resetBuildConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetBuildConfig"></a>

```java
public void resetBuildConfig()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEventTrigger` <a name="resetEventTrigger" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetEventTrigger"></a>

```java
public void resetEventTrigger()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetProject"></a>

```java
public void resetProject()
```

##### `resetServiceConfig` <a name="resetServiceConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetServiceConfig"></a>

```java
public void resetServiceConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Cloudfunctions2Function resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2Function;

Cloudfunctions2Function.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2Function;

Cloudfunctions2Function.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2Function;

Cloudfunctions2Function.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2Function;

Cloudfunctions2Function.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Cloudfunctions2Function.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Cloudfunctions2Function resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Cloudfunctions2Function to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Cloudfunctions2Function that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Cloudfunctions2Function to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.buildConfig">buildConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference">Cloudfunctions2FunctionBuildConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.eventTrigger">eventTrigger</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference">Cloudfunctions2FunctionEventTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.serviceConfig">serviceConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference">Cloudfunctions2FunctionServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference">Cloudfunctions2FunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.buildConfigInput">buildConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.eventTriggerInput">eventTriggerInput</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.serviceConfigInput">serviceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts">Cloudfunctions2FunctionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `buildConfig`<sup>Required</sup> <a name="buildConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.buildConfig"></a>

```java
public Cloudfunctions2FunctionBuildConfigOutputReference getBuildConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference">Cloudfunctions2FunctionBuildConfigOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `eventTrigger`<sup>Required</sup> <a name="eventTrigger" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.eventTrigger"></a>

```java
public Cloudfunctions2FunctionEventTriggerOutputReference getEventTrigger();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference">Cloudfunctions2FunctionEventTriggerOutputReference</a>

---

##### `serviceConfig`<sup>Required</sup> <a name="serviceConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.serviceConfig"></a>

```java
public Cloudfunctions2FunctionServiceConfigOutputReference getServiceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference">Cloudfunctions2FunctionServiceConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.timeouts"></a>

```java
public Cloudfunctions2FunctionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference">Cloudfunctions2FunctionTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `buildConfigInput`<sup>Optional</sup> <a name="buildConfigInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.buildConfigInput"></a>

```java
public Cloudfunctions2FunctionBuildConfig getBuildConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `eventTriggerInput`<sup>Optional</sup> <a name="eventTriggerInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.eventTriggerInput"></a>

```java
public Cloudfunctions2FunctionEventTrigger getEventTriggerInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceConfigInput`<sup>Optional</sup> <a name="serviceConfigInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.serviceConfigInput"></a>

```java
public Cloudfunctions2FunctionServiceConfig getServiceConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts">Cloudfunctions2FunctionTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2Function.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Cloudfunctions2FunctionBuildConfig <a name="Cloudfunctions2FunctionBuildConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionBuildConfig;

Cloudfunctions2FunctionBuildConfig.builder()
//  .dockerRepository(java.lang.String)
//  .entryPoint(java.lang.String)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .runtime(java.lang.String)
//  .source(Cloudfunctions2FunctionBuildConfigSource)
//  .workerPool(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.dockerRepository">dockerRepository</a></code> | <code>java.lang.String</code> | User managed repository created in Artifact Registry optionally with a customer managed encryption key. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.entryPoint">entryPoint</a></code> | <code>java.lang.String</code> | The name of the function (as defined in source code) that will be executed. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-provided build-time environment variables for the function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.runtime">runtime</a></code> | <code>java.lang.String</code> | The runtime in which to run the function. Required when deploying a new function, optional when updating an existing function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource">Cloudfunctions2FunctionBuildConfigSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.workerPool">workerPool</a></code> | <code>java.lang.String</code> | Name of the Cloud Build Custom Worker Pool that should be used to build the function. |

---

##### `dockerRepository`<sup>Optional</sup> <a name="dockerRepository" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.dockerRepository"></a>

```java
public java.lang.String getDockerRepository();
```

- *Type:* java.lang.String

User managed repository created in Artifact Registry optionally with a customer managed encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#docker_repository Cloudfunctions2Function#docker_repository}

---

##### `entryPoint`<sup>Optional</sup> <a name="entryPoint" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.entryPoint"></a>

```java
public java.lang.String getEntryPoint();
```

- *Type:* java.lang.String

The name of the function (as defined in source code) that will be executed.

Defaults to the resource name suffix, if not specified. For backward
compatibility, if function with given name is not found, then the system
will try to use function named "function". For Node.js this is name of a
function exported by the module specified in source_location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#entry_point Cloudfunctions2Function#entry_point}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-provided build-time environment variables for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#environment_variables Cloudfunctions2Function#environment_variables}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

The runtime in which to run the function. Required when deploying a new function, optional when updating an existing function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#runtime Cloudfunctions2Function#runtime}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.source"></a>

```java
public Cloudfunctions2FunctionBuildConfigSource getSource();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource">Cloudfunctions2FunctionBuildConfigSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#source Cloudfunctions2Function#source}

---

##### `workerPool`<sup>Optional</sup> <a name="workerPool" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig.property.workerPool"></a>

```java
public java.lang.String getWorkerPool();
```

- *Type:* java.lang.String

Name of the Cloud Build Custom Worker Pool that should be used to build the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#worker_pool Cloudfunctions2Function#worker_pool}

---

### Cloudfunctions2FunctionBuildConfigSource <a name="Cloudfunctions2FunctionBuildConfigSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionBuildConfigSource;

Cloudfunctions2FunctionBuildConfigSource.builder()
//  .repoSource(Cloudfunctions2FunctionBuildConfigSourceRepoSource)
//  .storageSource(Cloudfunctions2FunctionBuildConfigSourceStorageSource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource.property.repoSource">repoSource</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource">Cloudfunctions2FunctionBuildConfigSourceRepoSource</a></code> | repo_source block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource.property.storageSource">storageSource</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource">Cloudfunctions2FunctionBuildConfigSourceStorageSource</a></code> | storage_source block. |

---

##### `repoSource`<sup>Optional</sup> <a name="repoSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource.property.repoSource"></a>

```java
public Cloudfunctions2FunctionBuildConfigSourceRepoSource getRepoSource();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource">Cloudfunctions2FunctionBuildConfigSourceRepoSource</a>

repo_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#repo_source Cloudfunctions2Function#repo_source}

---

##### `storageSource`<sup>Optional</sup> <a name="storageSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource.property.storageSource"></a>

```java
public Cloudfunctions2FunctionBuildConfigSourceStorageSource getStorageSource();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource">Cloudfunctions2FunctionBuildConfigSourceStorageSource</a>

storage_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#storage_source Cloudfunctions2Function#storage_source}

---

### Cloudfunctions2FunctionBuildConfigSourceRepoSource <a name="Cloudfunctions2FunctionBuildConfigSourceRepoSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionBuildConfigSourceRepoSource;

Cloudfunctions2FunctionBuildConfigSourceRepoSource.builder()
//  .branchName(java.lang.String)
//  .commitSha(java.lang.String)
//  .dir(java.lang.String)
//  .invertRegex(java.lang.Boolean)
//  .invertRegex(IResolvable)
//  .projectId(java.lang.String)
//  .repoName(java.lang.String)
//  .tagName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.branchName">branchName</a></code> | <code>java.lang.String</code> | Regex matching branches to build. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.commitSha">commitSha</a></code> | <code>java.lang.String</code> | Regex matching tags to build. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.dir">dir</a></code> | <code>java.lang.String</code> | Directory, relative to the source root, in which to run the build. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.invertRegex">invertRegex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Only trigger a build if the revision regex does NOT match the revision regex. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.projectId">projectId</a></code> | <code>java.lang.String</code> | ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.repoName">repoName</a></code> | <code>java.lang.String</code> | Name of the Cloud Source Repository. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.tagName">tagName</a></code> | <code>java.lang.String</code> | Regex matching tags to build. |

---

##### `branchName`<sup>Optional</sup> <a name="branchName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

Regex matching branches to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#branch_name Cloudfunctions2Function#branch_name}

---

##### `commitSha`<sup>Optional</sup> <a name="commitSha" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.commitSha"></a>

```java
public java.lang.String getCommitSha();
```

- *Type:* java.lang.String

Regex matching tags to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#commit_sha Cloudfunctions2Function#commit_sha}

---

##### `dir`<sup>Optional</sup> <a name="dir" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.dir"></a>

```java
public java.lang.String getDir();
```

- *Type:* java.lang.String

Directory, relative to the source root, in which to run the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#dir Cloudfunctions2Function#dir}

---

##### `invertRegex`<sup>Optional</sup> <a name="invertRegex" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.invertRegex"></a>

```java
public java.lang.Object getInvertRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Only trigger a build if the revision regex does NOT match the revision regex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#invert_regex Cloudfunctions2Function#invert_regex}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#project_id Cloudfunctions2Function#project_id}

---

##### `repoName`<sup>Optional</sup> <a name="repoName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.repoName"></a>

```java
public java.lang.String getRepoName();
```

- *Type:* java.lang.String

Name of the Cloud Source Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#repo_name Cloudfunctions2Function#repo_name}

---

##### `tagName`<sup>Optional</sup> <a name="tagName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource.property.tagName"></a>

```java
public java.lang.String getTagName();
```

- *Type:* java.lang.String

Regex matching tags to build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#tag_name Cloudfunctions2Function#tag_name}

---

### Cloudfunctions2FunctionBuildConfigSourceStorageSource <a name="Cloudfunctions2FunctionBuildConfigSourceStorageSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionBuildConfigSourceStorageSource;

Cloudfunctions2FunctionBuildConfigSourceStorageSource.builder()
//  .bucket(java.lang.String)
//  .generation(java.lang.Number)
//  .object(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Google Cloud Storage bucket containing the source. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource.property.generation">generation</a></code> | <code>java.lang.Number</code> | Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource.property.object">object</a></code> | <code>java.lang.String</code> | Google Cloud Storage object containing the source. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Google Cloud Storage bucket containing the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#bucket Cloudfunctions2Function#bucket}

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#generation Cloudfunctions2Function#generation}

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

Google Cloud Storage object containing the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#object Cloudfunctions2Function#object}

---

### Cloudfunctions2FunctionConfig <a name="Cloudfunctions2FunctionConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionConfig;

Cloudfunctions2FunctionConfig.builder()
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
    .name(java.lang.String)
//  .buildConfig(Cloudfunctions2FunctionBuildConfig)
//  .description(java.lang.String)
//  .eventTrigger(Cloudfunctions2FunctionEventTrigger)
//  .id(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .serviceConfig(Cloudfunctions2FunctionServiceConfig)
//  .timeouts(Cloudfunctions2FunctionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of this cloud function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.name">name</a></code> | <code>java.lang.String</code> | A user-defined name of the function. Function names must be unique globally and match pattern 'projects/* /locations/* /functions/*'. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.buildConfig">buildConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a></code> | build_config block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.description">description</a></code> | <code>java.lang.String</code> | User-provided description of a function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.eventTrigger">eventTrigger</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a></code> | event_trigger block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#id Cloudfunctions2Function#id}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs associated with this Cloud Function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#project Cloudfunctions2Function#project}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.serviceConfig">serviceConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a></code> | service_config block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts">Cloudfunctions2FunctionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of this cloud function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#location Cloudfunctions2Function#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A user-defined name of the function. Function names must be unique globally and match pattern 'projects/* /locations/* /functions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#name Cloudfunctions2Function#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `buildConfig`<sup>Optional</sup> <a name="buildConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.buildConfig"></a>

```java
public Cloudfunctions2FunctionBuildConfig getBuildConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a>

build_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#build_config Cloudfunctions2Function#build_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

User-provided description of a function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#description Cloudfunctions2Function#description}

---

##### `eventTrigger`<sup>Optional</sup> <a name="eventTrigger" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.eventTrigger"></a>

```java
public Cloudfunctions2FunctionEventTrigger getEventTrigger();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a>

event_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#event_trigger Cloudfunctions2Function#event_trigger}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#id Cloudfunctions2Function#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources.

It must match the pattern projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#kms_key_name Cloudfunctions2Function#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs associated with this Cloud Function.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#labels Cloudfunctions2Function#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#project Cloudfunctions2Function#project}.

---

##### `serviceConfig`<sup>Optional</sup> <a name="serviceConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.serviceConfig"></a>

```java
public Cloudfunctions2FunctionServiceConfig getServiceConfig();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a>

service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#service_config Cloudfunctions2Function#service_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionConfig.property.timeouts"></a>

```java
public Cloudfunctions2FunctionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts">Cloudfunctions2FunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#timeouts Cloudfunctions2Function#timeouts}

---

### Cloudfunctions2FunctionEventTrigger <a name="Cloudfunctions2FunctionEventTrigger" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionEventTrigger;

Cloudfunctions2FunctionEventTrigger.builder()
//  .eventFilters(IResolvable)
//  .eventFilters(java.util.List<Cloudfunctions2FunctionEventTriggerEventFilters>)
//  .eventType(java.lang.String)
//  .pubsubTopic(java.lang.String)
//  .retryPolicy(java.lang.String)
//  .serviceAccountEmail(java.lang.String)
//  .triggerRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.eventFilters">eventFilters</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters">Cloudfunctions2FunctionEventTriggerEventFilters</a>></code> | event_filters block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.eventType">eventType</a></code> | <code>java.lang.String</code> | Required. The type of event to observe. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | The name of a Pub/Sub topic in the same project that will be used as the transport topic for the event delivery. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.retryPolicy">retryPolicy</a></code> | <code>java.lang.String</code> | Describes the retry policy in case of function's execution failure. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.triggerRegion">triggerRegion</a></code> | <code>java.lang.String</code> | The region that the trigger will be in. |

---

##### `eventFilters`<sup>Optional</sup> <a name="eventFilters" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.eventFilters"></a>

```java
public java.lang.Object getEventFilters();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters">Cloudfunctions2FunctionEventTriggerEventFilters</a>>

event_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#event_filters Cloudfunctions2Function#event_filters}

---

##### `eventType`<sup>Optional</sup> <a name="eventType" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

Required. The type of event to observe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#event_type Cloudfunctions2Function#event_type}

---

##### `pubsubTopic`<sup>Optional</sup> <a name="pubsubTopic" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

The name of a Pub/Sub topic in the same project that will be used as the transport topic for the event delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#pubsub_topic Cloudfunctions2Function#pubsub_topic}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.retryPolicy"></a>

```java
public java.lang.String getRetryPolicy();
```

- *Type:* java.lang.String

Describes the retry policy in case of function's execution failure.

Retried execution is charged as any other execution. Possible values: ["RETRY_POLICY_UNSPECIFIED", "RETRY_POLICY_DO_NOT_RETRY", "RETRY_POLICY_RETRY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#retry_policy Cloudfunctions2Function#retry_policy}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

Optional.

The email of the trigger's service account. The service account
must have permission to invoke Cloud Run services. If empty, defaults to the
Compute Engine default service account: {project_number}-compute@developer.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#service_account_email Cloudfunctions2Function#service_account_email}

---

##### `triggerRegion`<sup>Optional</sup> <a name="triggerRegion" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger.property.triggerRegion"></a>

```java
public java.lang.String getTriggerRegion();
```

- *Type:* java.lang.String

The region that the trigger will be in.

The trigger will only receive
events originating in this region. It can be the same
region as the function, a different region or multi-region, or the global
region. If not provided, defaults to the same region as the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#trigger_region Cloudfunctions2Function#trigger_region}

---

### Cloudfunctions2FunctionEventTriggerEventFilters <a name="Cloudfunctions2FunctionEventTriggerEventFilters" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionEventTriggerEventFilters;

Cloudfunctions2FunctionEventTriggerEventFilters.builder()
    .attribute(java.lang.String)
    .value(java.lang.String)
//  .operator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters.property.attribute">attribute</a></code> | <code>java.lang.String</code> | 'Required. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters.property.value">value</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters.property.operator">operator</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

'Required.

The name of a CloudEvents attribute.
Currently, only a subset of attributes are supported for filtering. Use the 'gcloud eventarc providers describe' command to learn more about events and their attributes.
Do not filter for the 'type' attribute here, as this is already achieved by the resource's 'event_type' attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#attribute Cloudfunctions2Function#attribute}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Required.

The value for the attribute.
If the operator field is set as 'match-path-pattern', this value can be a path pattern instead of an exact value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#value Cloudfunctions2Function#value}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Optional.

The operator used for matching the events with the value of
the filter. If not specified, only events that have an exact key-value
pair specified in the filter are matched.
The only allowed value is 'match-path-pattern'.
[See documentation on path patterns here](https://cloud.google.com/eventarc/docs/path-patterns)'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#operator Cloudfunctions2Function#operator}

---

### Cloudfunctions2FunctionServiceConfig <a name="Cloudfunctions2FunctionServiceConfig" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionServiceConfig;

Cloudfunctions2FunctionServiceConfig.builder()
//  .allTrafficOnLatestRevision(java.lang.Boolean)
//  .allTrafficOnLatestRevision(IResolvable)
//  .availableCpu(java.lang.String)
//  .availableMemory(java.lang.String)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .ingressSettings(java.lang.String)
//  .maxInstanceCount(java.lang.Number)
//  .maxInstanceRequestConcurrency(java.lang.Number)
//  .minInstanceCount(java.lang.Number)
//  .secretEnvironmentVariables(IResolvable)
//  .secretEnvironmentVariables(java.util.List<Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables>)
//  .secretVolumes(IResolvable)
//  .secretVolumes(java.util.List<Cloudfunctions2FunctionServiceConfigSecretVolumes>)
//  .service(java.lang.String)
//  .serviceAccountEmail(java.lang.String)
//  .timeoutSeconds(java.lang.Number)
//  .vpcConnector(java.lang.String)
//  .vpcConnectorEgressSettings(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.allTrafficOnLatestRevision">allTrafficOnLatestRevision</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether 100% of traffic is routed to the latest revision. Defaults to true. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.availableCpu">availableCpu</a></code> | <code>java.lang.String</code> | The number of CPUs used in a single container instance. Default value is calculated from available memory. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.availableMemory">availableMemory</a></code> | <code>java.lang.String</code> | The amount of memory available for a function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Environment variables that shall be available during function execution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.ingressSettings">ingressSettings</a></code> | <code>java.lang.String</code> | Available ingress settings. Defaults to "ALLOW_ALL" if unspecified. Default value: "ALLOW_ALL" Possible values: ["ALLOW_ALL", "ALLOW_INTERNAL_ONLY", "ALLOW_INTERNAL_AND_GCLB"]. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.maxInstanceCount">maxInstanceCount</a></code> | <code>java.lang.Number</code> | The limit on the maximum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.maxInstanceRequestConcurrency">maxInstanceRequestConcurrency</a></code> | <code>java.lang.Number</code> | Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.minInstanceCount">minInstanceCount</a></code> | <code>java.lang.Number</code> | The limit on the minimum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.secretEnvironmentVariables">secretEnvironmentVariables</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>></code> | secret_environment_variables block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.secretVolumes">secretVolumes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes">Cloudfunctions2FunctionServiceConfigSecretVolumes</a>></code> | secret_volumes block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.service">service</a></code> | <code>java.lang.String</code> | Name of the service associated with a Function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | The email of the service account for this function. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | The function execution timeout. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.vpcConnector">vpcConnector</a></code> | <code>java.lang.String</code> | The Serverless VPC Access connector that this cloud function can connect to. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.vpcConnectorEgressSettings">vpcConnectorEgressSettings</a></code> | <code>java.lang.String</code> | Available egress settings. Possible values: ["VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED", "PRIVATE_RANGES_ONLY", "ALL_TRAFFIC"]. |

---

##### `allTrafficOnLatestRevision`<sup>Optional</sup> <a name="allTrafficOnLatestRevision" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.allTrafficOnLatestRevision"></a>

```java
public java.lang.Object getAllTrafficOnLatestRevision();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether 100% of traffic is routed to the latest revision. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#all_traffic_on_latest_revision Cloudfunctions2Function#all_traffic_on_latest_revision}

---

##### `availableCpu`<sup>Optional</sup> <a name="availableCpu" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.availableCpu"></a>

```java
public java.lang.String getAvailableCpu();
```

- *Type:* java.lang.String

The number of CPUs used in a single container instance. Default value is calculated from available memory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#available_cpu Cloudfunctions2Function#available_cpu}

---

##### `availableMemory`<sup>Optional</sup> <a name="availableMemory" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.availableMemory"></a>

```java
public java.lang.String getAvailableMemory();
```

- *Type:* java.lang.String

The amount of memory available for a function.

Defaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is
supplied the value is interpreted as bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#available_memory Cloudfunctions2Function#available_memory}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Environment variables that shall be available during function execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#environment_variables Cloudfunctions2Function#environment_variables}

---

##### `ingressSettings`<sup>Optional</sup> <a name="ingressSettings" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.ingressSettings"></a>

```java
public java.lang.String getIngressSettings();
```

- *Type:* java.lang.String

Available ingress settings. Defaults to "ALLOW_ALL" if unspecified. Default value: "ALLOW_ALL" Possible values: ["ALLOW_ALL", "ALLOW_INTERNAL_ONLY", "ALLOW_INTERNAL_AND_GCLB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#ingress_settings Cloudfunctions2Function#ingress_settings}

---

##### `maxInstanceCount`<sup>Optional</sup> <a name="maxInstanceCount" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.maxInstanceCount"></a>

```java
public java.lang.Number getMaxInstanceCount();
```

- *Type:* java.lang.Number

The limit on the maximum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#max_instance_count Cloudfunctions2Function#max_instance_count}

---

##### `maxInstanceRequestConcurrency`<sup>Optional</sup> <a name="maxInstanceRequestConcurrency" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.maxInstanceRequestConcurrency"></a>

```java
public java.lang.Number getMaxInstanceRequestConcurrency();
```

- *Type:* java.lang.Number

Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#max_instance_request_concurrency Cloudfunctions2Function#max_instance_request_concurrency}

---

##### `minInstanceCount`<sup>Optional</sup> <a name="minInstanceCount" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.minInstanceCount"></a>

```java
public java.lang.Number getMinInstanceCount();
```

- *Type:* java.lang.Number

The limit on the minimum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#min_instance_count Cloudfunctions2Function#min_instance_count}

---

##### `secretEnvironmentVariables`<sup>Optional</sup> <a name="secretEnvironmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.secretEnvironmentVariables"></a>

```java
public java.lang.Object getSecretEnvironmentVariables();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>>

secret_environment_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#secret_environment_variables Cloudfunctions2Function#secret_environment_variables}

---

##### `secretVolumes`<sup>Optional</sup> <a name="secretVolumes" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.secretVolumes"></a>

```java
public java.lang.Object getSecretVolumes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes">Cloudfunctions2FunctionServiceConfigSecretVolumes</a>>

secret_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#secret_volumes Cloudfunctions2Function#secret_volumes}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Name of the service associated with a Function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#service Cloudfunctions2Function#service}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

The email of the service account for this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#service_account_email Cloudfunctions2Function#service_account_email}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

The function execution timeout.

Execution is considered failed and
can be terminated if the function is not completed at the end of the
timeout period. Defaults to 60 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#timeout_seconds Cloudfunctions2Function#timeout_seconds}

---

##### `vpcConnector`<sup>Optional</sup> <a name="vpcConnector" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.vpcConnector"></a>

```java
public java.lang.String getVpcConnector();
```

- *Type:* java.lang.String

The Serverless VPC Access connector that this cloud function can connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#vpc_connector Cloudfunctions2Function#vpc_connector}

---

##### `vpcConnectorEgressSettings`<sup>Optional</sup> <a name="vpcConnectorEgressSettings" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig.property.vpcConnectorEgressSettings"></a>

```java
public java.lang.String getVpcConnectorEgressSettings();
```

- *Type:* java.lang.String

Available egress settings. Possible values: ["VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED", "PRIVATE_RANGES_ONLY", "ALL_TRAFFIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#vpc_connector_egress_settings Cloudfunctions2Function#vpc_connector_egress_settings}

---

### Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables <a name="Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables;

Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.builder()
    .key(java.lang.String)
    .projectId(java.lang.String)
    .secret(java.lang.String)
    .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.key">key</a></code> | <code>java.lang.String</code> | Name of the environment variable. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Project identifier (preferrably project number but can also be the project ID) of the project that contains the secret. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.secret">secret</a></code> | <code>java.lang.String</code> | Name of the secret in secret manager (not the full resource name). |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.version">version</a></code> | <code>java.lang.String</code> | Version of the secret (version number or the string 'latest'). |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Name of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#key Cloudfunctions2Function#key}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Project identifier (preferrably project number but can also be the project ID) of the project that contains the secret.

If not set, it will be populated with the function's project assuming that the secret exists in the same project as of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#project_id Cloudfunctions2Function#project_id}

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

Name of the secret in secret manager (not the full resource name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#secret Cloudfunctions2Function#secret}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Version of the secret (version number or the string 'latest').

It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new instances start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#version Cloudfunctions2Function#version}

---

### Cloudfunctions2FunctionServiceConfigSecretVolumes <a name="Cloudfunctions2FunctionServiceConfigSecretVolumes" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionServiceConfigSecretVolumes;

Cloudfunctions2FunctionServiceConfigSecretVolumes.builder()
    .mountPath(java.lang.String)
    .projectId(java.lang.String)
    .secret(java.lang.String)
//  .versions(IResolvable)
//  .versions(java.util.List<Cloudfunctions2FunctionServiceConfigSecretVolumesVersions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | The path within the container to mount the secret volume. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Project identifier (preferrably project number but can also be the project ID) of the project that contains the secret. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.secret">secret</a></code> | <code>java.lang.String</code> | Name of the secret in secret manager (not the full resource name). |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.versions">versions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions">Cloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>></code> | versions block. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

The path within the container to mount the secret volume.

For example, setting the mountPath as /etc/secrets would mount the secret value files under the /etc/secrets directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount path: /etc/secrets

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#mount_path Cloudfunctions2Function#mount_path}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Project identifier (preferrably project number but can also be the project ID) of the project that contains the secret.

If not set, it will be populated with the function's project assuming that the secret exists in the same project as of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#project_id Cloudfunctions2Function#project_id}

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

Name of the secret in secret manager (not the full resource name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#secret Cloudfunctions2Function#secret}

---

##### `versions`<sup>Optional</sup> <a name="versions" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes.property.versions"></a>

```java
public java.lang.Object getVersions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions">Cloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>>

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#versions Cloudfunctions2Function#versions}

---

### Cloudfunctions2FunctionServiceConfigSecretVolumesVersions <a name="Cloudfunctions2FunctionServiceConfigSecretVolumesVersions" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions;

Cloudfunctions2FunctionServiceConfigSecretVolumesVersions.builder()
    .path(java.lang.String)
    .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions.property.path">path</a></code> | <code>java.lang.String</code> | Relative path of the file under the mount path where the secret value for this version will be fetched and made available. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions.property.version">version</a></code> | <code>java.lang.String</code> | Version of the secret (version number or the string 'latest'). |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Relative path of the file under the mount path where the secret value for this version will be fetched and made available.

For example, setting the mountPath as '/etc/secrets' and path as secret_foo would mount the secret value file at /etc/secrets/secret_foo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#path Cloudfunctions2Function#path}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Version of the secret (version number or the string 'latest').

It is preferable to use latest version with secret volumes as secret value changes are reflected immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#version Cloudfunctions2Function#version}

---

### Cloudfunctions2FunctionTimeouts <a name="Cloudfunctions2FunctionTimeouts" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionTimeouts;

Cloudfunctions2FunctionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#create Cloudfunctions2Function#create}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#delete Cloudfunctions2Function#delete}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#update Cloudfunctions2Function#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#create Cloudfunctions2Function#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#delete Cloudfunctions2Function#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/cloudfunctions2_function#update Cloudfunctions2Function#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Cloudfunctions2FunctionBuildConfigOutputReference <a name="Cloudfunctions2FunctionBuildConfigOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionBuildConfigOutputReference;

new Cloudfunctions2FunctionBuildConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetDockerRepository">resetDockerRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetEntryPoint">resetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetWorkerPool">resetWorkerPool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSource` <a name="putSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.putSource"></a>

```java
public void putSource(Cloudfunctions2FunctionBuildConfigSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource">Cloudfunctions2FunctionBuildConfigSource</a>

---

##### `resetDockerRepository` <a name="resetDockerRepository" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetDockerRepository"></a>

```java
public void resetDockerRepository()
```

##### `resetEntryPoint` <a name="resetEntryPoint" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetEntryPoint"></a>

```java
public void resetEntryPoint()
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetRuntime"></a>

```java
public void resetRuntime()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetSource"></a>

```java
public void resetSource()
```

##### `resetWorkerPool` <a name="resetWorkerPool" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.resetWorkerPool"></a>

```java
public void resetWorkerPool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.buildAttribute">buildAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference">Cloudfunctions2FunctionBuildConfigSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.dockerRepositoryInput">dockerRepositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.entryPointInput">entryPointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource">Cloudfunctions2FunctionBuildConfigSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.workerPoolInput">workerPoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.dockerRepository">dockerRepository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.entryPoint">entryPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.workerPool">workerPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buildAttribute`<sup>Required</sup> <a name="buildAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.buildAttribute"></a>

```java
public java.lang.String getBuildAttribute();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.source"></a>

```java
public Cloudfunctions2FunctionBuildConfigSourceOutputReference getSource();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference">Cloudfunctions2FunctionBuildConfigSourceOutputReference</a>

---

##### `dockerRepositoryInput`<sup>Optional</sup> <a name="dockerRepositoryInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.dockerRepositoryInput"></a>

```java
public java.lang.String getDockerRepositoryInput();
```

- *Type:* java.lang.String

---

##### `entryPointInput`<sup>Optional</sup> <a name="entryPointInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.entryPointInput"></a>

```java
public java.lang.String getEntryPointInput();
```

- *Type:* java.lang.String

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.sourceInput"></a>

```java
public Cloudfunctions2FunctionBuildConfigSource getSourceInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource">Cloudfunctions2FunctionBuildConfigSource</a>

---

##### `workerPoolInput`<sup>Optional</sup> <a name="workerPoolInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.workerPoolInput"></a>

```java
public java.lang.String getWorkerPoolInput();
```

- *Type:* java.lang.String

---

##### `dockerRepository`<sup>Required</sup> <a name="dockerRepository" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.dockerRepository"></a>

```java
public java.lang.String getDockerRepository();
```

- *Type:* java.lang.String

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.entryPoint"></a>

```java
public java.lang.String getEntryPoint();
```

- *Type:* java.lang.String

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `workerPool`<sup>Required</sup> <a name="workerPool" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.workerPool"></a>

```java
public java.lang.String getWorkerPool();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigOutputReference.property.internalValue"></a>

```java
public Cloudfunctions2FunctionBuildConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfig">Cloudfunctions2FunctionBuildConfig</a>

---


### Cloudfunctions2FunctionBuildConfigSourceOutputReference <a name="Cloudfunctions2FunctionBuildConfigSourceOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionBuildConfigSourceOutputReference;

new Cloudfunctions2FunctionBuildConfigSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putRepoSource">putRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putStorageSource">putStorageSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.resetRepoSource">resetRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.resetStorageSource">resetStorageSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRepoSource` <a name="putRepoSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putRepoSource"></a>

```java
public void putRepoSource(Cloudfunctions2FunctionBuildConfigSourceRepoSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putRepoSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource">Cloudfunctions2FunctionBuildConfigSourceRepoSource</a>

---

##### `putStorageSource` <a name="putStorageSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putStorageSource"></a>

```java
public void putStorageSource(Cloudfunctions2FunctionBuildConfigSourceStorageSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.putStorageSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource">Cloudfunctions2FunctionBuildConfigSourceStorageSource</a>

---

##### `resetRepoSource` <a name="resetRepoSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.resetRepoSource"></a>

```java
public void resetRepoSource()
```

##### `resetStorageSource` <a name="resetStorageSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.resetStorageSource"></a>

```java
public void resetStorageSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.repoSource">repoSource</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference">Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.storageSource">storageSource</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference">Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.repoSourceInput">repoSourceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource">Cloudfunctions2FunctionBuildConfigSourceRepoSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.storageSourceInput">storageSourceInput</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource">Cloudfunctions2FunctionBuildConfigSourceStorageSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource">Cloudfunctions2FunctionBuildConfigSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repoSource`<sup>Required</sup> <a name="repoSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.repoSource"></a>

```java
public Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference getRepoSource();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference">Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference</a>

---

##### `storageSource`<sup>Required</sup> <a name="storageSource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.storageSource"></a>

```java
public Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference getStorageSource();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference">Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference</a>

---

##### `repoSourceInput`<sup>Optional</sup> <a name="repoSourceInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.repoSourceInput"></a>

```java
public Cloudfunctions2FunctionBuildConfigSourceRepoSource getRepoSourceInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource">Cloudfunctions2FunctionBuildConfigSourceRepoSource</a>

---

##### `storageSourceInput`<sup>Optional</sup> <a name="storageSourceInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.storageSourceInput"></a>

```java
public Cloudfunctions2FunctionBuildConfigSourceStorageSource getStorageSourceInput();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource">Cloudfunctions2FunctionBuildConfigSourceStorageSource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceOutputReference.property.internalValue"></a>

```java
public Cloudfunctions2FunctionBuildConfigSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSource">Cloudfunctions2FunctionBuildConfigSource</a>

---


### Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference <a name="Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference;

new Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetBranchName">resetBranchName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetCommitSha">resetCommitSha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetDir">resetDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetInvertRegex">resetInvertRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetRepoName">resetRepoName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetTagName">resetTagName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranchName` <a name="resetBranchName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetBranchName"></a>

```java
public void resetBranchName()
```

##### `resetCommitSha` <a name="resetCommitSha" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetCommitSha"></a>

```java
public void resetCommitSha()
```

##### `resetDir` <a name="resetDir" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetDir"></a>

```java
public void resetDir()
```

##### `resetInvertRegex` <a name="resetInvertRegex" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetInvertRegex"></a>

```java
public void resetInvertRegex()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetRepoName` <a name="resetRepoName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetRepoName"></a>

```java
public void resetRepoName()
```

##### `resetTagName` <a name="resetTagName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resetTagName"></a>

```java
public void resetTagName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.branchNameInput">branchNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.commitShaInput">commitShaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.dirInput">dirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.invertRegexInput">invertRegexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.repoNameInput">repoNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.tagNameInput">tagNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.branchName">branchName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.commitSha">commitSha</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.dir">dir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.invertRegex">invertRegex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.repoName">repoName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.tagName">tagName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource">Cloudfunctions2FunctionBuildConfigSourceRepoSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchNameInput`<sup>Optional</sup> <a name="branchNameInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.branchNameInput"></a>

```java
public java.lang.String getBranchNameInput();
```

- *Type:* java.lang.String

---

##### `commitShaInput`<sup>Optional</sup> <a name="commitShaInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.commitShaInput"></a>

```java
public java.lang.String getCommitShaInput();
```

- *Type:* java.lang.String

---

##### `dirInput`<sup>Optional</sup> <a name="dirInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.dirInput"></a>

```java
public java.lang.String getDirInput();
```

- *Type:* java.lang.String

---

##### `invertRegexInput`<sup>Optional</sup> <a name="invertRegexInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.invertRegexInput"></a>

```java
public java.lang.Object getInvertRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `repoNameInput`<sup>Optional</sup> <a name="repoNameInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.repoNameInput"></a>

```java
public java.lang.String getRepoNameInput();
```

- *Type:* java.lang.String

---

##### `tagNameInput`<sup>Optional</sup> <a name="tagNameInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.tagNameInput"></a>

```java
public java.lang.String getTagNameInput();
```

- *Type:* java.lang.String

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

---

##### `commitSha`<sup>Required</sup> <a name="commitSha" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.commitSha"></a>

```java
public java.lang.String getCommitSha();
```

- *Type:* java.lang.String

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.dir"></a>

```java
public java.lang.String getDir();
```

- *Type:* java.lang.String

---

##### `invertRegex`<sup>Required</sup> <a name="invertRegex" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.invertRegex"></a>

```java
public java.lang.Object getInvertRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `repoName`<sup>Required</sup> <a name="repoName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.repoName"></a>

```java
public java.lang.String getRepoName();
```

- *Type:* java.lang.String

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.tagName"></a>

```java
public java.lang.String getTagName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.internalValue"></a>

```java
public Cloudfunctions2FunctionBuildConfigSourceRepoSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceRepoSource">Cloudfunctions2FunctionBuildConfigSourceRepoSource</a>

---


### Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference <a name="Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference;

new Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetGeneration">resetGeneration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetObject">resetObject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetGeneration` <a name="resetGeneration" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetGeneration"></a>

```java
public void resetGeneration()
```

##### `resetObject` <a name="resetObject" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resetObject"></a>

```java
public void resetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.generationInput">generationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.objectInput">objectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource">Cloudfunctions2FunctionBuildConfigSourceStorageSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `generationInput`<sup>Optional</sup> <a name="generationInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.generationInput"></a>

```java
public java.lang.Number getGenerationInput();
```

- *Type:* java.lang.Number

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.objectInput"></a>

```java
public java.lang.String getObjectInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.internalValue"></a>

```java
public Cloudfunctions2FunctionBuildConfigSourceStorageSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionBuildConfigSourceStorageSource">Cloudfunctions2FunctionBuildConfigSourceStorageSource</a>

---


### Cloudfunctions2FunctionEventTriggerEventFiltersList <a name="Cloudfunctions2FunctionEventTriggerEventFiltersList" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionEventTriggerEventFiltersList;

new Cloudfunctions2FunctionEventTriggerEventFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.get"></a>

```java
public Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters">Cloudfunctions2FunctionEventTriggerEventFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters">Cloudfunctions2FunctionEventTriggerEventFilters</a>>

---


### Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference <a name="Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference;

new Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resetOperator"></a>

```java
public void resetOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters">Cloudfunctions2FunctionEventTriggerEventFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters">Cloudfunctions2FunctionEventTriggerEventFilters</a>

---


### Cloudfunctions2FunctionEventTriggerOutputReference <a name="Cloudfunctions2FunctionEventTriggerOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionEventTriggerOutputReference;

new Cloudfunctions2FunctionEventTriggerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.putEventFilters">putEventFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetEventFilters">resetEventFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetEventType">resetEventType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetPubsubTopic">resetPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetTriggerRegion">resetTriggerRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEventFilters` <a name="putEventFilters" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.putEventFilters"></a>

```java
public void putEventFilters(IResolvable OR java.util.List<Cloudfunctions2FunctionEventTriggerEventFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.putEventFilters.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters">Cloudfunctions2FunctionEventTriggerEventFilters</a>>

---

##### `resetEventFilters` <a name="resetEventFilters" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetEventFilters"></a>

```java
public void resetEventFilters()
```

##### `resetEventType` <a name="resetEventType" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetEventType"></a>

```java
public void resetEventType()
```

##### `resetPubsubTopic` <a name="resetPubsubTopic" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetPubsubTopic"></a>

```java
public void resetPubsubTopic()
```

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetRetryPolicy"></a>

```java
public void resetRetryPolicy()
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetServiceAccountEmail"></a>

```java
public void resetServiceAccountEmail()
```

##### `resetTriggerRegion` <a name="resetTriggerRegion" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.resetTriggerRegion"></a>

```java
public void resetTriggerRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventFilters">eventFilters</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList">Cloudfunctions2FunctionEventTriggerEventFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.trigger">trigger</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventFiltersInput">eventFiltersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters">Cloudfunctions2FunctionEventTriggerEventFilters</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventTypeInput">eventTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.retryPolicyInput">retryPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.triggerRegionInput">triggerRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventType">eventType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.retryPolicy">retryPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.triggerRegion">triggerRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventFilters`<sup>Required</sup> <a name="eventFilters" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventFilters"></a>

```java
public Cloudfunctions2FunctionEventTriggerEventFiltersList getEventFilters();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFiltersList">Cloudfunctions2FunctionEventTriggerEventFiltersList</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.trigger"></a>

```java
public java.lang.String getTrigger();
```

- *Type:* java.lang.String

---

##### `eventFiltersInput`<sup>Optional</sup> <a name="eventFiltersInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventFiltersInput"></a>

```java
public java.lang.Object getEventFiltersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerEventFilters">Cloudfunctions2FunctionEventTriggerEventFilters</a>>

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventTypeInput"></a>

```java
public java.lang.String getEventTypeInput();
```

- *Type:* java.lang.String

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.pubsubTopicInput"></a>

```java
public java.lang.String getPubsubTopicInput();
```

- *Type:* java.lang.String

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.retryPolicyInput"></a>

```java
public java.lang.String getRetryPolicyInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `triggerRegionInput`<sup>Optional</sup> <a name="triggerRegionInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.triggerRegionInput"></a>

```java
public java.lang.String getTriggerRegionInput();
```

- *Type:* java.lang.String

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.retryPolicy"></a>

```java
public java.lang.String getRetryPolicy();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `triggerRegion`<sup>Required</sup> <a name="triggerRegion" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.triggerRegion"></a>

```java
public java.lang.String getTriggerRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTriggerOutputReference.property.internalValue"></a>

```java
public Cloudfunctions2FunctionEventTrigger getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionEventTrigger">Cloudfunctions2FunctionEventTrigger</a>

---


### Cloudfunctions2FunctionServiceConfigOutputReference <a name="Cloudfunctions2FunctionServiceConfigOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionServiceConfigOutputReference;

new Cloudfunctions2FunctionServiceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.putSecretEnvironmentVariables">putSecretEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.putSecretVolumes">putSecretVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetAllTrafficOnLatestRevision">resetAllTrafficOnLatestRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetAvailableCpu">resetAvailableCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetAvailableMemory">resetAvailableMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetIngressSettings">resetIngressSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetMaxInstanceCount">resetMaxInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetMaxInstanceRequestConcurrency">resetMaxInstanceRequestConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetMinInstanceCount">resetMinInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetSecretEnvironmentVariables">resetSecretEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetSecretVolumes">resetSecretVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetVpcConnector">resetVpcConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetVpcConnectorEgressSettings">resetVpcConnectorEgressSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretEnvironmentVariables` <a name="putSecretEnvironmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.putSecretEnvironmentVariables"></a>

```java
public void putSecretEnvironmentVariables(IResolvable OR java.util.List<Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.putSecretEnvironmentVariables.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>>

---

##### `putSecretVolumes` <a name="putSecretVolumes" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.putSecretVolumes"></a>

```java
public void putSecretVolumes(IResolvable OR java.util.List<Cloudfunctions2FunctionServiceConfigSecretVolumes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.putSecretVolumes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes">Cloudfunctions2FunctionServiceConfigSecretVolumes</a>>

---

##### `resetAllTrafficOnLatestRevision` <a name="resetAllTrafficOnLatestRevision" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetAllTrafficOnLatestRevision"></a>

```java
public void resetAllTrafficOnLatestRevision()
```

##### `resetAvailableCpu` <a name="resetAvailableCpu" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetAvailableCpu"></a>

```java
public void resetAvailableCpu()
```

##### `resetAvailableMemory` <a name="resetAvailableMemory" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetAvailableMemory"></a>

```java
public void resetAvailableMemory()
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetIngressSettings` <a name="resetIngressSettings" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetIngressSettings"></a>

```java
public void resetIngressSettings()
```

##### `resetMaxInstanceCount` <a name="resetMaxInstanceCount" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetMaxInstanceCount"></a>

```java
public void resetMaxInstanceCount()
```

##### `resetMaxInstanceRequestConcurrency` <a name="resetMaxInstanceRequestConcurrency" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetMaxInstanceRequestConcurrency"></a>

```java
public void resetMaxInstanceRequestConcurrency()
```

##### `resetMinInstanceCount` <a name="resetMinInstanceCount" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetMinInstanceCount"></a>

```java
public void resetMinInstanceCount()
```

##### `resetSecretEnvironmentVariables` <a name="resetSecretEnvironmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetSecretEnvironmentVariables"></a>

```java
public void resetSecretEnvironmentVariables()
```

##### `resetSecretVolumes` <a name="resetSecretVolumes" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetSecretVolumes"></a>

```java
public void resetSecretVolumes()
```

##### `resetService` <a name="resetService" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetService"></a>

```java
public void resetService()
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetServiceAccountEmail"></a>

```java
public void resetServiceAccountEmail()
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetTimeoutSeconds"></a>

```java
public void resetTimeoutSeconds()
```

##### `resetVpcConnector` <a name="resetVpcConnector" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetVpcConnector"></a>

```java
public void resetVpcConnector()
```

##### `resetVpcConnectorEgressSettings` <a name="resetVpcConnectorEgressSettings" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.resetVpcConnectorEgressSettings"></a>

```java
public void resetVpcConnectorEgressSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.gcfUri">gcfUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretEnvironmentVariables">secretEnvironmentVariables</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretVolumes">secretVolumes</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList">Cloudfunctions2FunctionServiceConfigSecretVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.allTrafficOnLatestRevisionInput">allTrafficOnLatestRevisionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableCpuInput">availableCpuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableMemoryInput">availableMemoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.ingressSettingsInput">ingressSettingsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceCountInput">maxInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceRequestConcurrencyInput">maxInstanceRequestConcurrencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.minInstanceCountInput">minInstanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretEnvironmentVariablesInput">secretEnvironmentVariablesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretVolumesInput">secretVolumesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes">Cloudfunctions2FunctionServiceConfigSecretVolumes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorEgressSettingsInput">vpcConnectorEgressSettingsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorInput">vpcConnectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.allTrafficOnLatestRevision">allTrafficOnLatestRevision</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableCpu">availableCpu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableMemory">availableMemory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.ingressSettings">ingressSettings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceCount">maxInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceRequestConcurrency">maxInstanceRequestConcurrency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.minInstanceCount">minInstanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnector">vpcConnector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorEgressSettings">vpcConnectorEgressSettings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gcfUri`<sup>Required</sup> <a name="gcfUri" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.gcfUri"></a>

```java
public java.lang.String getGcfUri();
```

- *Type:* java.lang.String

---

##### `secretEnvironmentVariables`<sup>Required</sup> <a name="secretEnvironmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretEnvironmentVariables"></a>

```java
public Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList getSecretEnvironmentVariables();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList</a>

---

##### `secretVolumes`<sup>Required</sup> <a name="secretVolumes" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretVolumes"></a>

```java
public Cloudfunctions2FunctionServiceConfigSecretVolumesList getSecretVolumes();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList">Cloudfunctions2FunctionServiceConfigSecretVolumesList</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `allTrafficOnLatestRevisionInput`<sup>Optional</sup> <a name="allTrafficOnLatestRevisionInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.allTrafficOnLatestRevisionInput"></a>

```java
public java.lang.Object getAllTrafficOnLatestRevisionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availableCpuInput`<sup>Optional</sup> <a name="availableCpuInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableCpuInput"></a>

```java
public java.lang.String getAvailableCpuInput();
```

- *Type:* java.lang.String

---

##### `availableMemoryInput`<sup>Optional</sup> <a name="availableMemoryInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableMemoryInput"></a>

```java
public java.lang.String getAvailableMemoryInput();
```

- *Type:* java.lang.String

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ingressSettingsInput`<sup>Optional</sup> <a name="ingressSettingsInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.ingressSettingsInput"></a>

```java
public java.lang.String getIngressSettingsInput();
```

- *Type:* java.lang.String

---

##### `maxInstanceCountInput`<sup>Optional</sup> <a name="maxInstanceCountInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceCountInput"></a>

```java
public java.lang.Number getMaxInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `maxInstanceRequestConcurrencyInput`<sup>Optional</sup> <a name="maxInstanceRequestConcurrencyInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceRequestConcurrencyInput"></a>

```java
public java.lang.Number getMaxInstanceRequestConcurrencyInput();
```

- *Type:* java.lang.Number

---

##### `minInstanceCountInput`<sup>Optional</sup> <a name="minInstanceCountInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.minInstanceCountInput"></a>

```java
public java.lang.Number getMinInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `secretEnvironmentVariablesInput`<sup>Optional</sup> <a name="secretEnvironmentVariablesInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretEnvironmentVariablesInput"></a>

```java
public java.lang.Object getSecretEnvironmentVariablesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>>

---

##### `secretVolumesInput`<sup>Optional</sup> <a name="secretVolumesInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.secretVolumesInput"></a>

```java
public java.lang.Object getSecretVolumesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes">Cloudfunctions2FunctionServiceConfigSecretVolumes</a>>

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.timeoutSecondsInput"></a>

```java
public java.lang.Number getTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `vpcConnectorEgressSettingsInput`<sup>Optional</sup> <a name="vpcConnectorEgressSettingsInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorEgressSettingsInput"></a>

```java
public java.lang.String getVpcConnectorEgressSettingsInput();
```

- *Type:* java.lang.String

---

##### `vpcConnectorInput`<sup>Optional</sup> <a name="vpcConnectorInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorInput"></a>

```java
public java.lang.String getVpcConnectorInput();
```

- *Type:* java.lang.String

---

##### `allTrafficOnLatestRevision`<sup>Required</sup> <a name="allTrafficOnLatestRevision" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.allTrafficOnLatestRevision"></a>

```java
public java.lang.Object getAllTrafficOnLatestRevision();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availableCpu`<sup>Required</sup> <a name="availableCpu" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableCpu"></a>

```java
public java.lang.String getAvailableCpu();
```

- *Type:* java.lang.String

---

##### `availableMemory`<sup>Required</sup> <a name="availableMemory" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.availableMemory"></a>

```java
public java.lang.String getAvailableMemory();
```

- *Type:* java.lang.String

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `ingressSettings`<sup>Required</sup> <a name="ingressSettings" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.ingressSettings"></a>

```java
public java.lang.String getIngressSettings();
```

- *Type:* java.lang.String

---

##### `maxInstanceCount`<sup>Required</sup> <a name="maxInstanceCount" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceCount"></a>

```java
public java.lang.Number getMaxInstanceCount();
```

- *Type:* java.lang.Number

---

##### `maxInstanceRequestConcurrency`<sup>Required</sup> <a name="maxInstanceRequestConcurrency" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceRequestConcurrency"></a>

```java
public java.lang.Number getMaxInstanceRequestConcurrency();
```

- *Type:* java.lang.Number

---

##### `minInstanceCount`<sup>Required</sup> <a name="minInstanceCount" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.minInstanceCount"></a>

```java
public java.lang.Number getMinInstanceCount();
```

- *Type:* java.lang.Number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `vpcConnector`<sup>Required</sup> <a name="vpcConnector" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnector"></a>

```java
public java.lang.String getVpcConnector();
```

- *Type:* java.lang.String

---

##### `vpcConnectorEgressSettings`<sup>Required</sup> <a name="vpcConnectorEgressSettings" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorEgressSettings"></a>

```java
public java.lang.String getVpcConnectorEgressSettings();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigOutputReference.property.internalValue"></a>

```java
public Cloudfunctions2FunctionServiceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfig">Cloudfunctions2FunctionServiceConfig</a>

---


### Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList <a name="Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList;

new Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.get"></a>

```java
public Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>>

---


### Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference <a name="Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference;

new Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.secretInput">secretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.secretInput"></a>

```java
public java.lang.String getSecretInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">Cloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>

---


### Cloudfunctions2FunctionServiceConfigSecretVolumesList <a name="Cloudfunctions2FunctionServiceConfigSecretVolumesList" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionServiceConfigSecretVolumesList;

new Cloudfunctions2FunctionServiceConfigSecretVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.get"></a>

```java
public Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes">Cloudfunctions2FunctionServiceConfigSecretVolumes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes">Cloudfunctions2FunctionServiceConfigSecretVolumes</a>>

---


### Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference <a name="Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference;

new Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.putVersions">putVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resetVersions">resetVersions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVersions` <a name="putVersions" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.putVersions"></a>

```java
public void putVersions(IResolvable OR java.util.List<Cloudfunctions2FunctionServiceConfigSecretVolumesVersions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.putVersions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions">Cloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>>

---

##### `resetVersions` <a name="resetVersions" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resetVersions"></a>

```java
public void resetVersions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.versions">versions</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList">Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.secretInput">secretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.versionsInput">versionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions">Cloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes">Cloudfunctions2FunctionServiceConfigSecretVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.versions"></a>

```java
public Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList getVersions();
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList">Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList</a>

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.mountPathInput"></a>

```java
public java.lang.String getMountPathInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.secretInput"></a>

```java
public java.lang.String getSecretInput();
```

- *Type:* java.lang.String

---

##### `versionsInput`<sup>Optional</sup> <a name="versionsInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.versionsInput"></a>

```java
public java.lang.Object getVersionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions">Cloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>>

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumes">Cloudfunctions2FunctionServiceConfigSecretVolumes</a>

---


### Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList <a name="Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList;

new Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.get"></a>

```java
public Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions">Cloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions">Cloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>>

---


### Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference <a name="Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference;

new Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions">Cloudfunctions2FunctionServiceConfigSecretVolumesVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionServiceConfigSecretVolumesVersions">Cloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>

---


### Cloudfunctions2FunctionTimeoutsOutputReference <a name="Cloudfunctions2FunctionTimeoutsOutputReference" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.cloudfunctions2_function.Cloudfunctions2FunctionTimeoutsOutputReference;

new Cloudfunctions2FunctionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts">Cloudfunctions2FunctionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.cloudfunctions2Function.Cloudfunctions2FunctionTimeouts">Cloudfunctions2FunctionTimeouts</a>

---



