# `eventarcGoogleApiSource` Submodule <a name="`eventarcGoogleApiSource` Submodule" id="@cdktf/provider-google.eventarcGoogleApiSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventarcGoogleApiSource <a name="EventarcGoogleApiSource" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source google_eventarc_google_api_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.eventarc_google_api_source.EventarcGoogleApiSource;

EventarcGoogleApiSource.Builder.create(Construct scope, java.lang.String id)
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
    .destination(java.lang.String)
    .googleApiSourceId(java.lang.String)
    .location(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .cryptoKeyName(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .loggingConfig(EventarcGoogleApiSourceLoggingConfig)
//  .project(java.lang.String)
//  .timeouts(EventarcGoogleApiSourceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.destination">destination</a></code> | <code>java.lang.String</code> | Destination is the message bus that the GoogleApiSource is delivering to. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.googleApiSourceId">googleApiSourceId</a></code> | <code>java.lang.String</code> | The user-provided ID to be assigned to the GoogleApiSource. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource annotations. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.cryptoKeyName">cryptoKeyName</a></code> | <code>java.lang.String</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Resource display name. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#id EventarcGoogleApiSource#id}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#project EventarcGoogleApiSource#project}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.destination"></a>

- *Type:* java.lang.String

Destination is the message bus that the GoogleApiSource is delivering to.

It must be point to the full resource name of a MessageBus. Format:
"projects/{PROJECT_ID}/locations/{region}/messagesBuses/{MESSAGE_BUS_ID)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#destination EventarcGoogleApiSource#destination}

---

##### `googleApiSourceId`<sup>Required</sup> <a name="googleApiSourceId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.googleApiSourceId"></a>

- *Type:* java.lang.String

The user-provided ID to be assigned to the GoogleApiSource. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#google_api_source_id EventarcGoogleApiSource#google_api_source_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#location EventarcGoogleApiSource#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource annotations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#annotations EventarcGoogleApiSource#annotations}

---

##### `cryptoKeyName`<sup>Optional</sup> <a name="cryptoKeyName" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.cryptoKeyName"></a>

- *Type:* java.lang.String

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data.

It must match the pattern
'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#crypto_key_name EventarcGoogleApiSource#crypto_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Resource display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#display_name EventarcGoogleApiSource#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#id EventarcGoogleApiSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#labels EventarcGoogleApiSource#labels}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#logging_config EventarcGoogleApiSource#logging_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#project EventarcGoogleApiSource#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#timeouts EventarcGoogleApiSource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetCryptoKeyName">resetCryptoKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.putLoggingConfig"></a>

```java
public void putLoggingConfig(EventarcGoogleApiSourceLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.putTimeouts"></a>

```java
public void putTimeouts(EventarcGoogleApiSourceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetCryptoKeyName` <a name="resetCryptoKeyName" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetCryptoKeyName"></a>

```java
public void resetCryptoKeyName()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetLoggingConfig"></a>

```java
public void resetLoggingConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EventarcGoogleApiSource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.eventarc_google_api_source.EventarcGoogleApiSource;

EventarcGoogleApiSource.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.eventarc_google_api_source.EventarcGoogleApiSource;

EventarcGoogleApiSource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.eventarc_google_api_source.EventarcGoogleApiSource;

EventarcGoogleApiSource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.eventarc_google_api_source.EventarcGoogleApiSource;

EventarcGoogleApiSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EventarcGoogleApiSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a EventarcGoogleApiSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EventarcGoogleApiSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EventarcGoogleApiSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the EventarcGoogleApiSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference">EventarcGoogleApiSourceLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference">EventarcGoogleApiSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.cryptoKeyNameInput">cryptoKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.googleApiSourceIdInput">googleApiSourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.cryptoKeyName">cryptoKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.googleApiSourceId">googleApiSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.loggingConfig"></a>

```java
public EventarcGoogleApiSourceLoggingConfigOutputReference getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference">EventarcGoogleApiSourceLoggingConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.timeouts"></a>

```java
public EventarcGoogleApiSourceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference">EventarcGoogleApiSourceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `cryptoKeyNameInput`<sup>Optional</sup> <a name="cryptoKeyNameInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.cryptoKeyNameInput"></a>

```java
public java.lang.String getCryptoKeyNameInput();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `googleApiSourceIdInput`<sup>Optional</sup> <a name="googleApiSourceIdInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.googleApiSourceIdInput"></a>

```java
public java.lang.String getGoogleApiSourceIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.loggingConfigInput"></a>

```java
public EventarcGoogleApiSourceLoggingConfig getLoggingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `cryptoKeyName`<sup>Required</sup> <a name="cryptoKeyName" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.cryptoKeyName"></a>

```java
public java.lang.String getCryptoKeyName();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `googleApiSourceId`<sup>Required</sup> <a name="googleApiSourceId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.googleApiSourceId"></a>

```java
public java.lang.String getGoogleApiSourceId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EventarcGoogleApiSourceConfig <a name="EventarcGoogleApiSourceConfig" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.eventarc_google_api_source.EventarcGoogleApiSourceConfig;

EventarcGoogleApiSourceConfig.builder()
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
    .destination(java.lang.String)
    .googleApiSourceId(java.lang.String)
    .location(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .cryptoKeyName(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .loggingConfig(EventarcGoogleApiSourceLoggingConfig)
//  .project(java.lang.String)
//  .timeouts(EventarcGoogleApiSourceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.destination">destination</a></code> | <code>java.lang.String</code> | Destination is the message bus that the GoogleApiSource is delivering to. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.googleApiSourceId">googleApiSourceId</a></code> | <code>java.lang.String</code> | The user-provided ID to be assigned to the GoogleApiSource. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource annotations. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.cryptoKeyName">cryptoKeyName</a></code> | <code>java.lang.String</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Resource display name. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#id EventarcGoogleApiSource#id}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#project EventarcGoogleApiSource#project}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

Destination is the message bus that the GoogleApiSource is delivering to.

It must be point to the full resource name of a MessageBus. Format:
"projects/{PROJECT_ID}/locations/{region}/messagesBuses/{MESSAGE_BUS_ID)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#destination EventarcGoogleApiSource#destination}

---

##### `googleApiSourceId`<sup>Required</sup> <a name="googleApiSourceId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.googleApiSourceId"></a>

```java
public java.lang.String getGoogleApiSourceId();
```

- *Type:* java.lang.String

The user-provided ID to be assigned to the GoogleApiSource. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#google_api_source_id EventarcGoogleApiSource#google_api_source_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#location EventarcGoogleApiSource#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource annotations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#annotations EventarcGoogleApiSource#annotations}

---

##### `cryptoKeyName`<sup>Optional</sup> <a name="cryptoKeyName" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.cryptoKeyName"></a>

```java
public java.lang.String getCryptoKeyName();
```

- *Type:* java.lang.String

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data.

It must match the pattern
'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#crypto_key_name EventarcGoogleApiSource#crypto_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Resource display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#display_name EventarcGoogleApiSource#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#id EventarcGoogleApiSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#labels EventarcGoogleApiSource#labels}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.loggingConfig"></a>

```java
public EventarcGoogleApiSourceLoggingConfig getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#logging_config EventarcGoogleApiSource#logging_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#project EventarcGoogleApiSource#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.timeouts"></a>

```java
public EventarcGoogleApiSourceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#timeouts EventarcGoogleApiSource#timeouts}

---

### EventarcGoogleApiSourceLoggingConfig <a name="EventarcGoogleApiSourceLoggingConfig" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.eventarc_google_api_source.EventarcGoogleApiSourceLoggingConfig;

EventarcGoogleApiSourceLoggingConfig.builder()
//  .logSeverity(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig.property.logSeverity">logSeverity</a></code> | <code>java.lang.String</code> | The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry. |

---

##### `logSeverity`<sup>Optional</sup> <a name="logSeverity" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig.property.logSeverity"></a>

```java
public java.lang.String getLogSeverity();
```

- *Type:* java.lang.String

The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry.

Logs at severitiy ≥ this value will be sent, unless it is NONE. Possible values: ["NONE", "DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#log_severity EventarcGoogleApiSource#log_severity}

---

### EventarcGoogleApiSourceTimeouts <a name="EventarcGoogleApiSourceTimeouts" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.eventarc_google_api_source.EventarcGoogleApiSourceTimeouts;

EventarcGoogleApiSourceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#create EventarcGoogleApiSource#create}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#delete EventarcGoogleApiSource#delete}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#update EventarcGoogleApiSource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#create EventarcGoogleApiSource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#delete EventarcGoogleApiSource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/eventarc_google_api_source#update EventarcGoogleApiSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventarcGoogleApiSourceLoggingConfigOutputReference <a name="EventarcGoogleApiSourceLoggingConfigOutputReference" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.eventarc_google_api_source.EventarcGoogleApiSourceLoggingConfigOutputReference;

new EventarcGoogleApiSourceLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.resetLogSeverity">resetLogSeverity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogSeverity` <a name="resetLogSeverity" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.resetLogSeverity"></a>

```java
public void resetLogSeverity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.logSeverityInput">logSeverityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.logSeverity">logSeverity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logSeverityInput`<sup>Optional</sup> <a name="logSeverityInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.logSeverityInput"></a>

```java
public java.lang.String getLogSeverityInput();
```

- *Type:* java.lang.String

---

##### `logSeverity`<sup>Required</sup> <a name="logSeverity" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.logSeverity"></a>

```java
public java.lang.String getLogSeverity();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.internalValue"></a>

```java
public EventarcGoogleApiSourceLoggingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a>

---


### EventarcGoogleApiSourceTimeoutsOutputReference <a name="EventarcGoogleApiSourceTimeoutsOutputReference" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.eventarc_google_api_source.EventarcGoogleApiSourceTimeoutsOutputReference;

new EventarcGoogleApiSourceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a>

---



