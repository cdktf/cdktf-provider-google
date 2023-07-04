# `google_game_services_game_server_cluster`

Refer to the Terraform Registory for docs: [`google_game_services_game_server_cluster`](https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster).

# `gameServicesGameServerCluster` Submodule <a name="`gameServicesGameServerCluster` Submodule" id="@cdktf/provider-google.gameServicesGameServerCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameServicesGameServerCluster <a name="GameServicesGameServerCluster" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster google_game_services_game_server_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_cluster.GameServicesGameServerCluster;

GameServicesGameServerCluster.Builder.create(Construct scope, java.lang.String id)
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
    .clusterId(java.lang.String)
    .connectionInfo(GameServicesGameServerClusterConnectionInfo)
    .realmId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GameServicesGameServerClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Required. The resource name of the game server cluster. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.connectionInfo">connectionInfo</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a></code> | connection_info block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.realmId">realmId</a></code> | <code>java.lang.String</code> | The realm id of the game server realm. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human readable description of the cluster. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#id GameServicesGameServerCluster#id}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this game server cluster. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location of the Cluster. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#project GameServicesGameServerCluster#project}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Required. The resource name of the game server cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#cluster_id GameServicesGameServerCluster#cluster_id}

---

##### `connectionInfo`<sup>Required</sup> <a name="connectionInfo" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.connectionInfo"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a>

connection_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#connection_info GameServicesGameServerCluster#connection_info}

---

##### `realmId`<sup>Required</sup> <a name="realmId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.realmId"></a>

- *Type:* java.lang.String

The realm id of the game server realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#realm_id GameServicesGameServerCluster#realm_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Human readable description of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#description GameServicesGameServerCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#id GameServicesGameServerCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this game server cluster. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#labels GameServicesGameServerCluster#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location of the Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#location GameServicesGameServerCluster#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#project GameServicesGameServerCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#timeouts GameServicesGameServerCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putConnectionInfo">putConnectionInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putConnectionInfo` <a name="putConnectionInfo" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putConnectionInfo"></a>

