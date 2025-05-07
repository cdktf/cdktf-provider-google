# `redisClusterUserCreatedConnections` Submodule <a name="`redisClusterUserCreatedConnections` Submodule" id="@cdktf/provider-google.redisClusterUserCreatedConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisClusterUserCreatedConnections <a name="RedisClusterUserCreatedConnections" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections google_redis_cluster_user_created_connections}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster_user_created_connections.RedisClusterUserCreatedConnections;

RedisClusterUserCreatedConnections.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .region(java.lang.String)
//  .clusterEndpoints(IResolvable)
//  .clusterEndpoints(java.util.List<RedisClusterUserCreatedConnectionsClusterEndpoints>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(RedisClusterUserCreatedConnectionsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Redis cluster these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The name of the region of the Redis cluster these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.clusterEndpoints">clusterEndpoints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints">RedisClusterUserCreatedConnectionsClusterEndpoints</a>></code> | cluster_endpoints block. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#id RedisClusterUserCreatedConnections#id}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#project RedisClusterUserCreatedConnections#project}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts">RedisClusterUserCreatedConnectionsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Redis cluster these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#name RedisClusterUserCreatedConnections#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The name of the region of the Redis cluster these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#region RedisClusterUserCreatedConnections#region}

---

##### `clusterEndpoints`<sup>Optional</sup> <a name="clusterEndpoints" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.clusterEndpoints"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints">RedisClusterUserCreatedConnectionsClusterEndpoints</a>>

cluster_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#cluster_endpoints RedisClusterUserCreatedConnections#cluster_endpoints}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#id RedisClusterUserCreatedConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#project RedisClusterUserCreatedConnections#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts">RedisClusterUserCreatedConnectionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#timeouts RedisClusterUserCreatedConnections#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.putClusterEndpoints">putClusterEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetClusterEndpoints">resetClusterEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClusterEndpoints` <a name="putClusterEndpoints" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.putClusterEndpoints"></a>

