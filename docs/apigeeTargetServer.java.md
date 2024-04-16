# `apigeeTargetServer` Submodule <a name="`apigeeTargetServer` Submodule" id="@cdktf/provider-google.apigeeTargetServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeTargetServer <a name="ApigeeTargetServer" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server google_apigee_target_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_target_server.ApigeeTargetServer;

ApigeeTargetServer.Builder.create(Construct scope, java.lang.String id)
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
    .envId(java.lang.String)
    .host(java.lang.String)
    .name(java.lang.String)
    .port(java.lang.Number)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .protocol(java.lang.String)
//  .sSlInfo(ApigeeTargetServerSSlInfo)
//  .timeouts(ApigeeTargetServerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.envId">envId</a></code> | <code>java.lang.String</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.host">host</a></code> | <code>java.lang.String</code> | The host name this target connects to. Value must be a valid hostname as described by RFC-1123. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource id of this reference. Values must match the regular expression [\w\s-.]+. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of this TargetServer. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#id ApigeeTargetServer#id}. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Immutable. The protocol used by this TargetServer. Possible values: ["HTTP", "HTTP2", "GRPC_TARGET", "GRPC", "EXTERNAL_CALLOUT"]. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.sSlInfo">sSlInfo</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a></code> | s_sl_info block. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.envId"></a>

- *Type:* java.lang.String

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#env_id ApigeeTargetServer#env_id}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.host"></a>

- *Type:* java.lang.String

The host name this target connects to. Value must be a valid hostname as described by RFC-1123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#host ApigeeTargetServer#host}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource id of this reference. Values must match the regular expression [\w\s-.]+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#name ApigeeTargetServer#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#port ApigeeTargetServer#port}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description of this TargetServer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#description ApigeeTargetServer#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#id ApigeeTargetServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.isEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#is_enabled ApigeeTargetServer#is_enabled}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Immutable. The protocol used by this TargetServer. Possible values: ["HTTP", "HTTP2", "GRPC_TARGET", "GRPC", "EXTERNAL_CALLOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#protocol ApigeeTargetServer#protocol}

---

##### `sSlInfo`<sup>Optional</sup> <a name="sSlInfo" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.sSlInfo"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a>

s_sl_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#s_sl_info ApigeeTargetServer#s_sl_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#timeouts ApigeeTargetServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putSSlInfo">putSSlInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetSSlInfo">resetSSlInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSSlInfo` <a name="putSSlInfo" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putSSlInfo"></a>

