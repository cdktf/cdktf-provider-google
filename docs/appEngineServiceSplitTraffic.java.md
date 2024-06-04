# `appEngineServiceSplitTraffic` Submodule <a name="`appEngineServiceSplitTraffic` Submodule" id="@cdktf/provider-google.appEngineServiceSplitTraffic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineServiceSplitTraffic <a name="AppEngineServiceSplitTraffic" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic google_app_engine_service_split_traffic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.app_engine_service_split_traffic.AppEngineServiceSplitTraffic;

AppEngineServiceSplitTraffic.Builder.create(Construct scope, java.lang.String id)
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
    .service(java.lang.String)
    .split(AppEngineServiceSplitTrafficSplit)
//  .id(java.lang.String)
//  .migrateTraffic(java.lang.Boolean)
//  .migrateTraffic(IResolvable)
//  .project(java.lang.String)
//  .timeouts(AppEngineServiceSplitTrafficTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | The name of the service these settings apply to. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.split">split</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a></code> | split block. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#id AppEngineServiceSplitTraffic#id}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.migrateTraffic">migrateTraffic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true traffic will be migrated to this version. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#project AppEngineServiceSplitTraffic#project}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.service"></a>

- *Type:* java.lang.String

The name of the service these settings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#service AppEngineServiceSplitTraffic#service}

---

##### `split`<sup>Required</sup> <a name="split" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.split"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a>

split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#split AppEngineServiceSplitTraffic#split}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#id AppEngineServiceSplitTraffic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `migrateTraffic`<sup>Optional</sup> <a name="migrateTraffic" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.migrateTraffic"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true traffic will be migrated to this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#migrate_traffic AppEngineServiceSplitTraffic#migrate_traffic}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#project AppEngineServiceSplitTraffic#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#timeouts AppEngineServiceSplitTraffic#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putSplit">putSplit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetMigrateTraffic">resetMigrateTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSplit` <a name="putSplit" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putSplit"></a>

