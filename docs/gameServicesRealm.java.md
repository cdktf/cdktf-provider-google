# `google_game_services_realm`

Refer to the Terraform Registory for docs: [`google_game_services_realm`](https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm).

# `gameServicesRealm` Submodule <a name="`gameServicesRealm` Submodule" id="@cdktf/provider-google.gameServicesRealm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameServicesRealm <a name="GameServicesRealm" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm google_game_services_realm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_realm.GameServicesRealm;

GameServicesRealm.Builder.create(Construct scope, java.lang.String id)
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
    .realmId(java.lang.String)
    .timeZone(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GameServicesRealmTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.realmId">realmId</a></code> | <code>java.lang.String</code> | GCP region of the Realm. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human readable description of the realm. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#id GameServicesRealm#id}. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this realm. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location of the Realm. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#project GameServicesRealm#project}. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts">GameServicesRealmTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `realmId`<sup>Required</sup> <a name="realmId" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.realmId"></a>

- *Type:* java.lang.String

GCP region of the Realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#realm_id GameServicesRealm#realm_id}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.timeZone"></a>

- *Type:* java.lang.String

Required.

Time zone where all realm-specific policies are evaluated. The value of
this field must be from the IANA time zone database:
https://www.iana.org/time-zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#time_zone GameServicesRealm#time_zone}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Human readable description of the realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#description GameServicesRealm#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#id GameServicesRealm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this realm. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#labels GameServicesRealm#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location of the Realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#location GameServicesRealm#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#project GameServicesRealm#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts">GameServicesRealmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#timeouts GameServicesRealm#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.putTimeouts"></a>

```java
public void putTimeouts(GameServicesRealmTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts">GameServicesRealmTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_realm.GameServicesRealm;

GameServicesRealm.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_realm.GameServicesRealm;

GameServicesRealm.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_realm.GameServicesRealm;

GameServicesRealm.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference">GameServicesRealmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.realmIdInput">realmIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts">GameServicesRealmTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.realmId">realmId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.timeouts"></a>

```java
public GameServicesRealmTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference">GameServicesRealmTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `realmIdInput`<sup>Optional</sup> <a name="realmIdInput" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.realmIdInput"></a>

```java
public java.lang.String getRealmIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts">GameServicesRealmTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `realmId`<sup>Required</sup> <a name="realmId" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.realmId"></a>

```java
public java.lang.String getRealmId();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealm.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GameServicesRealmConfig <a name="GameServicesRealmConfig" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_realm.GameServicesRealmConfig;

GameServicesRealmConfig.builder()
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
    .realmId(java.lang.String)
    .timeZone(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GameServicesRealmTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.realmId">realmId</a></code> | <code>java.lang.String</code> | GCP region of the Realm. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human readable description of the realm. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#id GameServicesRealm#id}. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this realm. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location of the Realm. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#project GameServicesRealm#project}. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts">GameServicesRealmTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `realmId`<sup>Required</sup> <a name="realmId" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.realmId"></a>

```java
public java.lang.String getRealmId();
```

- *Type:* java.lang.String

GCP region of the Realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#realm_id GameServicesRealm#realm_id}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Required.

Time zone where all realm-specific policies are evaluated. The value of
this field must be from the IANA time zone database:
https://www.iana.org/time-zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#time_zone GameServicesRealm#time_zone}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human readable description of the realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#description GameServicesRealm#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#id GameServicesRealm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this realm. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#labels GameServicesRealm#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location of the Realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#location GameServicesRealm#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#project GameServicesRealm#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmConfig.property.timeouts"></a>

```java
public GameServicesRealmTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts">GameServicesRealmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#timeouts GameServicesRealm#timeouts}

---

### GameServicesRealmTimeouts <a name="GameServicesRealmTimeouts" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_realm.GameServicesRealmTimeouts;

GameServicesRealmTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#create GameServicesRealm#create}. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#delete GameServicesRealm#delete}. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#update GameServicesRealm#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#create GameServicesRealm#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#delete GameServicesRealm#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/game_services_realm#update GameServicesRealm#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameServicesRealmTimeoutsOutputReference <a name="GameServicesRealmTimeoutsOutputReference" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_realm.GameServicesRealmTimeoutsOutputReference;

new GameServicesRealmTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts">GameServicesRealmTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesRealm.GameServicesRealmTimeouts">GameServicesRealmTimeouts</a>

---