```java
public void putSSlInfo(ApigeeTargetServerSSlInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putSSlInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putTimeouts"></a>

```java
public void putTimeouts(ApigeeTargetServerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetId"></a>

```java
public void resetId()
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetSSlInfo` <a name="resetSSlInfo" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetSSlInfo"></a>

```java
public void resetSSlInfo()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeTargetServer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_target_server.ApigeeTargetServer;

ApigeeTargetServer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_target_server.ApigeeTargetServer;

ApigeeTargetServer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_target_server.ApigeeTargetServer;

ApigeeTargetServer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_target_server.ApigeeTargetServer;

ApigeeTargetServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigeeTargetServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApigeeTargetServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigeeTargetServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigeeTargetServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeTargetServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.sSlInfo">sSlInfo</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference">ApigeeTargetServerSSlInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference">ApigeeTargetServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.envIdInput">envIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.sSlInfoInput">sSlInfoInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.envId">envId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `sSlInfo`<sup>Required</sup> <a name="sSlInfo" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.sSlInfo"></a>

```java
public ApigeeTargetServerSSlInfoOutputReference getSSlInfo();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference">ApigeeTargetServerSSlInfoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.timeouts"></a>

```java
public ApigeeTargetServerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference">ApigeeTargetServerTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `envIdInput`<sup>Optional</sup> <a name="envIdInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.envIdInput"></a>

```java
public java.lang.String getEnvIdInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `sSlInfoInput`<sup>Optional</sup> <a name="sSlInfoInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.sSlInfoInput"></a>

```java
public ApigeeTargetServerSSlInfo getSSlInfoInput();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.envId"></a>

```java
public java.lang.String getEnvId();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeTargetServerConfig <a name="ApigeeTargetServerConfig" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_target_server.ApigeeTargetServerConfig;

ApigeeTargetServerConfig.builder()
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
    .envId(java.lang.String)
    .host(java.lang.String)
    .name(java.lang.String)
    .port(java.lang.Number)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .protocol(java.lang.String)
//  .sSlInfo(ApigeeTargetServerSSlInfo)
//  .timeouts(ApigeeTargetServerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.envId">envId</a></code> | <code>java.lang.String</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.host">host</a></code> | <code>java.lang.String</code> | The host name this target connects to. Value must be a valid hostname as described by RFC-1123. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource id of this reference. Values must match the regular expression [\w\s-.]+. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.port">port</a></code> | <code>java.lang.Number</code> | The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of this TargetServer. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#id ApigeeTargetServer#id}. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Immutable. The protocol used by this TargetServer. Possible values: ["HTTP", "HTTP2", "GRPC_TARGET", "GRPC", "EXTERNAL_CALLOUT"]. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.sSlInfo">sSlInfo</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a></code> | s_sl_info block. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.envId"></a>

```java
public java.lang.String getEnvId();
```

- *Type:* java.lang.String

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#env_id ApigeeTargetServer#env_id}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The host name this target connects to. Value must be a valid hostname as described by RFC-1123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#host ApigeeTargetServer#host}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource id of this reference. Values must match the regular expression [\w\s-.]+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#name ApigeeTargetServer#name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#port ApigeeTargetServer#port}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of this TargetServer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#description ApigeeTargetServer#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#id ApigeeTargetServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#is_enabled ApigeeTargetServer#is_enabled}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Immutable. The protocol used by this TargetServer. Possible values: ["HTTP", "HTTP2", "GRPC_TARGET", "GRPC", "EXTERNAL_CALLOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#protocol ApigeeTargetServer#protocol}

---

##### `sSlInfo`<sup>Optional</sup> <a name="sSlInfo" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.sSlInfo"></a>

```java
public ApigeeTargetServerSSlInfo getSSlInfo();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a>

s_sl_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#s_sl_info ApigeeTargetServer#s_sl_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.timeouts"></a>

```java
public ApigeeTargetServerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#timeouts ApigeeTargetServer#timeouts}

---

### ApigeeTargetServerSSlInfo <a name="ApigeeTargetServerSSlInfo" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_target_server.ApigeeTargetServerSSlInfo;

ApigeeTargetServerSSlInfo.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .ciphers(java.util.List<java.lang.String>)
//  .clientAuthEnabled(java.lang.Boolean)
//  .clientAuthEnabled(IResolvable)
//  .commonName(ApigeeTargetServerSSlInfoCommonName)
//  .ignoreValidationErrors(java.lang.Boolean)
//  .ignoreValidationErrors(IResolvable)
//  .keyAlias(java.lang.String)
//  .keyStore(java.lang.String)
//  .protocols(java.util.List<java.lang.String>)
//  .trustStore(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables TLS. If false, neither one-way nor two-way TLS will be enabled. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.ciphers">ciphers</a></code> | <code>java.util.List<java.lang.String></code> | The SSL/TLS cipher suites to be used. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.clientAuthEnabled">clientAuthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables two-way TLS. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.commonName">commonName</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a></code> | common_name block. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.ignoreValidationErrors">ignoreValidationErrors</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, Edge ignores TLS certificate errors. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.keyAlias">keyAlias</a></code> | <code>java.lang.String</code> | Required if clientAuthEnabled is true. The resource ID for the alias containing the private key and cert. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.keyStore">keyStore</a></code> | <code>java.lang.String</code> | Required if clientAuthEnabled is true. The resource ID of the keystore. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | The TLS versioins to be used. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.trustStore">trustStore</a></code> | <code>java.lang.String</code> | The resource ID of the truststore. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables TLS. If false, neither one-way nor two-way TLS will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#enabled ApigeeTargetServer#enabled}

---

##### `ciphers`<sup>Optional</sup> <a name="ciphers" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.ciphers"></a>

```java
public java.util.List<java.lang.String> getCiphers();
```

- *Type:* java.util.List<java.lang.String>

The SSL/TLS cipher suites to be used.

For programmable proxies, it must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable proxies, it must follow the configuration specified in: https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting has no effect for configurable proxies when negotiating TLS 1.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#ciphers ApigeeTargetServer#ciphers}

---

##### `clientAuthEnabled`<sup>Optional</sup> <a name="clientAuthEnabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.clientAuthEnabled"></a>

```java
public java.lang.Object getClientAuthEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables two-way TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#client_auth_enabled ApigeeTargetServer#client_auth_enabled}

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.commonName"></a>

```java
public ApigeeTargetServerSSlInfoCommonName getCommonName();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a>

common_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#common_name ApigeeTargetServer#common_name}

---

##### `ignoreValidationErrors`<sup>Optional</sup> <a name="ignoreValidationErrors" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.ignoreValidationErrors"></a>

```java
public java.lang.Object getIgnoreValidationErrors();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, Edge ignores TLS certificate errors.

Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#ignore_validation_errors ApigeeTargetServer#ignore_validation_errors}

---

##### `keyAlias`<sup>Optional</sup> <a name="keyAlias" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.keyAlias"></a>

```java
public java.lang.String getKeyAlias();
```

- *Type:* java.lang.String

Required if clientAuthEnabled is true. The resource ID for the alias containing the private key and cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#key_alias ApigeeTargetServer#key_alias}

---

##### `keyStore`<sup>Optional</sup> <a name="keyStore" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.keyStore"></a>

```java
public java.lang.String getKeyStore();
```

- *Type:* java.lang.String

Required if clientAuthEnabled is true. The resource ID of the keystore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#key_store ApigeeTargetServer#key_store}

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

The TLS versioins to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#protocols ApigeeTargetServer#protocols}

---

##### `trustStore`<sup>Optional</sup> <a name="trustStore" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.trustStore"></a>

```java
public java.lang.String getTrustStore();
```

- *Type:* java.lang.String

The resource ID of the truststore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#trust_store ApigeeTargetServer#trust_store}

---

### ApigeeTargetServerSSlInfoCommonName <a name="ApigeeTargetServerSSlInfoCommonName" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_target_server.ApigeeTargetServerSSlInfoCommonName;

ApigeeTargetServerSSlInfoCommonName.builder()
//  .value(java.lang.String)
//  .wildcardMatch(java.lang.Boolean)
//  .wildcardMatch(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName.property.value">value</a></code> | <code>java.lang.String</code> | The TLS Common Name string of the certificate. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName.property.wildcardMatch">wildcardMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the cert should be matched against as a wildcard cert. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The TLS Common Name string of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#value ApigeeTargetServer#value}

---

##### `wildcardMatch`<sup>Optional</sup> <a name="wildcardMatch" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName.property.wildcardMatch"></a>

```java
public java.lang.Object getWildcardMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the cert should be matched against as a wildcard cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#wildcard_match ApigeeTargetServer#wildcard_match}

---

### ApigeeTargetServerTimeouts <a name="ApigeeTargetServerTimeouts" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_target_server.ApigeeTargetServerTimeouts;

ApigeeTargetServerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#create ApigeeTargetServer#create}. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#delete ApigeeTargetServer#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#update ApigeeTargetServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#create ApigeeTargetServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#delete ApigeeTargetServer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#update ApigeeTargetServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeTargetServerSSlInfoCommonNameOutputReference <a name="ApigeeTargetServerSSlInfoCommonNameOutputReference" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_target_server.ApigeeTargetServerSSlInfoCommonNameOutputReference;

new ApigeeTargetServerSSlInfoCommonNameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resetWildcardMatch">resetWildcardMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resetValue"></a>

```java
public void resetValue()
```

##### `resetWildcardMatch` <a name="resetWildcardMatch" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resetWildcardMatch"></a>

```java
public void resetWildcardMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatchInput">wildcardMatchInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatch">wildcardMatch</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `wildcardMatchInput`<sup>Optional</sup> <a name="wildcardMatchInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatchInput"></a>

```java
public java.lang.Object getWildcardMatchInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `wildcardMatch`<sup>Required</sup> <a name="wildcardMatch" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatch"></a>

```java
public java.lang.Object getWildcardMatch();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.internalValue"></a>

```java
public ApigeeTargetServerSSlInfoCommonName getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a>

---


### ApigeeTargetServerSSlInfoOutputReference <a name="ApigeeTargetServerSSlInfoOutputReference" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_target_server.ApigeeTargetServerSSlInfoOutputReference;

new ApigeeTargetServerSSlInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.putCommonName">putCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetCiphers">resetCiphers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetClientAuthEnabled">resetClientAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetIgnoreValidationErrors">resetIgnoreValidationErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetKeyAlias">resetKeyAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetKeyStore">resetKeyStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetTrustStore">resetTrustStore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCommonName` <a name="putCommonName" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.putCommonName"></a>

```java
public void putCommonName(ApigeeTargetServerSSlInfoCommonName value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.putCommonName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a>

---

##### `resetCiphers` <a name="resetCiphers" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetCiphers"></a>

```java
public void resetCiphers()
```

##### `resetClientAuthEnabled` <a name="resetClientAuthEnabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetClientAuthEnabled"></a>

```java
public void resetClientAuthEnabled()
```

##### `resetCommonName` <a name="resetCommonName" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetCommonName"></a>

```java
public void resetCommonName()
```

##### `resetIgnoreValidationErrors` <a name="resetIgnoreValidationErrors" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetIgnoreValidationErrors"></a>

```java
public void resetIgnoreValidationErrors()
```

##### `resetKeyAlias` <a name="resetKeyAlias" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetKeyAlias"></a>

```java
public void resetKeyAlias()
```

##### `resetKeyStore` <a name="resetKeyStore" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetKeyStore"></a>

```java
public void resetKeyStore()
```

##### `resetProtocols` <a name="resetProtocols" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetProtocols"></a>

```java
public void resetProtocols()
```

##### `resetTrustStore` <a name="resetTrustStore" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetTrustStore"></a>

```java
public void resetTrustStore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.commonName">commonName</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference">ApigeeTargetServerSSlInfoCommonNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ciphersInput">ciphersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabledInput">clientAuthEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.commonNameInput">commonNameInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrorsInput">ignoreValidationErrorsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyAliasInput">keyAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyStoreInput">keyStoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.trustStoreInput">trustStoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ciphers">ciphers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabled">clientAuthEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrors">ignoreValidationErrors</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyAlias">keyAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyStore">keyStore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.trustStore">trustStore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.commonName"></a>

```java
public ApigeeTargetServerSSlInfoCommonNameOutputReference getCommonName();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference">ApigeeTargetServerSSlInfoCommonNameOutputReference</a>

---

##### `ciphersInput`<sup>Optional</sup> <a name="ciphersInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ciphersInput"></a>

```java
public java.util.List<java.lang.String> getCiphersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientAuthEnabledInput`<sup>Optional</sup> <a name="clientAuthEnabledInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabledInput"></a>

```java
public java.lang.Object getClientAuthEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.commonNameInput"></a>

```java
public ApigeeTargetServerSSlInfoCommonName getCommonNameInput();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ignoreValidationErrorsInput`<sup>Optional</sup> <a name="ignoreValidationErrorsInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrorsInput"></a>

```java
public java.lang.Object getIgnoreValidationErrorsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyAliasInput`<sup>Optional</sup> <a name="keyAliasInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyAliasInput"></a>

```java
public java.lang.String getKeyAliasInput();
```

- *Type:* java.lang.String

---

##### `keyStoreInput`<sup>Optional</sup> <a name="keyStoreInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyStoreInput"></a>

```java
public java.lang.String getKeyStoreInput();
```

- *Type:* java.lang.String

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.protocolsInput"></a>

```java
public java.util.List<java.lang.String> getProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trustStoreInput`<sup>Optional</sup> <a name="trustStoreInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.trustStoreInput"></a>

```java
public java.lang.String getTrustStoreInput();
```

- *Type:* java.lang.String

---

##### `ciphers`<sup>Required</sup> <a name="ciphers" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ciphers"></a>

```java
public java.util.List<java.lang.String> getCiphers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientAuthEnabled`<sup>Required</sup> <a name="clientAuthEnabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabled"></a>

```java
public java.lang.Object getClientAuthEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ignoreValidationErrors`<sup>Required</sup> <a name="ignoreValidationErrors" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrors"></a>

```java
public java.lang.Object getIgnoreValidationErrors();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyAlias`<sup>Required</sup> <a name="keyAlias" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyAlias"></a>

```java
public java.lang.String getKeyAlias();
```

- *Type:* java.lang.String

---

##### `keyStore`<sup>Required</sup> <a name="keyStore" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyStore"></a>

```java
public java.lang.String getKeyStore();
```

- *Type:* java.lang.String

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `trustStore`<sup>Required</sup> <a name="trustStore" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.trustStore"></a>

```java
public java.lang.String getTrustStore();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.internalValue"></a>

```java
public ApigeeTargetServerSSlInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a>

---


### ApigeeTargetServerTimeoutsOutputReference <a name="ApigeeTargetServerTimeoutsOutputReference" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.apigee_target_server.ApigeeTargetServerTimeoutsOutputReference;

new ApigeeTargetServerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a>

---