```java
public void putSplit(AppEngineServiceSplitTrafficSplit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putSplit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putTimeouts"></a>

```java
public void putTimeouts(AppEngineServiceSplitTrafficTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetId"></a>

```java
public void resetId()
```

##### `resetMigrateTraffic` <a name="resetMigrateTraffic" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetMigrateTraffic"></a>

```java
public void resetMigrateTraffic()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppEngineServiceSplitTraffic resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.app_engine_service_split_traffic.AppEngineServiceSplitTraffic;

AppEngineServiceSplitTraffic.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.app_engine_service_split_traffic.AppEngineServiceSplitTraffic;

AppEngineServiceSplitTraffic.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.app_engine_service_split_traffic.AppEngineServiceSplitTraffic;

AppEngineServiceSplitTraffic.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.app_engine_service_split_traffic.AppEngineServiceSplitTraffic;

AppEngineServiceSplitTraffic.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppEngineServiceSplitTraffic.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppEngineServiceSplitTraffic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppEngineServiceSplitTraffic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppEngineServiceSplitTraffic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppEngineServiceSplitTraffic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.split">split</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference">AppEngineServiceSplitTrafficSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference">AppEngineServiceSplitTrafficTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.migrateTrafficInput">migrateTrafficInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.splitInput">splitInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.migrateTraffic">migrateTraffic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `split`<sup>Required</sup> <a name="split" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.split"></a>

```java
public AppEngineServiceSplitTrafficSplitOutputReference getSplit();
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference">AppEngineServiceSplitTrafficSplitOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.timeouts"></a>

```java
public AppEngineServiceSplitTrafficTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference">AppEngineServiceSplitTrafficTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `migrateTrafficInput`<sup>Optional</sup> <a name="migrateTrafficInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.migrateTrafficInput"></a>

```java
public java.lang.Object getMigrateTrafficInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `splitInput`<sup>Optional</sup> <a name="splitInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.splitInput"></a>

```java
public AppEngineServiceSplitTrafficSplit getSplitInput();
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `migrateTraffic`<sup>Required</sup> <a name="migrateTraffic" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.migrateTraffic"></a>

```java
public java.lang.Object getMigrateTraffic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTraffic.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineServiceSplitTrafficConfig <a name="AppEngineServiceSplitTrafficConfig" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.app_engine_service_split_traffic.AppEngineServiceSplitTrafficConfig;

AppEngineServiceSplitTrafficConfig.builder()
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
    .service(java.lang.String)
    .split(AppEngineServiceSplitTrafficSplit)
//  .id(java.lang.String)
//  .migrateTraffic(java.lang.Boolean)
//  .migrateTraffic(IResolvable)
//  .project(java.lang.String)
//  .timeouts(AppEngineServiceSplitTrafficTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.service">service</a></code> | <code>java.lang.String</code> | The name of the service these settings apply to. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.split">split</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a></code> | split block. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#id AppEngineServiceSplitTraffic#id}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.migrateTraffic">migrateTraffic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true traffic will be migrated to this version. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#project AppEngineServiceSplitTraffic#project}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The name of the service these settings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#service AppEngineServiceSplitTraffic#service}

---

##### `split`<sup>Required</sup> <a name="split" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.split"></a>

```java
public AppEngineServiceSplitTrafficSplit getSplit();
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a>

split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#split AppEngineServiceSplitTraffic#split}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#id AppEngineServiceSplitTraffic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `migrateTraffic`<sup>Optional</sup> <a name="migrateTraffic" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.migrateTraffic"></a>

```java
public java.lang.Object getMigrateTraffic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true traffic will be migrated to this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#migrate_traffic AppEngineServiceSplitTraffic#migrate_traffic}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#project AppEngineServiceSplitTraffic#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficConfig.property.timeouts"></a>

```java
public AppEngineServiceSplitTrafficTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#timeouts AppEngineServiceSplitTraffic#timeouts}

---

### AppEngineServiceSplitTrafficSplit <a name="AppEngineServiceSplitTrafficSplit" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.app_engine_service_split_traffic.AppEngineServiceSplitTrafficSplit;

AppEngineServiceSplitTrafficSplit.builder()
    .allocations(java.util.Map<java.lang.String, java.lang.String>)
//  .shardBy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.property.allocations">allocations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.property.shardBy">shardBy</a></code> | <code>java.lang.String</code> | Mechanism used to determine which version a request is sent to. |

---

##### `allocations`<sup>Required</sup> <a name="allocations" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.property.allocations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAllocations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mapping from version IDs within the service to fractional (0.000, 1] allocations of traffic for that version. Each version can be specified only once, but some versions in the service may not have any traffic allocation. Services that have traffic allocated cannot be deleted until either the service is deleted or their traffic allocation is removed. Allocations must sum to 1. Up to two decimal place precision is supported for IP-based splits and up to three decimal places is supported for cookie-based splits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#allocations AppEngineServiceSplitTraffic#allocations}

---

##### `shardBy`<sup>Optional</sup> <a name="shardBy" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit.property.shardBy"></a>

```java
public java.lang.String getShardBy();
```

- *Type:* java.lang.String

Mechanism used to determine which version a request is sent to.

The traffic selection algorithm will be stable for either type until allocations are changed. Possible values: ["UNSPECIFIED", "COOKIE", "IP", "RANDOM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#shard_by AppEngineServiceSplitTraffic#shard_by}

---

### AppEngineServiceSplitTrafficTimeouts <a name="AppEngineServiceSplitTrafficTimeouts" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.app_engine_service_split_traffic.AppEngineServiceSplitTrafficTimeouts;

AppEngineServiceSplitTrafficTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#create AppEngineServiceSplitTraffic#create}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#delete AppEngineServiceSplitTraffic#delete}. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#update AppEngineServiceSplitTraffic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#create AppEngineServiceSplitTraffic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#delete AppEngineServiceSplitTraffic#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/app_engine_service_split_traffic#update AppEngineServiceSplitTraffic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineServiceSplitTrafficSplitOutputReference <a name="AppEngineServiceSplitTrafficSplitOutputReference" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.app_engine_service_split_traffic.AppEngineServiceSplitTrafficSplitOutputReference;

new AppEngineServiceSplitTrafficSplitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resetShardBy">resetShardBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetShardBy` <a name="resetShardBy" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.resetShardBy"></a>

```java
public void resetShardBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.allocationsInput">allocationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.shardByInput">shardByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.allocations">allocations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.shardBy">shardBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocationsInput`<sup>Optional</sup> <a name="allocationsInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.allocationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAllocationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `shardByInput`<sup>Optional</sup> <a name="shardByInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.shardByInput"></a>

```java
public java.lang.String getShardByInput();
```

- *Type:* java.lang.String

---

##### `allocations`<sup>Required</sup> <a name="allocations" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.allocations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAllocations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `shardBy`<sup>Required</sup> <a name="shardBy" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.shardBy"></a>

```java
public java.lang.String getShardBy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplitOutputReference.property.internalValue"></a>

```java
public AppEngineServiceSplitTrafficSplit getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficSplit">AppEngineServiceSplitTrafficSplit</a>

---


### AppEngineServiceSplitTrafficTimeoutsOutputReference <a name="AppEngineServiceSplitTrafficTimeoutsOutputReference" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.app_engine_service_split_traffic.AppEngineServiceSplitTrafficTimeoutsOutputReference;

new AppEngineServiceSplitTrafficTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.appEngineServiceSplitTraffic.AppEngineServiceSplitTrafficTimeouts">AppEngineServiceSplitTrafficTimeouts</a>

---



