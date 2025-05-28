# `chronicleWatchlist` Submodule <a name="`chronicleWatchlist` Submodule" id="@cdktf/provider-google.chronicleWatchlist"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleWatchlist <a name="ChronicleWatchlist" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist google_chronicle_watchlist}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_watchlist.ChronicleWatchlist;

ChronicleWatchlist.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .entityPopulationMechanism(ChronicleWatchlistEntityPopulationMechanism)
    .instance(java.lang.String)
    .location(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .multiplyingFactor(java.lang.Number)
//  .project(java.lang.String)
//  .timeouts(ChronicleWatchlistTimeouts)
//  .watchlistId(java.lang.String)
//  .watchlistUserPreferences(ChronicleWatchlistWatchlistUserPreferences)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148). |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.entityPopulationMechanism">entityPopulationMechanism</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a></code> | entity_population_mechanism block. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. Description of the watchlist. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#id ChronicleWatchlist#id}. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.multiplyingFactor">multiplyingFactor</a></code> | <code>java.lang.Number</code> | Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#project ChronicleWatchlist#project}. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.watchlistId">watchlistId</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.watchlistUserPreferences">watchlistUserPreferences</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a></code> | watchlist_user_preferences block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#display_name ChronicleWatchlist#display_name}

---

##### `entityPopulationMechanism`<sup>Required</sup> <a name="entityPopulationMechanism" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.entityPopulationMechanism"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a>

entity_population_mechanism block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#entity_population_mechanism ChronicleWatchlist#entity_population_mechanism}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#instance ChronicleWatchlist#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#location ChronicleWatchlist#location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional. Description of the watchlist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#description ChronicleWatchlist#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#id ChronicleWatchlist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multiplyingFactor`<sup>Optional</sup> <a name="multiplyingFactor" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.multiplyingFactor"></a>

- *Type:* java.lang.Number

Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#multiplying_factor ChronicleWatchlist#multiplying_factor}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#project ChronicleWatchlist#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#timeouts ChronicleWatchlist#timeouts}

---

##### `watchlistId`<sup>Optional</sup> <a name="watchlistId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.watchlistId"></a>

- *Type:* java.lang.String

Optional.

The ID to use for the watchlist,
which will become the final component of the watchlist's resource name.
This value should be 4-63 characters, and valid characters
are /a-z-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#watchlist_id ChronicleWatchlist#watchlist_id}

---

##### `watchlistUserPreferences`<sup>Optional</sup> <a name="watchlistUserPreferences" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.Initializer.parameter.watchlistUserPreferences"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a>

watchlist_user_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#watchlist_user_preferences ChronicleWatchlist#watchlist_user_preferences}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putEntityPopulationMechanism">putEntityPopulationMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putWatchlistUserPreferences">putWatchlistUserPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetMultiplyingFactor">resetMultiplyingFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetWatchlistId">resetWatchlistId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetWatchlistUserPreferences">resetWatchlistUserPreferences</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntityPopulationMechanism` <a name="putEntityPopulationMechanism" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putEntityPopulationMechanism"></a>

```java
public void putEntityPopulationMechanism(ChronicleWatchlistEntityPopulationMechanism value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putEntityPopulationMechanism.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putTimeouts"></a>

```java
public void putTimeouts(ChronicleWatchlistTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a>

---

##### `putWatchlistUserPreferences` <a name="putWatchlistUserPreferences" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putWatchlistUserPreferences"></a>

```java
public void putWatchlistUserPreferences(ChronicleWatchlistWatchlistUserPreferences value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.putWatchlistUserPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetId"></a>

```java
public void resetId()
```

##### `resetMultiplyingFactor` <a name="resetMultiplyingFactor" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetMultiplyingFactor"></a>

```java
public void resetMultiplyingFactor()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWatchlistId` <a name="resetWatchlistId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetWatchlistId"></a>

```java
public void resetWatchlistId()
```

##### `resetWatchlistUserPreferences` <a name="resetWatchlistUserPreferences" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.resetWatchlistUserPreferences"></a>

```java
public void resetWatchlistUserPreferences()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ChronicleWatchlist resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_watchlist.ChronicleWatchlist;

ChronicleWatchlist.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_watchlist.ChronicleWatchlist;

ChronicleWatchlist.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_watchlist.ChronicleWatchlist;

ChronicleWatchlist.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_watchlist.ChronicleWatchlist;

ChronicleWatchlist.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChronicleWatchlist.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ChronicleWatchlist resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChronicleWatchlist to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChronicleWatchlist that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ChronicleWatchlist to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityCount">entityCount</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList">ChronicleWatchlistEntityCountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityPopulationMechanism">entityPopulationMechanism</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference">ChronicleWatchlistEntityPopulationMechanismOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference">ChronicleWatchlistTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistUserPreferences">watchlistUserPreferences</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference">ChronicleWatchlistWatchlistUserPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityPopulationMechanismInput">entityPopulationMechanismInput</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.multiplyingFactorInput">multiplyingFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistIdInput">watchlistIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistUserPreferencesInput">watchlistUserPreferencesInput</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.multiplyingFactor">multiplyingFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistId">watchlistId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `entityCount`<sup>Required</sup> <a name="entityCount" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityCount"></a>

```java
public ChronicleWatchlistEntityCountList getEntityCount();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList">ChronicleWatchlistEntityCountList</a>

---

##### `entityPopulationMechanism`<sup>Required</sup> <a name="entityPopulationMechanism" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityPopulationMechanism"></a>

```java
public ChronicleWatchlistEntityPopulationMechanismOutputReference getEntityPopulationMechanism();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference">ChronicleWatchlistEntityPopulationMechanismOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.timeouts"></a>

```java
public ChronicleWatchlistTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference">ChronicleWatchlistTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `watchlistUserPreferences`<sup>Required</sup> <a name="watchlistUserPreferences" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistUserPreferences"></a>

```java
public ChronicleWatchlistWatchlistUserPreferencesOutputReference getWatchlistUserPreferences();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference">ChronicleWatchlistWatchlistUserPreferencesOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `entityPopulationMechanismInput`<sup>Optional</sup> <a name="entityPopulationMechanismInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.entityPopulationMechanismInput"></a>

```java
public ChronicleWatchlistEntityPopulationMechanism getEntityPopulationMechanismInput();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `multiplyingFactorInput`<sup>Optional</sup> <a name="multiplyingFactorInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.multiplyingFactorInput"></a>

```java
public java.lang.Number getMultiplyingFactorInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a>

---

##### `watchlistIdInput`<sup>Optional</sup> <a name="watchlistIdInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistIdInput"></a>

```java
public java.lang.String getWatchlistIdInput();
```

- *Type:* java.lang.String

---

##### `watchlistUserPreferencesInput`<sup>Optional</sup> <a name="watchlistUserPreferencesInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistUserPreferencesInput"></a>

```java
public ChronicleWatchlistWatchlistUserPreferences getWatchlistUserPreferencesInput();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `multiplyingFactor`<sup>Required</sup> <a name="multiplyingFactor" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.multiplyingFactor"></a>

```java
public java.lang.Number getMultiplyingFactor();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `watchlistId`<sup>Required</sup> <a name="watchlistId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.watchlistId"></a>

```java
public java.lang.String getWatchlistId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlist.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleWatchlistConfig <a name="ChronicleWatchlistConfig" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_watchlist.ChronicleWatchlistConfig;

ChronicleWatchlistConfig.builder()
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
    .displayName(java.lang.String)
    .entityPopulationMechanism(ChronicleWatchlistEntityPopulationMechanism)
    .instance(java.lang.String)
    .location(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .multiplyingFactor(java.lang.Number)
//  .project(java.lang.String)
//  .timeouts(ChronicleWatchlistTimeouts)
//  .watchlistId(java.lang.String)
//  .watchlistUserPreferences(ChronicleWatchlistWatchlistUserPreferences)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148). |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.entityPopulationMechanism">entityPopulationMechanism</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a></code> | entity_population_mechanism block. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. Description of the watchlist. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#id ChronicleWatchlist#id}. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.multiplyingFactor">multiplyingFactor</a></code> | <code>java.lang.Number</code> | Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#project ChronicleWatchlist#project}. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.watchlistId">watchlistId</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.watchlistUserPreferences">watchlistUserPreferences</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a></code> | watchlist_user_preferences block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#display_name ChronicleWatchlist#display_name}

---

##### `entityPopulationMechanism`<sup>Required</sup> <a name="entityPopulationMechanism" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.entityPopulationMechanism"></a>

```java
public ChronicleWatchlistEntityPopulationMechanism getEntityPopulationMechanism();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a>

entity_population_mechanism block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#entity_population_mechanism ChronicleWatchlist#entity_population_mechanism}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#instance ChronicleWatchlist#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#location ChronicleWatchlist#location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. Description of the watchlist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#description ChronicleWatchlist#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#id ChronicleWatchlist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multiplyingFactor`<sup>Optional</sup> <a name="multiplyingFactor" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.multiplyingFactor"></a>

```java
public java.lang.Number getMultiplyingFactor();
```

- *Type:* java.lang.Number

Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#multiplying_factor ChronicleWatchlist#multiplying_factor}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#project ChronicleWatchlist#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.timeouts"></a>

```java
public ChronicleWatchlistTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#timeouts ChronicleWatchlist#timeouts}

---

##### `watchlistId`<sup>Optional</sup> <a name="watchlistId" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.watchlistId"></a>

```java
public java.lang.String getWatchlistId();
```

- *Type:* java.lang.String

Optional.

The ID to use for the watchlist,
which will become the final component of the watchlist's resource name.
This value should be 4-63 characters, and valid characters
are /a-z-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#watchlist_id ChronicleWatchlist#watchlist_id}

---

##### `watchlistUserPreferences`<sup>Optional</sup> <a name="watchlistUserPreferences" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistConfig.property.watchlistUserPreferences"></a>

```java
public ChronicleWatchlistWatchlistUserPreferences getWatchlistUserPreferences();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a>

watchlist_user_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#watchlist_user_preferences ChronicleWatchlist#watchlist_user_preferences}

---

### ChronicleWatchlistEntityCount <a name="ChronicleWatchlistEntityCount" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_watchlist.ChronicleWatchlistEntityCount;

ChronicleWatchlistEntityCount.builder()
    .build();
```


### ChronicleWatchlistEntityPopulationMechanism <a name="ChronicleWatchlistEntityPopulationMechanism" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_watchlist.ChronicleWatchlistEntityPopulationMechanism;

ChronicleWatchlistEntityPopulationMechanism.builder()
//  .manual(ChronicleWatchlistEntityPopulationMechanismManual)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism.property.manual">manual</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a></code> | manual block. |

---

##### `manual`<sup>Optional</sup> <a name="manual" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism.property.manual"></a>

```java
public ChronicleWatchlistEntityPopulationMechanismManual getManual();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a>

manual block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#manual ChronicleWatchlist#manual}

---

### ChronicleWatchlistEntityPopulationMechanismManual <a name="ChronicleWatchlistEntityPopulationMechanismManual" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_watchlist.ChronicleWatchlistEntityPopulationMechanismManual;

ChronicleWatchlistEntityPopulationMechanismManual.builder()
    .build();
```


### ChronicleWatchlistTimeouts <a name="ChronicleWatchlistTimeouts" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_watchlist.ChronicleWatchlistTimeouts;

ChronicleWatchlistTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#create ChronicleWatchlist#create}. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#delete ChronicleWatchlist#delete}. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#update ChronicleWatchlist#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#create ChronicleWatchlist#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#delete ChronicleWatchlist#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#update ChronicleWatchlist#update}.

---

### ChronicleWatchlistWatchlistUserPreferences <a name="ChronicleWatchlistWatchlistUserPreferences" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_watchlist.ChronicleWatchlistWatchlistUserPreferences;

ChronicleWatchlistWatchlistUserPreferences.builder()
//  .pinned(java.lang.Boolean)
//  .pinned(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences.property.pinned">pinned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. Whether the watchlist is pinned on the dashboard. |

---

##### `pinned`<sup>Optional</sup> <a name="pinned" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences.property.pinned"></a>

```java
public java.lang.Object getPinned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional. Whether the watchlist is pinned on the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/chronicle_watchlist#pinned ChronicleWatchlist#pinned}

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleWatchlistEntityCountList <a name="ChronicleWatchlistEntityCountList" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_watchlist.ChronicleWatchlistEntityCountList;

new ChronicleWatchlistEntityCountList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.get"></a>

```java
public ChronicleWatchlistEntityCountOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ChronicleWatchlistEntityCountOutputReference <a name="ChronicleWatchlistEntityCountOutputReference" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_watchlist.ChronicleWatchlistEntityCountOutputReference;

new ChronicleWatchlistEntityCountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.asset">asset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.user">user</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCount">ChronicleWatchlistEntityCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `asset`<sup>Required</sup> <a name="asset" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.asset"></a>

```java
public java.lang.Number getAsset();
```

- *Type:* java.lang.Number

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.user"></a>

```java
public java.lang.Number getUser();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCountOutputReference.property.internalValue"></a>

```java
public ChronicleWatchlistEntityCount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityCount">ChronicleWatchlistEntityCount</a>

---


### ChronicleWatchlistEntityPopulationMechanismManualOutputReference <a name="ChronicleWatchlistEntityPopulationMechanismManualOutputReference" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_watchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference;

new ChronicleWatchlistEntityPopulationMechanismManualOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.internalValue"></a>

```java
public ChronicleWatchlistEntityPopulationMechanismManual getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a>

---


### ChronicleWatchlistEntityPopulationMechanismOutputReference <a name="ChronicleWatchlistEntityPopulationMechanismOutputReference" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_watchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference;

new ChronicleWatchlistEntityPopulationMechanismOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.putManual">putManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resetManual">resetManual</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManual` <a name="putManual" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.putManual"></a>

```java
public void putManual(ChronicleWatchlistEntityPopulationMechanismManual value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.putManual.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a>

---

##### `resetManual` <a name="resetManual" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.resetManual"></a>

```java
public void resetManual()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.manual">manual</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference">ChronicleWatchlistEntityPopulationMechanismManualOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.manualInput">manualInput</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `manual`<sup>Required</sup> <a name="manual" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.manual"></a>

```java
public ChronicleWatchlistEntityPopulationMechanismManualOutputReference getManual();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManualOutputReference">ChronicleWatchlistEntityPopulationMechanismManualOutputReference</a>

---

##### `manualInput`<sup>Optional</sup> <a name="manualInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.manualInput"></a>

```java
public ChronicleWatchlistEntityPopulationMechanismManual getManualInput();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismManual">ChronicleWatchlistEntityPopulationMechanismManual</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanismOutputReference.property.internalValue"></a>

```java
public ChronicleWatchlistEntityPopulationMechanism getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistEntityPopulationMechanism">ChronicleWatchlistEntityPopulationMechanism</a>

---


### ChronicleWatchlistTimeoutsOutputReference <a name="ChronicleWatchlistTimeoutsOutputReference" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_watchlist.ChronicleWatchlistTimeoutsOutputReference;

new ChronicleWatchlistTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistTimeouts">ChronicleWatchlistTimeouts</a>

---


### ChronicleWatchlistWatchlistUserPreferencesOutputReference <a name="ChronicleWatchlistWatchlistUserPreferencesOutputReference" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_watchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference;

new ChronicleWatchlistWatchlistUserPreferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resetPinned">resetPinned</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPinned` <a name="resetPinned" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.resetPinned"></a>

```java
public void resetPinned()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinnedInput">pinnedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinned">pinned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pinnedInput`<sup>Optional</sup> <a name="pinnedInput" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinnedInput"></a>

```java
public java.lang.Object getPinnedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pinned`<sup>Required</sup> <a name="pinned" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinned"></a>

```java
public java.lang.Object getPinned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferencesOutputReference.property.internalValue"></a>

```java
public ChronicleWatchlistWatchlistUserPreferences getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleWatchlist.ChronicleWatchlistWatchlistUserPreferences">ChronicleWatchlistWatchlistUserPreferences</a>

---



