# `google_game_services_game_server_config`

Refer to the Terraform Registory for docs: [`google_game_services_game_server_config`](https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config).

# `gameServicesGameServerConfig` Submodule <a name="`gameServicesGameServerConfig` Submodule" id="@cdktf/provider-google.gameServicesGameServerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameServicesGameServerConfig <a name="GameServicesGameServerConfig" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config google_game_services_game_server_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_config.GameServicesGameServerConfig;

GameServicesGameServerConfig.Builder.create(Construct scope, java.lang.String id)
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
    .configId(java.lang.String)
    .deploymentId(java.lang.String)
    .fleetConfigs(IResolvable)
    .fleetConfigs(java.util.List<GameServicesGameServerConfigFleetConfigs>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .scalingConfigs(IResolvable)
//  .scalingConfigs(java.util.List<GameServicesGameServerConfigScalingConfigs>)
//  .timeouts(GameServicesGameServerConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.configId">configId</a></code> | <code>java.lang.String</code> | A unique id for the deployment config. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | A unique id for the deployment. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.fleetConfigs">fleetConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs">GameServicesGameServerConfigFleetConfigs</a>></code> | fleet_configs block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the game server config. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#id GameServicesGameServerConfig#id}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this game server config. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location of the Deployment. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#project GameServicesGameServerConfig#project}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.scalingConfigs">scalingConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs">GameServicesGameServerConfigScalingConfigs</a>></code> | scaling_configs block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts">GameServicesGameServerConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.configId"></a>

- *Type:* java.lang.String

A unique id for the deployment config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#config_id GameServicesGameServerConfig#config_id}

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.deploymentId"></a>

- *Type:* java.lang.String

A unique id for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#deployment_id GameServicesGameServerConfig#deployment_id}

---

##### `fleetConfigs`<sup>Required</sup> <a name="fleetConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.fleetConfigs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs">GameServicesGameServerConfigFleetConfigs</a>>

fleet_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#fleet_configs GameServicesGameServerConfig#fleet_configs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the game server config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#description GameServicesGameServerConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#id GameServicesGameServerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this game server config. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#labels GameServicesGameServerConfig#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location of the Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#location GameServicesGameServerConfig#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#project GameServicesGameServerConfig#project}.

---

##### `scalingConfigs`<sup>Optional</sup> <a name="scalingConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.scalingConfigs"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs">GameServicesGameServerConfigScalingConfigs</a>>

scaling_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#scaling_configs GameServicesGameServerConfig#scaling_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts">GameServicesGameServerConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#timeouts GameServicesGameServerConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putFleetConfigs">putFleetConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putScalingConfigs">putScalingConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetScalingConfigs">resetScalingConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFleetConfigs` <a name="putFleetConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putFleetConfigs"></a>

```java
public void putFleetConfigs(IResolvable OR java.util.List<GameServicesGameServerConfigFleetConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putFleetConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs">GameServicesGameServerConfigFleetConfigs</a>>

---

##### `putScalingConfigs` <a name="putScalingConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putScalingConfigs"></a>

```java
public void putScalingConfigs(IResolvable OR java.util.List<GameServicesGameServerConfigScalingConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putScalingConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs">GameServicesGameServerConfigScalingConfigs</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putTimeouts"></a>

```java
public void putTimeouts(GameServicesGameServerConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts">GameServicesGameServerConfigTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetScalingConfigs` <a name="resetScalingConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetScalingConfigs"></a>

```java
public void resetScalingConfigs()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_config.GameServicesGameServerConfig;

GameServicesGameServerConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_config.GameServicesGameServerConfig;

GameServicesGameServerConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_config.GameServicesGameServerConfig;

GameServicesGameServerConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.fleetConfigs">fleetConfigs</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList">GameServicesGameServerConfigFleetConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.scalingConfigs">scalingConfigs</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList">GameServicesGameServerConfigScalingConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference">GameServicesGameServerConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.configIdInput">configIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.deploymentIdInput">deploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.fleetConfigsInput">fleetConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs">GameServicesGameServerConfigFleetConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.scalingConfigsInput">scalingConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs">GameServicesGameServerConfigScalingConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts">GameServicesGameServerConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.configId">configId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fleetConfigs`<sup>Required</sup> <a name="fleetConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.fleetConfigs"></a>

```java
public GameServicesGameServerConfigFleetConfigsList getFleetConfigs();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList">GameServicesGameServerConfigFleetConfigsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scalingConfigs`<sup>Required</sup> <a name="scalingConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.scalingConfigs"></a>

```java
public GameServicesGameServerConfigScalingConfigsList getScalingConfigs();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList">GameServicesGameServerConfigScalingConfigsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.timeouts"></a>

```java
public GameServicesGameServerConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference">GameServicesGameServerConfigTimeoutsOutputReference</a>

---

##### `configIdInput`<sup>Optional</sup> <a name="configIdInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.configIdInput"></a>

```java
public java.lang.String getConfigIdInput();
```

- *Type:* java.lang.String

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.deploymentIdInput"></a>

```java
public java.lang.String getDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `fleetConfigsInput`<sup>Optional</sup> <a name="fleetConfigsInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.fleetConfigsInput"></a>

```java
public java.lang.Object getFleetConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs">GameServicesGameServerConfigFleetConfigs</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `scalingConfigsInput`<sup>Optional</sup> <a name="scalingConfigsInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.scalingConfigsInput"></a>

```java
public java.lang.Object getScalingConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs">GameServicesGameServerConfigScalingConfigs</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts">GameServicesGameServerConfigTimeouts</a>

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.configId"></a>

```java
public java.lang.String getConfigId();
```

- *Type:* java.lang.String

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GameServicesGameServerConfigConfig <a name="GameServicesGameServerConfigConfig" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_config.GameServicesGameServerConfigConfig;

GameServicesGameServerConfigConfig.builder()
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
    .configId(java.lang.String)
    .deploymentId(java.lang.String)
    .fleetConfigs(IResolvable)
    .fleetConfigs(java.util.List<GameServicesGameServerConfigFleetConfigs>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .scalingConfigs(IResolvable)
//  .scalingConfigs(java.util.List<GameServicesGameServerConfigScalingConfigs>)
//  .timeouts(GameServicesGameServerConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.configId">configId</a></code> | <code>java.lang.String</code> | A unique id for the deployment config. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | A unique id for the deployment. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.fleetConfigs">fleetConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs">GameServicesGameServerConfigFleetConfigs</a>></code> | fleet_configs block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the game server config. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#id GameServicesGameServerConfig#id}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this game server config. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location of the Deployment. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#project GameServicesGameServerConfig#project}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.scalingConfigs">scalingConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs">GameServicesGameServerConfigScalingConfigs</a>></code> | scaling_configs block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts">GameServicesGameServerConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.configId"></a>

```java
public java.lang.String getConfigId();
```

- *Type:* java.lang.String

A unique id for the deployment config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#config_id GameServicesGameServerConfig#config_id}

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

A unique id for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#deployment_id GameServicesGameServerConfig#deployment_id}

---

##### `fleetConfigs`<sup>Required</sup> <a name="fleetConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.fleetConfigs"></a>

```java
public java.lang.Object getFleetConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs">GameServicesGameServerConfigFleetConfigs</a>>

fleet_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#fleet_configs GameServicesGameServerConfig#fleet_configs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the game server config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#description GameServicesGameServerConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#id GameServicesGameServerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this game server config. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#labels GameServicesGameServerConfig#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location of the Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#location GameServicesGameServerConfig#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#project GameServicesGameServerConfig#project}.

---

##### `scalingConfigs`<sup>Optional</sup> <a name="scalingConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.scalingConfigs"></a>

```java
public java.lang.Object getScalingConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs">GameServicesGameServerConfigScalingConfigs</a>>

scaling_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#scaling_configs GameServicesGameServerConfig#scaling_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.timeouts"></a>

```java
public GameServicesGameServerConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts">GameServicesGameServerConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#timeouts GameServicesGameServerConfig#timeouts}

---

### GameServicesGameServerConfigFleetConfigs <a name="GameServicesGameServerConfigFleetConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_config.GameServicesGameServerConfigFleetConfigs;

GameServicesGameServerConfigFleetConfigs.builder()
    .fleetSpec(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs.property.fleetSpec">fleetSpec</a></code> | <code>java.lang.String</code> | The fleet spec, which is sent to Agones to configure fleet. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs.property.name">name</a></code> | <code>java.lang.String</code> | The name of the FleetConfig. |

---

##### `fleetSpec`<sup>Required</sup> <a name="fleetSpec" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs.property.fleetSpec"></a>

```java
public java.lang.String getFleetSpec();
```

- *Type:* java.lang.String

The fleet spec, which is sent to Agones to configure fleet.

The spec can be passed as inline json but it is recommended to use a file reference
instead. File references can contain the json or yaml format of the fleet spec. Eg:

fleet_spec = jsonencode(yamldecode(file("fleet_configs.yaml")))
fleet_spec = file("fleet_configs.json")

The format of the spec can be found :
'https://agones.dev/site/docs/reference/fleet/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#fleet_spec GameServicesGameServerConfig#fleet_spec}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the FleetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#name GameServicesGameServerConfig#name}

---

### GameServicesGameServerConfigScalingConfigs <a name="GameServicesGameServerConfigScalingConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_config.GameServicesGameServerConfigScalingConfigs;

GameServicesGameServerConfigScalingConfigs.builder()
    .fleetAutoscalerSpec(java.lang.String)
    .name(java.lang.String)
//  .schedules(IResolvable)
//  .schedules(java.util.List<GameServicesGameServerConfigScalingConfigsSchedules>)
//  .selectors(IResolvable)
//  .selectors(java.util.List<GameServicesGameServerConfigScalingConfigsSelectors>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.fleetAutoscalerSpec">fleetAutoscalerSpec</a></code> | <code>java.lang.String</code> | Fleet autoscaler spec, which is sent to Agones. Example spec can be found : https://agones.dev/site/docs/reference/fleetautoscaler/. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.name">name</a></code> | <code>java.lang.String</code> | The name of the ScalingConfig. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.schedules">schedules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules">GameServicesGameServerConfigScalingConfigsSchedules</a>></code> | schedules block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.selectors">selectors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors">GameServicesGameServerConfigScalingConfigsSelectors</a>></code> | selectors block. |

---

##### `fleetAutoscalerSpec`<sup>Required</sup> <a name="fleetAutoscalerSpec" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.fleetAutoscalerSpec"></a>

```java
public java.lang.String getFleetAutoscalerSpec();
```

- *Type:* java.lang.String

Fleet autoscaler spec, which is sent to Agones. Example spec can be found : https://agones.dev/site/docs/reference/fleetautoscaler/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#fleet_autoscaler_spec GameServicesGameServerConfig#fleet_autoscaler_spec}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the ScalingConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#name GameServicesGameServerConfig#name}

---

##### `schedules`<sup>Optional</sup> <a name="schedules" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.schedules"></a>

```java
public java.lang.Object getSchedules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules">GameServicesGameServerConfigScalingConfigsSchedules</a>>

schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#schedules GameServicesGameServerConfig#schedules}

---

##### `selectors`<sup>Optional</sup> <a name="selectors" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.selectors"></a>

```java
public java.lang.Object getSelectors();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors">GameServicesGameServerConfigScalingConfigsSelectors</a>>

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#selectors GameServicesGameServerConfig#selectors}

---

### GameServicesGameServerConfigScalingConfigsSchedules <a name="GameServicesGameServerConfigScalingConfigsSchedules" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_config.GameServicesGameServerConfigScalingConfigsSchedules;

GameServicesGameServerConfigScalingConfigsSchedules.builder()
//  .cronJobDuration(java.lang.String)
//  .cronSpec(java.lang.String)
//  .endTime(java.lang.String)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.cronJobDuration">cronJobDuration</a></code> | <code>java.lang.String</code> | The duration for the cron job event. The duration of the event is effective after the cron job's start time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.cronSpec">cronSpec</a></code> | <code>java.lang.String</code> | The cron definition of the scheduled event. See https://en.wikipedia.org/wiki/Cron. Cron spec specifies the local time as defined by the realm. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.endTime">endTime</a></code> | <code>java.lang.String</code> | The end time of the event. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.startTime">startTime</a></code> | <code>java.lang.String</code> | The start time of the event. |

---

##### `cronJobDuration`<sup>Optional</sup> <a name="cronJobDuration" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.cronJobDuration"></a>

```java
public java.lang.String getCronJobDuration();
```

- *Type:* java.lang.String

The duration for the cron job event. The duration of the event is effective after the cron job's start time.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#cron_job_duration GameServicesGameServerConfig#cron_job_duration}

---

##### `cronSpec`<sup>Optional</sup> <a name="cronSpec" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.cronSpec"></a>

```java
public java.lang.String getCronSpec();
```

- *Type:* java.lang.String

The cron definition of the scheduled event. See https://en.wikipedia.org/wiki/Cron. Cron spec specifies the local time as defined by the realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#cron_spec GameServicesGameServerConfig#cron_spec}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

The end time of the event.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#end_time GameServicesGameServerConfig#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

The start time of the event.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#start_time GameServicesGameServerConfig#start_time}

---

### GameServicesGameServerConfigScalingConfigsSelectors <a name="GameServicesGameServerConfigScalingConfigsSelectors" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_config.GameServicesGameServerConfigScalingConfigsSelectors;

GameServicesGameServerConfigScalingConfigsSelectors.builder()
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of labels to group by. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of labels to group by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#labels GameServicesGameServerConfig#labels}

---

### GameServicesGameServerConfigTimeouts <a name="GameServicesGameServerConfigTimeouts" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_config.GameServicesGameServerConfigTimeouts;

GameServicesGameServerConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#create GameServicesGameServerConfig#create}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#delete GameServicesGameServerConfig#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#create GameServicesGameServerConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/game_services_game_server_config#delete GameServicesGameServerConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameServicesGameServerConfigFleetConfigsList <a name="GameServicesGameServerConfigFleetConfigsList" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_config.GameServicesGameServerConfigFleetConfigsList;

new GameServicesGameServerConfigFleetConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.get"></a>

```java
public GameServicesGameServerConfigFleetConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs">GameServicesGameServerConfigFleetConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs">GameServicesGameServerConfigFleetConfigs</a>>

---


### GameServicesGameServerConfigFleetConfigsOutputReference <a name="GameServicesGameServerConfigFleetConfigsOutputReference" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_config.GameServicesGameServerConfigFleetConfigsOutputReference;

new GameServicesGameServerConfigFleetConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpecInput">fleetSpecInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpec">fleetSpec</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs">GameServicesGameServerConfigFleetConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fleetSpecInput`<sup>Optional</sup> <a name="fleetSpecInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpecInput"></a>

```java
public java.lang.String getFleetSpecInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `fleetSpec`<sup>Required</sup> <a name="fleetSpec" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpec"></a>

```java
public java.lang.String getFleetSpec();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs">GameServicesGameServerConfigFleetConfigs</a>

---


### GameServicesGameServerConfigScalingConfigsList <a name="GameServicesGameServerConfigScalingConfigsList" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_config.GameServicesGameServerConfigScalingConfigsList;

new GameServicesGameServerConfigScalingConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.get"></a>

```java
public GameServicesGameServerConfigScalingConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs">GameServicesGameServerConfigScalingConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs">GameServicesGameServerConfigScalingConfigs</a>>

---


### GameServicesGameServerConfigScalingConfigsOutputReference <a name="GameServicesGameServerConfigScalingConfigsOutputReference" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_config.GameServicesGameServerConfigScalingConfigsOutputReference;

new GameServicesGameServerConfigScalingConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.putSchedules">putSchedules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.putSelectors">putSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.resetSchedules">resetSchedules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.resetSelectors">resetSelectors</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchedules` <a name="putSchedules" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.putSchedules"></a>

```java
public void putSchedules(IResolvable OR java.util.List<GameServicesGameServerConfigScalingConfigsSchedules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.putSchedules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules">GameServicesGameServerConfigScalingConfigsSchedules</a>>

---

##### `putSelectors` <a name="putSelectors" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.putSelectors"></a>

```java
public void putSelectors(IResolvable OR java.util.List<GameServicesGameServerConfigScalingConfigsSelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.putSelectors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors">GameServicesGameServerConfigScalingConfigsSelectors</a>>

---

##### `resetSchedules` <a name="resetSchedules" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.resetSchedules"></a>

```java
public void resetSchedules()
```

##### `resetSelectors` <a name="resetSelectors" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.resetSelectors"></a>

```java
public void resetSelectors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.schedules">schedules</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList">GameServicesGameServerConfigScalingConfigsSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.selectors">selectors</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList">GameServicesGameServerConfigScalingConfigsSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpecInput">fleetAutoscalerSpecInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.schedulesInput">schedulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules">GameServicesGameServerConfigScalingConfigsSchedules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.selectorsInput">selectorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors">GameServicesGameServerConfigScalingConfigsSelectors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpec">fleetAutoscalerSpec</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs">GameServicesGameServerConfigScalingConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schedules`<sup>Required</sup> <a name="schedules" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.schedules"></a>

```java
public GameServicesGameServerConfigScalingConfigsSchedulesList getSchedules();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList">GameServicesGameServerConfigScalingConfigsSchedulesList</a>

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.selectors"></a>

```java
public GameServicesGameServerConfigScalingConfigsSelectorsList getSelectors();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList">GameServicesGameServerConfigScalingConfigsSelectorsList</a>

---

##### `fleetAutoscalerSpecInput`<sup>Optional</sup> <a name="fleetAutoscalerSpecInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpecInput"></a>

```java
public java.lang.String getFleetAutoscalerSpecInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `schedulesInput`<sup>Optional</sup> <a name="schedulesInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.schedulesInput"></a>

```java
public java.lang.Object getSchedulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules">GameServicesGameServerConfigScalingConfigsSchedules</a>>

---

##### `selectorsInput`<sup>Optional</sup> <a name="selectorsInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.selectorsInput"></a>

```java
public java.lang.Object getSelectorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors">GameServicesGameServerConfigScalingConfigsSelectors</a>>

---

##### `fleetAutoscalerSpec`<sup>Required</sup> <a name="fleetAutoscalerSpec" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpec"></a>

```java
public java.lang.String getFleetAutoscalerSpec();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs">GameServicesGameServerConfigScalingConfigs</a>

---


### GameServicesGameServerConfigScalingConfigsSchedulesList <a name="GameServicesGameServerConfigScalingConfigsSchedulesList" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_config.GameServicesGameServerConfigScalingConfigsSchedulesList;

new GameServicesGameServerConfigScalingConfigsSchedulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.get"></a>

```java
public GameServicesGameServerConfigScalingConfigsSchedulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules">GameServicesGameServerConfigScalingConfigsSchedules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules">GameServicesGameServerConfigScalingConfigsSchedules</a>>

---


### GameServicesGameServerConfigScalingConfigsSchedulesOutputReference <a name="GameServicesGameServerConfigScalingConfigsSchedulesOutputReference" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_config.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference;

new GameServicesGameServerConfigScalingConfigsSchedulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetCronJobDuration">resetCronJobDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetCronSpec">resetCronSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCronJobDuration` <a name="resetCronJobDuration" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetCronJobDuration"></a>

```java
public void resetCronJobDuration()
```

##### `resetCronSpec` <a name="resetCronSpec" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetCronSpec"></a>

```java
public void resetCronSpec()
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDurationInput">cronJobDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpecInput">cronSpecInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDuration">cronJobDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpec">cronSpec</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules">GameServicesGameServerConfigScalingConfigsSchedules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cronJobDurationInput`<sup>Optional</sup> <a name="cronJobDurationInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDurationInput"></a>

```java
public java.lang.String getCronJobDurationInput();
```

- *Type:* java.lang.String

---

##### `cronSpecInput`<sup>Optional</sup> <a name="cronSpecInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpecInput"></a>

```java
public java.lang.String getCronSpecInput();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `cronJobDuration`<sup>Required</sup> <a name="cronJobDuration" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDuration"></a>

```java
public java.lang.String getCronJobDuration();
```

- *Type:* java.lang.String

---

##### `cronSpec`<sup>Required</sup> <a name="cronSpec" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpec"></a>

```java
public java.lang.String getCronSpec();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules">GameServicesGameServerConfigScalingConfigsSchedules</a>

---


### GameServicesGameServerConfigScalingConfigsSelectorsList <a name="GameServicesGameServerConfigScalingConfigsSelectorsList" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_config.GameServicesGameServerConfigScalingConfigsSelectorsList;

new GameServicesGameServerConfigScalingConfigsSelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.get"></a>

```java
public GameServicesGameServerConfigScalingConfigsSelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors">GameServicesGameServerConfigScalingConfigsSelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors">GameServicesGameServerConfigScalingConfigsSelectors</a>>

---


### GameServicesGameServerConfigScalingConfigsSelectorsOutputReference <a name="GameServicesGameServerConfigScalingConfigsSelectorsOutputReference" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_config.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference;

new GameServicesGameServerConfigScalingConfigsSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resetLabels"></a>

```java
public void resetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors">GameServicesGameServerConfigScalingConfigsSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors">GameServicesGameServerConfigScalingConfigsSelectors</a>

---


### GameServicesGameServerConfigTimeoutsOutputReference <a name="GameServicesGameServerConfigTimeoutsOutputReference" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_config.GameServicesGameServerConfigTimeoutsOutputReference;

new GameServicesGameServerConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts">GameServicesGameServerConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts">GameServicesGameServerConfigTimeouts</a>

---



