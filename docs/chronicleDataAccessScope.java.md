# `chronicleDataAccessScope` Submodule <a name="`chronicleDataAccessScope` Submodule" id="@cdktf/provider-google.chronicleDataAccessScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleDataAccessScope <a name="ChronicleDataAccessScope" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope google_chronicle_data_access_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_data_access_scope.ChronicleDataAccessScope;

ChronicleDataAccessScope.Builder.create(Construct scope, java.lang.String id)
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
    .dataAccessScopeId(java.lang.String)
    .instance(java.lang.String)
    .location(java.lang.String)
//  .allowAll(java.lang.Boolean)
//  .allowAll(IResolvable)
//  .allowedDataAccessLabels(IResolvable)
//  .allowedDataAccessLabels(java.util.List<ChronicleDataAccessScopeAllowedDataAccessLabels>)
//  .deniedDataAccessLabels(IResolvable)
//  .deniedDataAccessLabels(java.util.List<ChronicleDataAccessScopeDeniedDataAccessLabels>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ChronicleDataAccessScopeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.dataAccessScopeId">dataAccessScopeId</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.allowAll">allowAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.allowedDataAccessLabels">allowedDataAccessLabels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels">ChronicleDataAccessScopeAllowedDataAccessLabels</a>></code> | allowed_data_access_labels block. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.deniedDataAccessLabels">deniedDataAccessLabels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels">ChronicleDataAccessScopeDeniedDataAccessLabels</a>></code> | denied_data_access_labels block. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. A description of the data access scope for a human reader. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#id ChronicleDataAccessScope#id}. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#project ChronicleDataAccessScope#project}. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts">ChronicleDataAccessScopeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataAccessScopeId`<sup>Required</sup> <a name="dataAccessScopeId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.dataAccessScopeId"></a>

- *Type:* java.lang.String

Required.

The user provided scope id which will become the last part of the name
of the scope resource.
Needs to be compliant with https://google.aip.dev/122

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#data_access_scope_id ChronicleDataAccessScope#data_access_scope_id}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#instance ChronicleDataAccessScope#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#location ChronicleDataAccessScope#location}

---

##### `allowAll`<sup>Optional</sup> <a name="allowAll" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.allowAll"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional.

Whether or not the scope allows all labels, allow_all and
allowed_data_access_labels are mutually exclusive and one of them must be
present. denied_data_access_labels can still be used along with allow_all.
When combined with denied_data_access_labels, access will be granted to all
data that doesn't have labels mentioned in denied_data_access_labels. E.g.:
A customer with scope with denied labels A and B and allow_all will be able
to see all data except data labeled with A and data labeled with B and data
with labels A and B.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#allow_all ChronicleDataAccessScope#allow_all}

---

##### `allowedDataAccessLabels`<sup>Optional</sup> <a name="allowedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.allowedDataAccessLabels"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels">ChronicleDataAccessScopeAllowedDataAccessLabels</a>>

allowed_data_access_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#allowed_data_access_labels ChronicleDataAccessScope#allowed_data_access_labels}

---

##### `deniedDataAccessLabels`<sup>Optional</sup> <a name="deniedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.deniedDataAccessLabels"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels">ChronicleDataAccessScopeDeniedDataAccessLabels</a>>

denied_data_access_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#denied_data_access_labels ChronicleDataAccessScope#denied_data_access_labels}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional. A description of the data access scope for a human reader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#description ChronicleDataAccessScope#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#id ChronicleDataAccessScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#project ChronicleDataAccessScope#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts">ChronicleDataAccessScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#timeouts ChronicleDataAccessScope#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putAllowedDataAccessLabels">putAllowedDataAccessLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putDeniedDataAccessLabels">putDeniedDataAccessLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetAllowAll">resetAllowAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetAllowedDataAccessLabels">resetAllowedDataAccessLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetDeniedDataAccessLabels">resetDeniedDataAccessLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllowedDataAccessLabels` <a name="putAllowedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putAllowedDataAccessLabels"></a>