```java
public void putConnectionInfo(GameServicesGameServerClusterConnectionInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putConnectionInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putTimeouts"></a>

```java
public void putTimeouts(GameServicesGameServerClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_cluster.GameServicesGameServerCluster;

GameServicesGameServerCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_cluster.GameServicesGameServerCluster;

GameServicesGameServerCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_cluster.GameServicesGameServerCluster;

GameServicesGameServerCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connectionInfo">connectionInfo</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference">GameServicesGameServerClusterConnectionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference">GameServicesGameServerClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connectionInfoInput">connectionInfoInput</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.realmIdInput">realmIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.realmId">realmId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionInfo`<sup>Required</sup> <a name="connectionInfo" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connectionInfo"></a>

```java
public GameServicesGameServerClusterConnectionInfoOutputReference getConnectionInfo();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference">GameServicesGameServerClusterConnectionInfoOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.timeouts"></a>

```java
public GameServicesGameServerClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference">GameServicesGameServerClusterTimeoutsOutputReference</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `connectionInfoInput`<sup>Optional</sup> <a name="connectionInfoInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connectionInfoInput"></a>

```java
public GameServicesGameServerClusterConnectionInfo getConnectionInfoInput();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `realmIdInput`<sup>Optional</sup> <a name="realmIdInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.realmIdInput"></a>

```java
public java.lang.String getRealmIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `realmId`<sup>Required</sup> <a name="realmId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.realmId"></a>

```java
public java.lang.String getRealmId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GameServicesGameServerClusterConfig <a name="GameServicesGameServerClusterConfig" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_cluster.GameServicesGameServerClusterConfig;

GameServicesGameServerClusterConfig.builder()
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
    .clusterId(java.lang.String)
    .connectionInfo(GameServicesGameServerClusterConnectionInfo)
    .realmId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GameServicesGameServerClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Required. The resource name of the game server cluster. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.connectionInfo">connectionInfo</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a></code> | connection_info block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.realmId">realmId</a></code> | <code>java.lang.String</code> | The realm id of the game server realm. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human readable description of the cluster. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#id GameServicesGameServerCluster#id}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this game server cluster. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location of the Cluster. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#project GameServicesGameServerCluster#project}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Required. The resource name of the game server cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#cluster_id GameServicesGameServerCluster#cluster_id}

---

##### `connectionInfo`<sup>Required</sup> <a name="connectionInfo" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.connectionInfo"></a>

```java
public GameServicesGameServerClusterConnectionInfo getConnectionInfo();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a>

connection_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#connection_info GameServicesGameServerCluster#connection_info}

---

##### `realmId`<sup>Required</sup> <a name="realmId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.realmId"></a>

```java
public java.lang.String getRealmId();
```

- *Type:* java.lang.String

The realm id of the game server realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#realm_id GameServicesGameServerCluster#realm_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human readable description of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#description GameServicesGameServerCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#id GameServicesGameServerCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this game server cluster. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#labels GameServicesGameServerCluster#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location of the Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#location GameServicesGameServerCluster#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#project GameServicesGameServerCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.timeouts"></a>

```java
public GameServicesGameServerClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#timeouts GameServicesGameServerCluster#timeouts}

---

### GameServicesGameServerClusterConnectionInfo <a name="GameServicesGameServerClusterConnectionInfo" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_cluster.GameServicesGameServerClusterConnectionInfo;

GameServicesGameServerClusterConnectionInfo.builder()
    .gkeClusterReference(GameServicesGameServerClusterConnectionInfoGkeClusterReference)
    .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo.property.gkeClusterReference">gkeClusterReference</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a></code> | gke_cluster_reference block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace designated on the game server cluster where the game server instances will be created. |

---

##### `gkeClusterReference`<sup>Required</sup> <a name="gkeClusterReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo.property.gkeClusterReference"></a>

```java
public GameServicesGameServerClusterConnectionInfoGkeClusterReference getGkeClusterReference();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

gke_cluster_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#gke_cluster_reference GameServicesGameServerCluster#gke_cluster_reference}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace designated on the game server cluster where the game server instances will be created.

The namespace existence will be validated
during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#namespace GameServicesGameServerCluster#namespace}

---

### GameServicesGameServerClusterConnectionInfoGkeClusterReference <a name="GameServicesGameServerClusterConnectionInfoGkeClusterReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_cluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference;

GameServicesGameServerClusterConnectionInfoGkeClusterReference.builder()
    .cluster(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The full or partial name of a GKE cluster, using one of the following forms:. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The full or partial name of a GKE cluster, using one of the following forms:.

'projects/{project_id}/locations/{location}/clusters/{cluster_id}'
'locations/{location}/clusters/{cluster_id}'
'{cluster_id}'

If project and location are not specified, the project and location of the
GameServerCluster resource are used to generate the full name of the
GKE cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#cluster GameServicesGameServerCluster#cluster}

---

### GameServicesGameServerClusterTimeouts <a name="GameServicesGameServerClusterTimeouts" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_cluster.GameServicesGameServerClusterTimeouts;

GameServicesGameServerClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#create GameServicesGameServerCluster#create}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#delete GameServicesGameServerCluster#delete}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#update GameServicesGameServerCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#create GameServicesGameServerCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#delete GameServicesGameServerCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/game_services_game_server_cluster#update GameServicesGameServerCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference <a name="GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_cluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference;

new GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.internalValue"></a>

```java
public GameServicesGameServerClusterConnectionInfoGkeClusterReference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

---


### GameServicesGameServerClusterConnectionInfoOutputReference <a name="GameServicesGameServerClusterConnectionInfoOutputReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_cluster.GameServicesGameServerClusterConnectionInfoOutputReference;

new GameServicesGameServerClusterConnectionInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.putGkeClusterReference">putGkeClusterReference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGkeClusterReference` <a name="putGkeClusterReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.putGkeClusterReference"></a>

```java
public void putGkeClusterReference(GameServicesGameServerClusterConnectionInfoGkeClusterReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.putGkeClusterReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReference">gkeClusterReference</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference">GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReferenceInput">gkeClusterReferenceInput</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gkeClusterReference`<sup>Required</sup> <a name="gkeClusterReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReference"></a>

```java
public GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference getGkeClusterReference();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference">GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference</a>

---

##### `gkeClusterReferenceInput`<sup>Optional</sup> <a name="gkeClusterReferenceInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReferenceInput"></a>

```java
public GameServicesGameServerClusterConnectionInfoGkeClusterReference getGkeClusterReferenceInput();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.internalValue"></a>

```java
public GameServicesGameServerClusterConnectionInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a>

---


### GameServicesGameServerClusterTimeoutsOutputReference <a name="GameServicesGameServerClusterTimeoutsOutputReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_cluster.GameServicesGameServerClusterTimeoutsOutputReference;

new GameServicesGameServerClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a>

---



