# `appEngineApplicationUrlDispatchRules` Submodule <a name="`appEngineApplicationUrlDispatchRules` Submodule" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineApplicationUrlDispatchRules <a name="AppEngineApplicationUrlDispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules google_app_engine_application_url_dispatch_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.app_engine_application_url_dispatch_rules.AppEngineApplicationUrlDispatchRules;

AppEngineApplicationUrlDispatchRules.Builder.create(Construct scope, java.lang.String id)
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
    .dispatchRules(IResolvable)
    .dispatchRules(java.util.List<AppEngineApplicationUrlDispatchRulesDispatchRules>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(AppEngineApplicationUrlDispatchRulesTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.dispatchRules">dispatchRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>></code> | dispatch_rules block. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules#id AppEngineApplicationUrlDispatchRules#id}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules#project AppEngineApplicationUrlDispatchRules#project}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dispatchRules`<sup>Required</sup> <a name="dispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.dispatchRules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>>

dispatch_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules#dispatch_rules AppEngineApplicationUrlDispatchRules#dispatch_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules#id AppEngineApplicationUrlDispatchRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules#project AppEngineApplicationUrlDispatchRules#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules#timeouts AppEngineApplicationUrlDispatchRules#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putDispatchRules">putDispatchRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDispatchRules` <a name="putDispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putDispatchRules"></a>

```java
public void putDispatchRules(IResolvable OR java.util.List<AppEngineApplicationUrlDispatchRulesDispatchRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putDispatchRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putTimeouts"></a>

```java
public void putTimeouts(AppEngineApplicationUrlDispatchRulesTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppEngineApplicationUrlDispatchRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.app_engine_application_url_dispatch_rules.AppEngineApplicationUrlDispatchRules;

AppEngineApplicationUrlDispatchRules.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.app_engine_application_url_dispatch_rules.AppEngineApplicationUrlDispatchRules;

AppEngineApplicationUrlDispatchRules.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.app_engine_application_url_dispatch_rules.AppEngineApplicationUrlDispatchRules;

AppEngineApplicationUrlDispatchRules.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.app_engine_application_url_dispatch_rules.AppEngineApplicationUrlDispatchRules;

AppEngineApplicationUrlDispatchRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppEngineApplicationUrlDispatchRules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AppEngineApplicationUrlDispatchRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppEngineApplicationUrlDispatchRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppEngineApplicationUrlDispatchRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AppEngineApplicationUrlDispatchRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dispatchRules">dispatchRules</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList">AppEngineApplicationUrlDispatchRulesDispatchRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference">AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dispatchRulesInput">dispatchRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dispatchRules`<sup>Required</sup> <a name="dispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dispatchRules"></a>

```java
public AppEngineApplicationUrlDispatchRulesDispatchRulesList getDispatchRules();
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList">AppEngineApplicationUrlDispatchRulesDispatchRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.timeouts"></a>

```java
public AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference">AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference</a>

---

##### `dispatchRulesInput`<sup>Optional</sup> <a name="dispatchRulesInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.dispatchRulesInput"></a>

```java
public java.lang.Object getDispatchRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRules.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineApplicationUrlDispatchRulesConfig <a name="AppEngineApplicationUrlDispatchRulesConfig" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.app_engine_application_url_dispatch_rules.AppEngineApplicationUrlDispatchRulesConfig;

AppEngineApplicationUrlDispatchRulesConfig.builder()
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
    .dispatchRules(IResolvable)
    .dispatchRules(java.util.List<AppEngineApplicationUrlDispatchRulesDispatchRules>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(AppEngineApplicationUrlDispatchRulesTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.dispatchRules">dispatchRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>></code> | dispatch_rules block. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules#id AppEngineApplicationUrlDispatchRules#id}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules#project AppEngineApplicationUrlDispatchRules#project}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dispatchRules`<sup>Required</sup> <a name="dispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.dispatchRules"></a>

```java
public java.lang.Object getDispatchRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>>

dispatch_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules#dispatch_rules AppEngineApplicationUrlDispatchRules#dispatch_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules#id AppEngineApplicationUrlDispatchRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules#project AppEngineApplicationUrlDispatchRules#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesConfig.property.timeouts"></a>

```java
public AppEngineApplicationUrlDispatchRulesTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules#timeouts AppEngineApplicationUrlDispatchRules#timeouts}

---

### AppEngineApplicationUrlDispatchRulesDispatchRules <a name="AppEngineApplicationUrlDispatchRulesDispatchRules" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.app_engine_application_url_dispatch_rules.AppEngineApplicationUrlDispatchRulesDispatchRules;

AppEngineApplicationUrlDispatchRulesDispatchRules.builder()
    .path(java.lang.String)
    .service(java.lang.String)
//  .domain(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.path">path</a></code> | <code>java.lang.String</code> | Pathname within the host. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.service">service</a></code> | <code>java.lang.String</code> | Pathname within the host. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.domain">domain</a></code> | <code>java.lang.String</code> | Domain name to match against. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Pathname within the host.

Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules#path AppEngineApplicationUrlDispatchRules#path}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Pathname within the host.

Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules#service AppEngineApplicationUrlDispatchRules#service}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Domain name to match against.

The wildcard "*" is supported if specified before a period: "*.".
Defaults to matching all domains: "*".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules#domain AppEngineApplicationUrlDispatchRules#domain}

---

### AppEngineApplicationUrlDispatchRulesTimeouts <a name="AppEngineApplicationUrlDispatchRulesTimeouts" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.app_engine_application_url_dispatch_rules.AppEngineApplicationUrlDispatchRulesTimeouts;

AppEngineApplicationUrlDispatchRulesTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules#create AppEngineApplicationUrlDispatchRules#create}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules#delete AppEngineApplicationUrlDispatchRules#delete}. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules#update AppEngineApplicationUrlDispatchRules#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules#create AppEngineApplicationUrlDispatchRules#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules#delete AppEngineApplicationUrlDispatchRules#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/app_engine_application_url_dispatch_rules#update AppEngineApplicationUrlDispatchRules#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineApplicationUrlDispatchRulesDispatchRulesList <a name="AppEngineApplicationUrlDispatchRulesDispatchRulesList" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.app_engine_application_url_dispatch_rules.AppEngineApplicationUrlDispatchRulesDispatchRulesList;

new AppEngineApplicationUrlDispatchRulesDispatchRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.get"></a>

```java
public AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>>

---


### AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference <a name="AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.app_engine_application_url_dispatch_rules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference;

new AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resetDomain">resetDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resetDomain"></a>

```java
public void resetDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesDispatchRules">AppEngineApplicationUrlDispatchRulesDispatchRules</a>

---


### AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference <a name="AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.app_engine_application_url_dispatch_rules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference;

new AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.appEngineApplicationUrlDispatchRules.AppEngineApplicationUrlDispatchRulesTimeouts">AppEngineApplicationUrlDispatchRulesTimeouts</a>

---