```java
public void putAllowedDataAccessLabels(IResolvable OR java.util.List<ChronicleDataAccessScopeAllowedDataAccessLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putAllowedDataAccessLabels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels">ChronicleDataAccessScopeAllowedDataAccessLabels</a>>

---

##### `putDeniedDataAccessLabels` <a name="putDeniedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putDeniedDataAccessLabels"></a>

```java
public void putDeniedDataAccessLabels(IResolvable OR java.util.List<ChronicleDataAccessScopeDeniedDataAccessLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putDeniedDataAccessLabels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels">ChronicleDataAccessScopeDeniedDataAccessLabels</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putTimeouts"></a>

```java
public void putTimeouts(ChronicleDataAccessScopeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts">ChronicleDataAccessScopeTimeouts</a>

---

##### `resetAllowAll` <a name="resetAllowAll" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetAllowAll"></a>

```java
public void resetAllowAll()
```

##### `resetAllowedDataAccessLabels` <a name="resetAllowedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetAllowedDataAccessLabels"></a>

```java
public void resetAllowedDataAccessLabels()
```

##### `resetDeniedDataAccessLabels` <a name="resetDeniedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetDeniedDataAccessLabels"></a>

```java
public void resetDeniedDataAccessLabels()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ChronicleDataAccessScope resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_data_access_scope.ChronicleDataAccessScope;

ChronicleDataAccessScope.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_data_access_scope.ChronicleDataAccessScope;

ChronicleDataAccessScope.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_data_access_scope.ChronicleDataAccessScope;

ChronicleDataAccessScope.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_data_access_scope.ChronicleDataAccessScope;

ChronicleDataAccessScope.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChronicleDataAccessScope.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ChronicleDataAccessScope resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChronicleDataAccessScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChronicleDataAccessScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ChronicleDataAccessScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowedDataAccessLabels">allowedDataAccessLabels</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList">ChronicleDataAccessScopeAllowedDataAccessLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.author">author</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.deniedDataAccessLabels">deniedDataAccessLabels</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList">ChronicleDataAccessScopeDeniedDataAccessLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.lastEditor">lastEditor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference">ChronicleDataAccessScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowAllInput">allowAllInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowedDataAccessLabelsInput">allowedDataAccessLabelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels">ChronicleDataAccessScopeAllowedDataAccessLabels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.dataAccessScopeIdInput">dataAccessScopeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.deniedDataAccessLabelsInput">deniedDataAccessLabelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels">ChronicleDataAccessScopeDeniedDataAccessLabels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts">ChronicleDataAccessScopeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowAll">allowAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.dataAccessScopeId">dataAccessScopeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowedDataAccessLabels`<sup>Required</sup> <a name="allowedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowedDataAccessLabels"></a>

```java
public ChronicleDataAccessScopeAllowedDataAccessLabelsList getAllowedDataAccessLabels();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList">ChronicleDataAccessScopeAllowedDataAccessLabelsList</a>

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.author"></a>

```java
public java.lang.String getAuthor();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deniedDataAccessLabels`<sup>Required</sup> <a name="deniedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.deniedDataAccessLabels"></a>

```java
public ChronicleDataAccessScopeDeniedDataAccessLabelsList getDeniedDataAccessLabels();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList">ChronicleDataAccessScopeDeniedDataAccessLabelsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `lastEditor`<sup>Required</sup> <a name="lastEditor" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.lastEditor"></a>

```java
public java.lang.String getLastEditor();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.timeouts"></a>

```java
public ChronicleDataAccessScopeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference">ChronicleDataAccessScopeTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `allowAllInput`<sup>Optional</sup> <a name="allowAllInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowAllInput"></a>

```java
public java.lang.Object getAllowAllInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedDataAccessLabelsInput`<sup>Optional</sup> <a name="allowedDataAccessLabelsInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowedDataAccessLabelsInput"></a>

```java
public java.lang.Object getAllowedDataAccessLabelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels">ChronicleDataAccessScopeAllowedDataAccessLabels</a>>

---

##### `dataAccessScopeIdInput`<sup>Optional</sup> <a name="dataAccessScopeIdInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.dataAccessScopeIdInput"></a>

```java
public java.lang.String getDataAccessScopeIdInput();
```

- *Type:* java.lang.String

---

##### `deniedDataAccessLabelsInput`<sup>Optional</sup> <a name="deniedDataAccessLabelsInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.deniedDataAccessLabelsInput"></a>

```java
public java.lang.Object getDeniedDataAccessLabelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels">ChronicleDataAccessScopeDeniedDataAccessLabels</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts">ChronicleDataAccessScopeTimeouts</a>

---

##### `allowAll`<sup>Required</sup> <a name="allowAll" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowAll"></a>

```java
public java.lang.Object getAllowAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataAccessScopeId`<sup>Required</sup> <a name="dataAccessScopeId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.dataAccessScopeId"></a>

```java
public java.lang.String getDataAccessScopeId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleDataAccessScopeAllowedDataAccessLabels <a name="ChronicleDataAccessScopeAllowedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_data_access_scope.ChronicleDataAccessScopeAllowedDataAccessLabels;

ChronicleDataAccessScopeAllowedDataAccessLabels.builder()
//  .assetNamespace(java.lang.String)
//  .dataAccessLabel(java.lang.String)
//  .ingestionLabel(ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel)
//  .logType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.assetNamespace">assetNamespace</a></code> | <code>java.lang.String</code> | The asset namespace configured in the forwarder of the customer's events. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.dataAccessLabel">dataAccessLabel</a></code> | <code>java.lang.String</code> | The name of the data access label. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.ingestionLabel">ingestionLabel</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a></code> | ingestion_label block. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.logType">logType</a></code> | <code>java.lang.String</code> | The name of the log type. |

---

##### `assetNamespace`<sup>Optional</sup> <a name="assetNamespace" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.assetNamespace"></a>

```java
public java.lang.String getAssetNamespace();
```

- *Type:* java.lang.String

The asset namespace configured in the forwarder of the customer's events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#asset_namespace ChronicleDataAccessScope#asset_namespace}

---

##### `dataAccessLabel`<sup>Optional</sup> <a name="dataAccessLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.dataAccessLabel"></a>

```java
public java.lang.String getDataAccessLabel();
```

- *Type:* java.lang.String

The name of the data access label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#data_access_label ChronicleDataAccessScope#data_access_label}

---

##### `ingestionLabel`<sup>Optional</sup> <a name="ingestionLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.ingestionLabel"></a>

```java
public ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel getIngestionLabel();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a>

ingestion_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#ingestion_label ChronicleDataAccessScope#ingestion_label}

---

##### `logType`<sup>Optional</sup> <a name="logType" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

The name of the log type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#log_type ChronicleDataAccessScope#log_type}

---

### ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel <a name="ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_data_access_scope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel;

ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.builder()
    .ingestionLabelKey(java.lang.String)
//  .ingestionLabelValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelKey">ingestionLabelKey</a></code> | <code>java.lang.String</code> | Required. The key of the ingestion label. Always required. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelValue">ingestionLabelValue</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `ingestionLabelKey`<sup>Required</sup> <a name="ingestionLabelKey" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelKey"></a>

```java
public java.lang.String getIngestionLabelKey();
```

- *Type:* java.lang.String

Required. The key of the ingestion label. Always required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#ingestion_label_key ChronicleDataAccessScope#ingestion_label_key}

---

##### `ingestionLabelValue`<sup>Optional</sup> <a name="ingestionLabelValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelValue"></a>

```java
public java.lang.String getIngestionLabelValue();
```

- *Type:* java.lang.String

Optional.

The value of the ingestion label. Optional. An object
with no provided value and some key provided would match
against the given key and ANY value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#ingestion_label_value ChronicleDataAccessScope#ingestion_label_value}

---

### ChronicleDataAccessScopeConfig <a name="ChronicleDataAccessScopeConfig" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_data_access_scope.ChronicleDataAccessScopeConfig;

ChronicleDataAccessScopeConfig.builder()
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
    .dataAccessScopeId(java.lang.String)
    .instance(java.lang.String)
    .location(java.lang.String)
//  .allowAll(java.lang.Boolean)
//  .allowAll(IResolvable)
//  .allowedDataAccessLabels(IResolvable)
//  .allowedDataAccessLabels(java.util.List<ChronicleDataAccessScopeAllowedDataAccessLabels>)
//  .deniedDataAccessLabels(IResolvable)
//  .deniedDataAccessLabels(java.util.List<ChronicleDataAccessScopeDeniedDataAccessLabels>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ChronicleDataAccessScopeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.dataAccessScopeId">dataAccessScopeId</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.allowAll">allowAll</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Optional. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.allowedDataAccessLabels">allowedDataAccessLabels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels">ChronicleDataAccessScopeAllowedDataAccessLabels</a>></code> | allowed_data_access_labels block. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.deniedDataAccessLabels">deniedDataAccessLabels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels">ChronicleDataAccessScopeDeniedDataAccessLabels</a>></code> | denied_data_access_labels block. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. A description of the data access scope for a human reader. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#id ChronicleDataAccessScope#id}. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#project ChronicleDataAccessScope#project}. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts">ChronicleDataAccessScopeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataAccessScopeId`<sup>Required</sup> <a name="dataAccessScopeId" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.dataAccessScopeId"></a>

```java
public java.lang.String getDataAccessScopeId();
```

- *Type:* java.lang.String

Required.

The user provided scope id which will become the last part of the name
of the scope resource.
Needs to be compliant with https://google.aip.dev/122

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#data_access_scope_id ChronicleDataAccessScope#data_access_scope_id}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#instance ChronicleDataAccessScope#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#location ChronicleDataAccessScope#location}

---

##### `allowAll`<sup>Optional</sup> <a name="allowAll" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.allowAll"></a>

```java
public java.lang.Object getAllowAll();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Optional.

Whether or not the scope allows all labels, allow_all and
allowed_data_access_labels are mutually exclusive and one of them must be
present. denied_data_access_labels can still be used along with allow_all.
When combined with denied_data_access_labels, access will be granted to all
data that doesn't have labels mentioned in denied_data_access_labels. E.g.:
A customer with scope with denied labels A and B and allow_all will be able
to see all data except data labeled with A and data labeled with B and data
with labels A and B.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#allow_all ChronicleDataAccessScope#allow_all}

---

##### `allowedDataAccessLabels`<sup>Optional</sup> <a name="allowedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.allowedDataAccessLabels"></a>

```java
public java.lang.Object getAllowedDataAccessLabels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels">ChronicleDataAccessScopeAllowedDataAccessLabels</a>>

allowed_data_access_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#allowed_data_access_labels ChronicleDataAccessScope#allowed_data_access_labels}

---

##### `deniedDataAccessLabels`<sup>Optional</sup> <a name="deniedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.deniedDataAccessLabels"></a>

```java
public java.lang.Object getDeniedDataAccessLabels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels">ChronicleDataAccessScopeDeniedDataAccessLabels</a>>

denied_data_access_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#denied_data_access_labels ChronicleDataAccessScope#denied_data_access_labels}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. A description of the data access scope for a human reader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#description ChronicleDataAccessScope#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#id ChronicleDataAccessScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#project ChronicleDataAccessScope#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.timeouts"></a>

```java
public ChronicleDataAccessScopeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts">ChronicleDataAccessScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#timeouts ChronicleDataAccessScope#timeouts}

---

### ChronicleDataAccessScopeDeniedDataAccessLabels <a name="ChronicleDataAccessScopeDeniedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_data_access_scope.ChronicleDataAccessScopeDeniedDataAccessLabels;

ChronicleDataAccessScopeDeniedDataAccessLabels.builder()
//  .assetNamespace(java.lang.String)
//  .dataAccessLabel(java.lang.String)
//  .ingestionLabel(ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel)
//  .logType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.assetNamespace">assetNamespace</a></code> | <code>java.lang.String</code> | The asset namespace configured in the forwarder of the customer's events. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.dataAccessLabel">dataAccessLabel</a></code> | <code>java.lang.String</code> | The name of the data access label. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.ingestionLabel">ingestionLabel</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a></code> | ingestion_label block. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.logType">logType</a></code> | <code>java.lang.String</code> | The name of the log type. |

---

##### `assetNamespace`<sup>Optional</sup> <a name="assetNamespace" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.assetNamespace"></a>

```java
public java.lang.String getAssetNamespace();
```

- *Type:* java.lang.String

The asset namespace configured in the forwarder of the customer's events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#asset_namespace ChronicleDataAccessScope#asset_namespace}

---

##### `dataAccessLabel`<sup>Optional</sup> <a name="dataAccessLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.dataAccessLabel"></a>

```java
public java.lang.String getDataAccessLabel();
```

- *Type:* java.lang.String

The name of the data access label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#data_access_label ChronicleDataAccessScope#data_access_label}

---

##### `ingestionLabel`<sup>Optional</sup> <a name="ingestionLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.ingestionLabel"></a>

```java
public ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel getIngestionLabel();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a>

ingestion_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#ingestion_label ChronicleDataAccessScope#ingestion_label}

---

##### `logType`<sup>Optional</sup> <a name="logType" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

The name of the log type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#log_type ChronicleDataAccessScope#log_type}

---

### ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel <a name="ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_data_access_scope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel;

ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.builder()
    .ingestionLabelKey(java.lang.String)
//  .ingestionLabelValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelKey">ingestionLabelKey</a></code> | <code>java.lang.String</code> | Required. The key of the ingestion label. Always required. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelValue">ingestionLabelValue</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `ingestionLabelKey`<sup>Required</sup> <a name="ingestionLabelKey" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelKey"></a>

```java
public java.lang.String getIngestionLabelKey();
```

- *Type:* java.lang.String

Required. The key of the ingestion label. Always required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#ingestion_label_key ChronicleDataAccessScope#ingestion_label_key}

---

##### `ingestionLabelValue`<sup>Optional</sup> <a name="ingestionLabelValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelValue"></a>

```java
public java.lang.String getIngestionLabelValue();
```

- *Type:* java.lang.String

Optional.

The value of the ingestion label. Optional. An object
with no provided value and some key provided would match
against the given key and ANY value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#ingestion_label_value ChronicleDataAccessScope#ingestion_label_value}

---

### ChronicleDataAccessScopeTimeouts <a name="ChronicleDataAccessScopeTimeouts" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_data_access_scope.ChronicleDataAccessScopeTimeouts;

ChronicleDataAccessScopeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#create ChronicleDataAccessScope#create}. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#delete ChronicleDataAccessScope#delete}. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#update ChronicleDataAccessScope#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#create ChronicleDataAccessScope#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#delete ChronicleDataAccessScope#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/chronicle_data_access_scope#update ChronicleDataAccessScope#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference <a name="ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_data_access_scope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference;

new ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue">resetIngestionLabelValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIngestionLabelValue` <a name="resetIngestionLabelValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue"></a>

```java
public void resetIngestionLabelValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput">ingestionLabelKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput">ingestionLabelValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey">ingestionLabelKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue">ingestionLabelValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingestionLabelKeyInput`<sup>Optional</sup> <a name="ingestionLabelKeyInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput"></a>

```java
public java.lang.String getIngestionLabelKeyInput();
```

- *Type:* java.lang.String

---

##### `ingestionLabelValueInput`<sup>Optional</sup> <a name="ingestionLabelValueInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput"></a>

```java
public java.lang.String getIngestionLabelValueInput();
```

- *Type:* java.lang.String

---

##### `ingestionLabelKey`<sup>Required</sup> <a name="ingestionLabelKey" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey"></a>

```java
public java.lang.String getIngestionLabelKey();
```

- *Type:* java.lang.String

---

##### `ingestionLabelValue`<sup>Required</sup> <a name="ingestionLabelValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue"></a>

```java
public java.lang.String getIngestionLabelValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.internalValue"></a>

```java
public ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a>

---


### ChronicleDataAccessScopeAllowedDataAccessLabelsList <a name="ChronicleDataAccessScopeAllowedDataAccessLabelsList" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_data_access_scope.ChronicleDataAccessScopeAllowedDataAccessLabelsList;

new ChronicleDataAccessScopeAllowedDataAccessLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.get"></a>

```java
public ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels">ChronicleDataAccessScopeAllowedDataAccessLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels">ChronicleDataAccessScopeAllowedDataAccessLabels</a>>

---


### ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference <a name="ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_data_access_scope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference;

new ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.putIngestionLabel">putIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetAssetNamespace">resetAssetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetDataAccessLabel">resetDataAccessLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetIngestionLabel">resetIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetLogType">resetLogType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIngestionLabel` <a name="putIngestionLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.putIngestionLabel"></a>

```java
public void putIngestionLabel(ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.putIngestionLabel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a>

---

##### `resetAssetNamespace` <a name="resetAssetNamespace" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetAssetNamespace"></a>

```java
public void resetAssetNamespace()
```

##### `resetDataAccessLabel` <a name="resetDataAccessLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetDataAccessLabel"></a>

```java
public void resetDataAccessLabel()
```

##### `resetIngestionLabel` <a name="resetIngestionLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetIngestionLabel"></a>

```java
public void resetIngestionLabel()
```

##### `resetLogType` <a name="resetLogType" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetLogType"></a>

```java
public void resetLogType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabel">ingestionLabel</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespaceInput">assetNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabelInput">dataAccessLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabelInput">ingestionLabelInput</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logTypeInput">logTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespace">assetNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabel">dataAccessLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logType">logType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels">ChronicleDataAccessScopeAllowedDataAccessLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `ingestionLabel`<sup>Required</sup> <a name="ingestionLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabel"></a>

```java
public ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference getIngestionLabel();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference</a>

---

##### `assetNamespaceInput`<sup>Optional</sup> <a name="assetNamespaceInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespaceInput"></a>

```java
public java.lang.String getAssetNamespaceInput();
```

- *Type:* java.lang.String

---

##### `dataAccessLabelInput`<sup>Optional</sup> <a name="dataAccessLabelInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabelInput"></a>

```java
public java.lang.String getDataAccessLabelInput();
```

- *Type:* java.lang.String

---

##### `ingestionLabelInput`<sup>Optional</sup> <a name="ingestionLabelInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabelInput"></a>

```java
public ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel getIngestionLabelInput();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a>

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logTypeInput"></a>

```java
public java.lang.String getLogTypeInput();
```

- *Type:* java.lang.String

---

##### `assetNamespace`<sup>Required</sup> <a name="assetNamespace" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespace"></a>

```java
public java.lang.String getAssetNamespace();
```

- *Type:* java.lang.String

---

##### `dataAccessLabel`<sup>Required</sup> <a name="dataAccessLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabel"></a>

```java
public java.lang.String getDataAccessLabel();
```

- *Type:* java.lang.String

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels">ChronicleDataAccessScopeAllowedDataAccessLabels</a>

---


### ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference <a name="ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_data_access_scope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference;

new ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue">resetIngestionLabelValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIngestionLabelValue` <a name="resetIngestionLabelValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue"></a>

```java
public void resetIngestionLabelValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput">ingestionLabelKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput">ingestionLabelValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey">ingestionLabelKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue">ingestionLabelValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingestionLabelKeyInput`<sup>Optional</sup> <a name="ingestionLabelKeyInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput"></a>

```java
public java.lang.String getIngestionLabelKeyInput();
```

- *Type:* java.lang.String

---

##### `ingestionLabelValueInput`<sup>Optional</sup> <a name="ingestionLabelValueInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput"></a>

```java
public java.lang.String getIngestionLabelValueInput();
```

- *Type:* java.lang.String

---

##### `ingestionLabelKey`<sup>Required</sup> <a name="ingestionLabelKey" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey"></a>

```java
public java.lang.String getIngestionLabelKey();
```

- *Type:* java.lang.String

---

##### `ingestionLabelValue`<sup>Required</sup> <a name="ingestionLabelValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue"></a>

```java
public java.lang.String getIngestionLabelValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.internalValue"></a>

```java
public ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a>

---


### ChronicleDataAccessScopeDeniedDataAccessLabelsList <a name="ChronicleDataAccessScopeDeniedDataAccessLabelsList" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_data_access_scope.ChronicleDataAccessScopeDeniedDataAccessLabelsList;

new ChronicleDataAccessScopeDeniedDataAccessLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.get"></a>

```java
public ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels">ChronicleDataAccessScopeDeniedDataAccessLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels">ChronicleDataAccessScopeDeniedDataAccessLabels</a>>

---


### ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference <a name="ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_data_access_scope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference;

new ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.putIngestionLabel">putIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetAssetNamespace">resetAssetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetDataAccessLabel">resetDataAccessLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetIngestionLabel">resetIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetLogType">resetLogType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIngestionLabel` <a name="putIngestionLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.putIngestionLabel"></a>

```java
public void putIngestionLabel(ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.putIngestionLabel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a>

---

##### `resetAssetNamespace` <a name="resetAssetNamespace" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetAssetNamespace"></a>

```java
public void resetAssetNamespace()
```

##### `resetDataAccessLabel` <a name="resetDataAccessLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetDataAccessLabel"></a>

```java
public void resetDataAccessLabel()
```

##### `resetIngestionLabel` <a name="resetIngestionLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetIngestionLabel"></a>

```java
public void resetIngestionLabel()
```

##### `resetLogType` <a name="resetLogType" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetLogType"></a>

```java
public void resetLogType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabel">ingestionLabel</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespaceInput">assetNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabelInput">dataAccessLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabelInput">ingestionLabelInput</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logTypeInput">logTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespace">assetNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabel">dataAccessLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logType">logType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels">ChronicleDataAccessScopeDeniedDataAccessLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `ingestionLabel`<sup>Required</sup> <a name="ingestionLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabel"></a>

```java
public ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference getIngestionLabel();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference</a>

---

##### `assetNamespaceInput`<sup>Optional</sup> <a name="assetNamespaceInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespaceInput"></a>

```java
public java.lang.String getAssetNamespaceInput();
```

- *Type:* java.lang.String

---

##### `dataAccessLabelInput`<sup>Optional</sup> <a name="dataAccessLabelInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabelInput"></a>

```java
public java.lang.String getDataAccessLabelInput();
```

- *Type:* java.lang.String

---

##### `ingestionLabelInput`<sup>Optional</sup> <a name="ingestionLabelInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabelInput"></a>

```java
public ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel getIngestionLabelInput();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a>

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logTypeInput"></a>

```java
public java.lang.String getLogTypeInput();
```

- *Type:* java.lang.String

---

##### `assetNamespace`<sup>Required</sup> <a name="assetNamespace" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespace"></a>

```java
public java.lang.String getAssetNamespace();
```

- *Type:* java.lang.String

---

##### `dataAccessLabel`<sup>Required</sup> <a name="dataAccessLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabel"></a>

```java
public java.lang.String getDataAccessLabel();
```

- *Type:* java.lang.String

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels">ChronicleDataAccessScopeDeniedDataAccessLabels</a>

---


### ChronicleDataAccessScopeTimeoutsOutputReference <a name="ChronicleDataAccessScopeTimeoutsOutputReference" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_data_access_scope.ChronicleDataAccessScopeTimeoutsOutputReference;

new ChronicleDataAccessScopeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts">ChronicleDataAccessScopeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts">ChronicleDataAccessScopeTimeouts</a>

---