```java
public void putClusterEndpoints(IResolvable OR java.util.List<RedisClusterUserCreatedConnectionsClusterEndpoints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.putClusterEndpoints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints">RedisClusterUserCreatedConnectionsClusterEndpoints</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.putTimeouts"></a>

```java
public void putTimeouts(RedisClusterUserCreatedConnectionsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts">RedisClusterUserCreatedConnectionsTimeouts</a>

---

##### `resetClusterEndpoints` <a name="resetClusterEndpoints" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetClusterEndpoints"></a>

```java
public void resetClusterEndpoints()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RedisClusterUserCreatedConnections resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster_user_created_connections.RedisClusterUserCreatedConnections;

RedisClusterUserCreatedConnections.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster_user_created_connections.RedisClusterUserCreatedConnections;

RedisClusterUserCreatedConnections.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster_user_created_connections.RedisClusterUserCreatedConnections;

RedisClusterUserCreatedConnections.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster_user_created_connections.RedisClusterUserCreatedConnections;

RedisClusterUserCreatedConnections.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RedisClusterUserCreatedConnections.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RedisClusterUserCreatedConnections resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RedisClusterUserCreatedConnections to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RedisClusterUserCreatedConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RedisClusterUserCreatedConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.clusterEndpoints">clusterEndpoints</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList">RedisClusterUserCreatedConnectionsClusterEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference">RedisClusterUserCreatedConnectionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.clusterEndpointsInput">clusterEndpointsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints">RedisClusterUserCreatedConnectionsClusterEndpoints</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts">RedisClusterUserCreatedConnectionsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterEndpoints`<sup>Required</sup> <a name="clusterEndpoints" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.clusterEndpoints"></a>

```java
public RedisClusterUserCreatedConnectionsClusterEndpointsList getClusterEndpoints();
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList">RedisClusterUserCreatedConnectionsClusterEndpointsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.timeouts"></a>

```java
public RedisClusterUserCreatedConnectionsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference">RedisClusterUserCreatedConnectionsTimeoutsOutputReference</a>

---

##### `clusterEndpointsInput`<sup>Optional</sup> <a name="clusterEndpointsInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.clusterEndpointsInput"></a>

```java
public java.lang.Object getClusterEndpointsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints">RedisClusterUserCreatedConnectionsClusterEndpoints</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts">RedisClusterUserCreatedConnectionsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnections.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedisClusterUserCreatedConnectionsClusterEndpoints <a name="RedisClusterUserCreatedConnectionsClusterEndpoints" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster_user_created_connections.RedisClusterUserCreatedConnectionsClusterEndpoints;

RedisClusterUserCreatedConnectionsClusterEndpoints.builder()
//  .connections(IResolvable)
//  .connections(java.util.List<RedisClusterUserCreatedConnectionsClusterEndpointsConnections>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints.property.connections">connections</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections">RedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>></code> | connections block. |

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints.property.connections"></a>

```java
public java.lang.Object getConnections();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections">RedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>>

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#connections RedisClusterUserCreatedConnections#connections}

---

### RedisClusterUserCreatedConnectionsClusterEndpointsConnections <a name="RedisClusterUserCreatedConnectionsClusterEndpointsConnections" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster_user_created_connections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections;

RedisClusterUserCreatedConnectionsClusterEndpointsConnections.builder()
//  .pscConnection(RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections.property.pscConnection">pscConnection</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a></code> | psc_connection block. |

---

##### `pscConnection`<sup>Optional</sup> <a name="pscConnection" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections.property.pscConnection"></a>

```java
public RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection getPscConnection();
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

psc_connection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#psc_connection RedisClusterUserCreatedConnections#psc_connection}

---

### RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection <a name="RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster_user_created_connections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection;

RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.builder()
    .address(java.lang.String)
    .forwardingRule(java.lang.String)
    .network(java.lang.String)
    .pscConnectionId(java.lang.String)
    .serviceAttachment(java.lang.String)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.address">address</a></code> | <code>java.lang.String</code> | The IP allocated on the consumer network for the PSC forwarding rule. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.forwardingRule">forwardingRule</a></code> | <code>java.lang.String</code> | The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.network">network</a></code> | <code>java.lang.String</code> | The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.pscConnectionId">pscConnectionId</a></code> | <code>java.lang.String</code> | The PSC connection id of the forwarding rule connected to the service attachment. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.serviceAttachment">serviceAttachment</a></code> | <code>java.lang.String</code> | The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The consumer project_id where the forwarding rule is created from. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The IP allocated on the consumer network for the PSC forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#address RedisClusterUserCreatedConnections#address}

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.forwardingRule"></a>

```java
public java.lang.String getForwardingRule();
```

- *Type:* java.lang.String

The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#forwarding_rule RedisClusterUserCreatedConnections#forwarding_rule}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#network RedisClusterUserCreatedConnections#network}

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.pscConnectionId"></a>

```java
public java.lang.String getPscConnectionId();
```

- *Type:* java.lang.String

The PSC connection id of the forwarding rule connected to the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#psc_connection_id RedisClusterUserCreatedConnections#psc_connection_id}

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.serviceAttachment"></a>

```java
public java.lang.String getServiceAttachment();
```

- *Type:* java.lang.String

The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#service_attachment RedisClusterUserCreatedConnections#service_attachment}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The consumer project_id where the forwarding rule is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#project_id RedisClusterUserCreatedConnections#project_id}

---

### RedisClusterUserCreatedConnectionsConfig <a name="RedisClusterUserCreatedConnectionsConfig" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster_user_created_connections.RedisClusterUserCreatedConnectionsConfig;

RedisClusterUserCreatedConnectionsConfig.builder()
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
    .name(java.lang.String)
    .region(java.lang.String)
//  .clusterEndpoints(IResolvable)
//  .clusterEndpoints(java.util.List<RedisClusterUserCreatedConnectionsClusterEndpoints>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(RedisClusterUserCreatedConnectionsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Redis cluster these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.region">region</a></code> | <code>java.lang.String</code> | The name of the region of the Redis cluster these endpoints should be added to. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.clusterEndpoints">clusterEndpoints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints">RedisClusterUserCreatedConnectionsClusterEndpoints</a>></code> | cluster_endpoints block. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#id RedisClusterUserCreatedConnections#id}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#project RedisClusterUserCreatedConnections#project}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts">RedisClusterUserCreatedConnectionsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Redis cluster these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#name RedisClusterUserCreatedConnections#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The name of the region of the Redis cluster these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#region RedisClusterUserCreatedConnections#region}

---

##### `clusterEndpoints`<sup>Optional</sup> <a name="clusterEndpoints" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.clusterEndpoints"></a>

```java
public java.lang.Object getClusterEndpoints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints">RedisClusterUserCreatedConnectionsClusterEndpoints</a>>

cluster_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#cluster_endpoints RedisClusterUserCreatedConnections#cluster_endpoints}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#id RedisClusterUserCreatedConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#project RedisClusterUserCreatedConnections#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsConfig.property.timeouts"></a>

```java
public RedisClusterUserCreatedConnectionsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts">RedisClusterUserCreatedConnectionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#timeouts RedisClusterUserCreatedConnections#timeouts}

---

### RedisClusterUserCreatedConnectionsTimeouts <a name="RedisClusterUserCreatedConnectionsTimeouts" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster_user_created_connections.RedisClusterUserCreatedConnectionsTimeouts;

RedisClusterUserCreatedConnectionsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#create RedisClusterUserCreatedConnections#create}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#delete RedisClusterUserCreatedConnections#delete}. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#update RedisClusterUserCreatedConnections#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#create RedisClusterUserCreatedConnections#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#delete RedisClusterUserCreatedConnections#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/redis_cluster_user_created_connections#update RedisClusterUserCreatedConnections#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList <a name="RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster_user_created_connections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList;

new RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.get"></a>

```java
public RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections">RedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections">RedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>>

---


### RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference <a name="RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster_user_created_connections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference;

new RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection">putPscConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resetPscConnection">resetPscConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPscConnection` <a name="putPscConnection" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection"></a>

```java
public void putPscConnection(RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

---

##### `resetPscConnection` <a name="resetPscConnection" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resetPscConnection"></a>

```java
public void resetPscConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnection">pscConnection</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnectionInput">pscConnectionInput</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections">RedisClusterUserCreatedConnectionsClusterEndpointsConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pscConnection`<sup>Required</sup> <a name="pscConnection" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnection"></a>

```java
public RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference getPscConnection();
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference</a>

---

##### `pscConnectionInput`<sup>Optional</sup> <a name="pscConnectionInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnectionInput"></a>

```java
public RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection getPscConnectionInput();
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections">RedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>

---


### RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference <a name="RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster_user_created_connections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference;

new RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resetProjectId"></a>

```java
public void resetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionStatus">pscConnectionStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRuleInput">forwardingRuleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionIdInput">pscConnectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachmentInput">serviceAttachmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRule">forwardingRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionId">pscConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachment">serviceAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `pscConnectionStatus`<sup>Required</sup> <a name="pscConnectionStatus" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionStatus"></a>

```java
public java.lang.String getPscConnectionStatus();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `forwardingRuleInput`<sup>Optional</sup> <a name="forwardingRuleInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRuleInput"></a>

```java
public java.lang.String getForwardingRuleInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `pscConnectionIdInput`<sup>Optional</sup> <a name="pscConnectionIdInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionIdInput"></a>

```java
public java.lang.String getPscConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `serviceAttachmentInput`<sup>Optional</sup> <a name="serviceAttachmentInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachmentInput"></a>

```java
public java.lang.String getServiceAttachmentInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRule"></a>

```java
public java.lang.String getForwardingRule();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionId"></a>

```java
public java.lang.String getPscConnectionId();
```

- *Type:* java.lang.String

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachment"></a>

```java
public java.lang.String getServiceAttachment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.internalValue"></a>

```java
public RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

---


### RedisClusterUserCreatedConnectionsClusterEndpointsList <a name="RedisClusterUserCreatedConnectionsClusterEndpointsList" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster_user_created_connections.RedisClusterUserCreatedConnectionsClusterEndpointsList;

new RedisClusterUserCreatedConnectionsClusterEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.get"></a>

```java
public RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints">RedisClusterUserCreatedConnectionsClusterEndpoints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints">RedisClusterUserCreatedConnectionsClusterEndpoints</a>>

---


### RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference <a name="RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster_user_created_connections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference;

new RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.putConnections">putConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resetConnections">resetConnections</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnections` <a name="putConnections" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.putConnections"></a>

```java
public void putConnections(IResolvable OR java.util.List<RedisClusterUserCreatedConnectionsClusterEndpointsConnections> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.putConnections.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections">RedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>>

---

##### `resetConnections` <a name="resetConnections" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resetConnections"></a>

```java
public void resetConnections()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connectionsInput">connectionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections">RedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints">RedisClusterUserCreatedConnectionsClusterEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connections"></a>

```java
public RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList getConnections();
```

- *Type:* <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList">RedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList</a>

---

##### `connectionsInput`<sup>Optional</sup> <a name="connectionsInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connectionsInput"></a>

```java
public java.lang.Object getConnectionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsConnections">RedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsClusterEndpoints">RedisClusterUserCreatedConnectionsClusterEndpoints</a>

---


### RedisClusterUserCreatedConnectionsTimeoutsOutputReference <a name="RedisClusterUserCreatedConnectionsTimeoutsOutputReference" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.redis_cluster_user_created_connections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference;

new RedisClusterUserCreatedConnectionsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts">RedisClusterUserCreatedConnectionsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.redisClusterUserCreatedConnections.RedisClusterUserCreatedConnectionsTimeouts">RedisClusterUserCreatedConnectionsTimeouts</a>

---



