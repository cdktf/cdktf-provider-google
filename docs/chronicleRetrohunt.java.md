# `chronicleRetrohunt` Submodule <a name="`chronicleRetrohunt` Submodule" id="@cdktf/provider-google.chronicleRetrohunt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleRetrohunt <a name="ChronicleRetrohunt" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt google_chronicle_retrohunt}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_retrohunt.ChronicleRetrohunt;

ChronicleRetrohunt.Builder.create(Construct scope, java.lang.String id)
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
    .instance(java.lang.String)
    .location(java.lang.String)
    .processInterval(ChronicleRetrohuntProcessInterval)
    .rule(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .retrohunt(java.lang.String)
//  .timeouts(ChronicleRetrohuntTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.processInterval">processInterval</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a></code> | process_interval block. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.rule">rule</a></code> | <code>java.lang.String</code> | The Rule ID of the rule. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#id ChronicleRetrohunt#id}. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#project ChronicleRetrohunt#project}. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.retrohunt">retrohunt</a></code> | <code>java.lang.String</code> | The retrohunt ID of the Retrohunt. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#instance ChronicleRetrohunt#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#location ChronicleRetrohunt#location}

---

##### `processInterval`<sup>Required</sup> <a name="processInterval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.processInterval"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a>

process_interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#process_interval ChronicleRetrohunt#process_interval}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.rule"></a>

- *Type:* java.lang.String

The Rule ID of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#rule ChronicleRetrohunt#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#id ChronicleRetrohunt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#project ChronicleRetrohunt#project}.

---

##### `retrohunt`<sup>Optional</sup> <a name="retrohunt" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.retrohunt"></a>

- *Type:* java.lang.String

The retrohunt ID of the Retrohunt.

A retrohunt is an execution of a Rule over a time range in the past.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#retrohunt ChronicleRetrohunt#retrohunt}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#timeouts ChronicleRetrohunt#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putProcessInterval">putProcessInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetRetrohunt">resetRetrohunt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProcessInterval` <a name="putProcessInterval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putProcessInterval"></a>

```java
public void putProcessInterval(ChronicleRetrohuntProcessInterval value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putProcessInterval.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putTimeouts"></a>

```java
public void putTimeouts(ChronicleRetrohuntTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetProject"></a>

```java
public void resetProject()
```

##### `resetRetrohunt` <a name="resetRetrohunt" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetRetrohunt"></a>

```java
public void resetRetrohunt()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ChronicleRetrohunt resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_retrohunt.ChronicleRetrohunt;

ChronicleRetrohunt.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_retrohunt.ChronicleRetrohunt;

ChronicleRetrohunt.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_retrohunt.ChronicleRetrohunt;

ChronicleRetrohunt.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_retrohunt.ChronicleRetrohunt;

ChronicleRetrohunt.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChronicleRetrohunt.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ChronicleRetrohunt resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChronicleRetrohunt to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChronicleRetrohunt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ChronicleRetrohunt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.executionInterval">executionInterval</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList">ChronicleRetrohuntExecutionIntervalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.processInterval">processInterval</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference">ChronicleRetrohuntProcessIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.progressPercentage">progressPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference">ChronicleRetrohuntTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.processIntervalInput">processIntervalInput</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.retrohuntInput">retrohuntInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.ruleInput">ruleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.retrohunt">retrohunt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.rule">rule</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `executionInterval`<sup>Required</sup> <a name="executionInterval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.executionInterval"></a>

```java
public ChronicleRetrohuntExecutionIntervalList getExecutionInterval();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList">ChronicleRetrohuntExecutionIntervalList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `processInterval`<sup>Required</sup> <a name="processInterval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.processInterval"></a>

```java
public ChronicleRetrohuntProcessIntervalOutputReference getProcessInterval();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference">ChronicleRetrohuntProcessIntervalOutputReference</a>

---

##### `progressPercentage`<sup>Required</sup> <a name="progressPercentage" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.progressPercentage"></a>

```java
public java.lang.Number getProgressPercentage();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.timeouts"></a>

```java
public ChronicleRetrohuntTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference">ChronicleRetrohuntTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `processIntervalInput`<sup>Optional</sup> <a name="processIntervalInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.processIntervalInput"></a>

```java
public ChronicleRetrohuntProcessInterval getProcessIntervalInput();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `retrohuntInput`<sup>Optional</sup> <a name="retrohuntInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.retrohuntInput"></a>

```java
public java.lang.String getRetrohuntInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.ruleInput"></a>

```java
public java.lang.String getRuleInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `retrohunt`<sup>Required</sup> <a name="retrohunt" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.retrohunt"></a>

```java
public java.lang.String getRetrohunt();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.rule"></a>

```java
public java.lang.String getRule();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohunt.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleRetrohuntConfig <a name="ChronicleRetrohuntConfig" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_retrohunt.ChronicleRetrohuntConfig;

ChronicleRetrohuntConfig.builder()
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
    .instance(java.lang.String)
    .location(java.lang.String)
    .processInterval(ChronicleRetrohuntProcessInterval)
    .rule(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .retrohunt(java.lang.String)
//  .timeouts(ChronicleRetrohuntTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.processInterval">processInterval</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a></code> | process_interval block. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.rule">rule</a></code> | <code>java.lang.String</code> | The Rule ID of the rule. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#id ChronicleRetrohunt#id}. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#project ChronicleRetrohunt#project}. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.retrohunt">retrohunt</a></code> | <code>java.lang.String</code> | The retrohunt ID of the Retrohunt. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#instance ChronicleRetrohunt#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#location ChronicleRetrohunt#location}

---

##### `processInterval`<sup>Required</sup> <a name="processInterval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.processInterval"></a>

```java
public ChronicleRetrohuntProcessInterval getProcessInterval();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a>

process_interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#process_interval ChronicleRetrohunt#process_interval}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.rule"></a>

```java
public java.lang.String getRule();
```

- *Type:* java.lang.String

The Rule ID of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#rule ChronicleRetrohunt#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#id ChronicleRetrohunt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#project ChronicleRetrohunt#project}.

---

##### `retrohunt`<sup>Optional</sup> <a name="retrohunt" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.retrohunt"></a>

```java
public java.lang.String getRetrohunt();
```

- *Type:* java.lang.String

The retrohunt ID of the Retrohunt.

A retrohunt is an execution of a Rule over a time range in the past.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#retrohunt ChronicleRetrohunt#retrohunt}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntConfig.property.timeouts"></a>

```java
public ChronicleRetrohuntTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#timeouts ChronicleRetrohunt#timeouts}

---

### ChronicleRetrohuntExecutionInterval <a name="ChronicleRetrohuntExecutionInterval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionInterval.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_retrohunt.ChronicleRetrohuntExecutionInterval;

ChronicleRetrohuntExecutionInterval.builder()
    .build();
```


### ChronicleRetrohuntProcessInterval <a name="ChronicleRetrohuntProcessInterval" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_retrohunt.ChronicleRetrohuntProcessInterval;

ChronicleRetrohuntProcessInterval.builder()
    .endTime(java.lang.String)
    .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval.property.endTime">endTime</a></code> | <code>java.lang.String</code> | Exclusive end of the interval. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Inclusive start of the interval. |

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

Exclusive end of the interval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#end_time ChronicleRetrohunt#end_time}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Inclusive start of the interval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#start_time ChronicleRetrohunt#start_time}

---

### ChronicleRetrohuntTimeouts <a name="ChronicleRetrohuntTimeouts" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_retrohunt.ChronicleRetrohuntTimeouts;

ChronicleRetrohuntTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#create ChronicleRetrohunt#create}. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#delete ChronicleRetrohunt#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#create ChronicleRetrohunt#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/chronicle_retrohunt#delete ChronicleRetrohunt#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleRetrohuntExecutionIntervalList <a name="ChronicleRetrohuntExecutionIntervalList" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_retrohunt.ChronicleRetrohuntExecutionIntervalList;

new ChronicleRetrohuntExecutionIntervalList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.get"></a>

```java
public ChronicleRetrohuntExecutionIntervalOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ChronicleRetrohuntExecutionIntervalOutputReference <a name="ChronicleRetrohuntExecutionIntervalOutputReference" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_retrohunt.ChronicleRetrohuntExecutionIntervalOutputReference;

new ChronicleRetrohuntExecutionIntervalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionInterval">ChronicleRetrohuntExecutionInterval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionIntervalOutputReference.property.internalValue"></a>

```java
public ChronicleRetrohuntExecutionInterval getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntExecutionInterval">ChronicleRetrohuntExecutionInterval</a>

---


### ChronicleRetrohuntProcessIntervalOutputReference <a name="ChronicleRetrohuntProcessIntervalOutputReference" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_retrohunt.ChronicleRetrohuntProcessIntervalOutputReference;

new ChronicleRetrohuntProcessIntervalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessIntervalOutputReference.property.internalValue"></a>

```java
public ChronicleRetrohuntProcessInterval getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntProcessInterval">ChronicleRetrohuntProcessInterval</a>

---


### ChronicleRetrohuntTimeoutsOutputReference <a name="ChronicleRetrohuntTimeoutsOutputReference" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.chronicle_retrohunt.ChronicleRetrohuntTimeoutsOutputReference;

new ChronicleRetrohuntTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.chronicleRetrohunt.ChronicleRetrohuntTimeouts">ChronicleRetrohuntTimeouts</a>

---



