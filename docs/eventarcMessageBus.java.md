# `eventarcMessageBus` Submodule <a name="`eventarcMessageBus` Submodule" id="@cdktf/provider-google.eventarcMessageBus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventarcMessageBus <a name="EventarcMessageBus" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus google_eventarc_message_bus}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.eventarc_message_bus.EventarcMessageBus;

EventarcMessageBus.Builder.create(Construct scope, java.lang.String id)
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
    .messageBusId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .cryptoKeyName(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .loggingConfig(EventarcMessageBusLoggingConfig)
//  .project(java.lang.String)
//  .timeouts(EventarcMessageBusTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.messageBusId">messageBusId</a></code> | <code>java.lang.String</code> | Required. The user-provided ID to be assigned to the MessageBus. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Resource annotations. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.cryptoKeyName">cryptoKeyName</a></code> | <code>java.lang.String</code> | Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. Resource display name. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#id EventarcMessageBus#id}. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Resource labels. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig">EventarcMessageBusLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#project EventarcMessageBus#project}. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts">EventarcMessageBusTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#location EventarcMessageBus#location}

---

##### `messageBusId`<sup>Required</sup> <a name="messageBusId" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.messageBusId"></a>

- *Type:* java.lang.String

Required. The user-provided ID to be assigned to the MessageBus. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#message_bus_id EventarcMessageBus#message_bus_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Resource annotations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#annotations EventarcMessageBus#annotations}

---

##### `cryptoKeyName`<sup>Optional</sup> <a name="cryptoKeyName" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.cryptoKeyName"></a>

- *Type:* java.lang.String

Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data.

It must match the pattern
'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#crypto_key_name EventarcMessageBus#crypto_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Optional. Resource display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#display_name EventarcMessageBus#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#id EventarcMessageBus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#labels EventarcMessageBus#labels}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig">EventarcMessageBusLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#logging_config EventarcMessageBus#logging_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#project EventarcMessageBus#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts">EventarcMessageBusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#timeouts EventarcMessageBus#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetCryptoKeyName">resetCryptoKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.putLoggingConfig"></a>

```java
public void putLoggingConfig(EventarcMessageBusLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig">EventarcMessageBusLoggingConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.putTimeouts"></a>

```java
public void putTimeouts(EventarcMessageBusTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts">EventarcMessageBusTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetCryptoKeyName` <a name="resetCryptoKeyName" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetCryptoKeyName"></a>

```java
public void resetCryptoKeyName()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetLoggingConfig"></a>

```java
public void resetLoggingConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EventarcMessageBus resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.eventarc_message_bus.EventarcMessageBus;

EventarcMessageBus.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.eventarc_message_bus.EventarcMessageBus;

EventarcMessageBus.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.eventarc_message_bus.EventarcMessageBus;

EventarcMessageBus.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.eventarc_message_bus.EventarcMessageBus;

EventarcMessageBus.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EventarcMessageBus.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a EventarcMessageBus resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EventarcMessageBus to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EventarcMessageBus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the EventarcMessageBus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference">EventarcMessageBusLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference">EventarcMessageBusTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.cryptoKeyNameInput">cryptoKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig">EventarcMessageBusLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.messageBusIdInput">messageBusIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts">EventarcMessageBusTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.cryptoKeyName">cryptoKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.messageBusId">messageBusId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.loggingConfig"></a>

```java
public EventarcMessageBusLoggingConfigOutputReference getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference">EventarcMessageBusLoggingConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.timeouts"></a>

```java
public EventarcMessageBusTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference">EventarcMessageBusTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `cryptoKeyNameInput`<sup>Optional</sup> <a name="cryptoKeyNameInput" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.cryptoKeyNameInput"></a>

```java
public java.lang.String getCryptoKeyNameInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.loggingConfigInput"></a>

```java
public EventarcMessageBusLoggingConfig getLoggingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig">EventarcMessageBusLoggingConfig</a>

---

##### `messageBusIdInput`<sup>Optional</sup> <a name="messageBusIdInput" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.messageBusIdInput"></a>

```java
public java.lang.String getMessageBusIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts">EventarcMessageBusTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `cryptoKeyName`<sup>Required</sup> <a name="cryptoKeyName" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.cryptoKeyName"></a>

```java
public java.lang.String getCryptoKeyName();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `messageBusId`<sup>Required</sup> <a name="messageBusId" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.messageBusId"></a>

```java
public java.lang.String getMessageBusId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBus.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EventarcMessageBusConfig <a name="EventarcMessageBusConfig" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.eventarc_message_bus.EventarcMessageBusConfig;

EventarcMessageBusConfig.builder()
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
    .messageBusId(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .cryptoKeyName(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .loggingConfig(EventarcMessageBusLoggingConfig)
//  .project(java.lang.String)
//  .timeouts(EventarcMessageBusTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.messageBusId">messageBusId</a></code> | <code>java.lang.String</code> | Required. The user-provided ID to be assigned to the MessageBus. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Resource annotations. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.cryptoKeyName">cryptoKeyName</a></code> | <code>java.lang.String</code> | Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. Resource display name. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#id EventarcMessageBus#id}. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Resource labels. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig">EventarcMessageBusLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#project EventarcMessageBus#project}. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts">EventarcMessageBusTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#location EventarcMessageBus#location}

---

##### `messageBusId`<sup>Required</sup> <a name="messageBusId" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.messageBusId"></a>

```java
public java.lang.String getMessageBusId();
```

- *Type:* java.lang.String

Required. The user-provided ID to be assigned to the MessageBus. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#message_bus_id EventarcMessageBus#message_bus_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Resource annotations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#annotations EventarcMessageBus#annotations}

---

##### `cryptoKeyName`<sup>Optional</sup> <a name="cryptoKeyName" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.cryptoKeyName"></a>

```java
public java.lang.String getCryptoKeyName();
```

- *Type:* java.lang.String

Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data.

It must match the pattern
'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#crypto_key_name EventarcMessageBus#crypto_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Optional. Resource display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#display_name EventarcMessageBus#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#id EventarcMessageBus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#labels EventarcMessageBus#labels}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.loggingConfig"></a>

```java
public EventarcMessageBusLoggingConfig getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig">EventarcMessageBusLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#logging_config EventarcMessageBus#logging_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#project EventarcMessageBus#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusConfig.property.timeouts"></a>

```java
public EventarcMessageBusTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts">EventarcMessageBusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#timeouts EventarcMessageBus#timeouts}

---

### EventarcMessageBusLoggingConfig <a name="EventarcMessageBusLoggingConfig" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.eventarc_message_bus.EventarcMessageBusLoggingConfig;

EventarcMessageBusLoggingConfig.builder()
//  .logSeverity(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig.property.logSeverity">logSeverity</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `logSeverity`<sup>Optional</sup> <a name="logSeverity" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig.property.logSeverity"></a>

```java
public java.lang.String getLogSeverity();
```

- *Type:* java.lang.String

Optional.

The minimum severity of logs that will be sent to Stackdriver/Platform
Telemetry. Logs at severitiy ≥ this value will be sent, unless it is NONE. Possible values: ["NONE", "DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#log_severity EventarcMessageBus#log_severity}

---

### EventarcMessageBusTimeouts <a name="EventarcMessageBusTimeouts" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.eventarc_message_bus.EventarcMessageBusTimeouts;

EventarcMessageBusTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#create EventarcMessageBus#create}. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#delete EventarcMessageBus#delete}. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#update EventarcMessageBus#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#create EventarcMessageBus#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#delete EventarcMessageBus#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/eventarc_message_bus#update EventarcMessageBus#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventarcMessageBusLoggingConfigOutputReference <a name="EventarcMessageBusLoggingConfigOutputReference" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.eventarc_message_bus.EventarcMessageBusLoggingConfigOutputReference;

new EventarcMessageBusLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.resetLogSeverity">resetLogSeverity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogSeverity` <a name="resetLogSeverity" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.resetLogSeverity"></a>

```java
public void resetLogSeverity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.property.logSeverityInput">logSeverityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.property.logSeverity">logSeverity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig">EventarcMessageBusLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logSeverityInput`<sup>Optional</sup> <a name="logSeverityInput" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.property.logSeverityInput"></a>

```java
public java.lang.String getLogSeverityInput();
```

- *Type:* java.lang.String

---

##### `logSeverity`<sup>Required</sup> <a name="logSeverity" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.property.logSeverity"></a>

```java
public java.lang.String getLogSeverity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfigOutputReference.property.internalValue"></a>

```java
public EventarcMessageBusLoggingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusLoggingConfig">EventarcMessageBusLoggingConfig</a>

---


### EventarcMessageBusTimeoutsOutputReference <a name="EventarcMessageBusTimeoutsOutputReference" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.eventarc_message_bus.EventarcMessageBusTimeoutsOutputReference;

new EventarcMessageBusTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts">EventarcMessageBusTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.eventarcMessageBus.EventarcMessageBusTimeouts">EventarcMessageBusTimeouts</a>

---



