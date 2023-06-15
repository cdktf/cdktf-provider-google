# `google_game_services_game_server_deployment_rollout`

Refer to the Terraform Registory for docs: [`google_game_services_game_server_deployment_rollout`](https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout).

# `gameServicesGameServerDeploymentRollout` Submodule <a name="`gameServicesGameServerDeploymentRollout` Submodule" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameServicesGameServerDeploymentRollout <a name="GameServicesGameServerDeploymentRollout" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout google_game_services_game_server_deployment_rollout}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_deployment_rollout.GameServicesGameServerDeploymentRollout;

GameServicesGameServerDeploymentRollout.Builder.create(Construct scope, java.lang.String id)
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
    .defaultGameServerConfig(java.lang.String)
    .deploymentId(java.lang.String)
//  .gameServerConfigOverrides(IResolvable)
//  .gameServerConfigOverrides(java.util.List<GameServicesGameServerDeploymentRolloutGameServerConfigOverrides>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GameServicesGameServerDeploymentRolloutTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.defaultGameServerConfig">defaultGameServerConfig</a></code> | <code>java.lang.String</code> | This field points to the game server config that is applied by default to all realms and clusters. For example,. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.gameServerConfigOverrides">gameServerConfigOverrides</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>></code> | game_server_config_overrides block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#id GameServicesGameServerDeploymentRollout#id}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#project GameServicesGameServerDeploymentRollout#project}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts">GameServicesGameServerDeploymentRolloutTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultGameServerConfig`<sup>Required</sup> <a name="defaultGameServerConfig" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.defaultGameServerConfig"></a>

- *Type:* java.lang.String

This field points to the game server config that is applied by default to all realms and clusters. For example,.

'projects/my-project/locations/global/gameServerDeployments/my-game/configs/my-config'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#default_game_server_config GameServicesGameServerDeploymentRollout#default_game_server_config}

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.deploymentId"></a>

- *Type:* java.lang.String

The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#deployment_id GameServicesGameServerDeploymentRollout#deployment_id}

---

##### `gameServerConfigOverrides`<sup>Optional</sup> <a name="gameServerConfigOverrides" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.gameServerConfigOverrides"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>>

game_server_config_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#game_server_config_overrides GameServicesGameServerDeploymentRollout#game_server_config_overrides}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#id GameServicesGameServerDeploymentRollout#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#project GameServicesGameServerDeploymentRollout#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts">GameServicesGameServerDeploymentRolloutTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#timeouts GameServicesGameServerDeploymentRollout#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.putGameServerConfigOverrides">putGameServerConfigOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetGameServerConfigOverrides">resetGameServerConfigOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putGameServerConfigOverrides` <a name="putGameServerConfigOverrides" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.putGameServerConfigOverrides"></a>

```java
public void putGameServerConfigOverrides(IResolvable OR java.util.List<GameServicesGameServerDeploymentRolloutGameServerConfigOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.putGameServerConfigOverrides.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.putTimeouts"></a>

```java
public void putTimeouts(GameServicesGameServerDeploymentRolloutTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts">GameServicesGameServerDeploymentRolloutTimeouts</a>

---

##### `resetGameServerConfigOverrides` <a name="resetGameServerConfigOverrides" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetGameServerConfigOverrides"></a>

```java
public void resetGameServerConfigOverrides()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_deployment_rollout.GameServicesGameServerDeploymentRollout;

GameServicesGameServerDeploymentRollout.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_deployment_rollout.GameServicesGameServerDeploymentRollout;

GameServicesGameServerDeploymentRollout.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_deployment_rollout.GameServicesGameServerDeploymentRollout;

GameServicesGameServerDeploymentRollout.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.gameServerConfigOverrides">gameServerConfigOverrides</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference">GameServicesGameServerDeploymentRolloutTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.defaultGameServerConfigInput">defaultGameServerConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.deploymentIdInput">deploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.gameServerConfigOverridesInput">gameServerConfigOverridesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts">GameServicesGameServerDeploymentRolloutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.defaultGameServerConfig">defaultGameServerConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gameServerConfigOverrides`<sup>Required</sup> <a name="gameServerConfigOverrides" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.gameServerConfigOverrides"></a>

```java
public GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList getGameServerConfigOverrides();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.timeouts"></a>

```java
public GameServicesGameServerDeploymentRolloutTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference">GameServicesGameServerDeploymentRolloutTimeoutsOutputReference</a>

---

##### `defaultGameServerConfigInput`<sup>Optional</sup> <a name="defaultGameServerConfigInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.defaultGameServerConfigInput"></a>

```java
public java.lang.String getDefaultGameServerConfigInput();
```

- *Type:* java.lang.String

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.deploymentIdInput"></a>

```java
public java.lang.String getDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `gameServerConfigOverridesInput`<sup>Optional</sup> <a name="gameServerConfigOverridesInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.gameServerConfigOverridesInput"></a>

```java
public java.lang.Object getGameServerConfigOverridesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts">GameServicesGameServerDeploymentRolloutTimeouts</a>

---

##### `defaultGameServerConfig`<sup>Required</sup> <a name="defaultGameServerConfig" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.defaultGameServerConfig"></a>

```java
public java.lang.String getDefaultGameServerConfig();
```

- *Type:* java.lang.String

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRollout.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GameServicesGameServerDeploymentRolloutConfig <a name="GameServicesGameServerDeploymentRolloutConfig" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_deployment_rollout.GameServicesGameServerDeploymentRolloutConfig;

GameServicesGameServerDeploymentRolloutConfig.builder()
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
    .defaultGameServerConfig(java.lang.String)
    .deploymentId(java.lang.String)
//  .gameServerConfigOverrides(IResolvable)
//  .gameServerConfigOverrides(java.util.List<GameServicesGameServerDeploymentRolloutGameServerConfigOverrides>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GameServicesGameServerDeploymentRolloutTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.defaultGameServerConfig">defaultGameServerConfig</a></code> | <code>java.lang.String</code> | This field points to the game server config that is applied by default to all realms and clusters. For example,. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.gameServerConfigOverrides">gameServerConfigOverrides</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>></code> | game_server_config_overrides block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#id GameServicesGameServerDeploymentRollout#id}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#project GameServicesGameServerDeploymentRollout#project}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts">GameServicesGameServerDeploymentRolloutTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultGameServerConfig`<sup>Required</sup> <a name="defaultGameServerConfig" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.defaultGameServerConfig"></a>

```java
public java.lang.String getDefaultGameServerConfig();
```

- *Type:* java.lang.String

This field points to the game server config that is applied by default to all realms and clusters. For example,.

'projects/my-project/locations/global/gameServerDeployments/my-game/configs/my-config'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#default_game_server_config GameServicesGameServerDeploymentRollout#default_game_server_config}

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#deployment_id GameServicesGameServerDeploymentRollout#deployment_id}

---

##### `gameServerConfigOverrides`<sup>Optional</sup> <a name="gameServerConfigOverrides" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.gameServerConfigOverrides"></a>

```java
public java.lang.Object getGameServerConfigOverrides();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>>

game_server_config_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#game_server_config_overrides GameServicesGameServerDeploymentRollout#game_server_config_overrides}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#id GameServicesGameServerDeploymentRollout#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#project GameServicesGameServerDeploymentRollout#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutConfig.property.timeouts"></a>

```java
public GameServicesGameServerDeploymentRolloutTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts">GameServicesGameServerDeploymentRolloutTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#timeouts GameServicesGameServerDeploymentRollout#timeouts}

---

### GameServicesGameServerDeploymentRolloutGameServerConfigOverrides <a name="GameServicesGameServerDeploymentRolloutGameServerConfigOverrides" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_deployment_rollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides;

GameServicesGameServerDeploymentRolloutGameServerConfigOverrides.builder()
//  .configVersion(java.lang.String)
//  .realmsSelector(GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.configVersion">configVersion</a></code> | <code>java.lang.String</code> | Version of the configuration. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.realmsSelector">realmsSelector</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a></code> | realms_selector block. |

---

##### `configVersion`<sup>Optional</sup> <a name="configVersion" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.configVersion"></a>

```java
public java.lang.String getConfigVersion();
```

- *Type:* java.lang.String

Version of the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#config_version GameServicesGameServerDeploymentRollout#config_version}

---

##### `realmsSelector`<sup>Optional</sup> <a name="realmsSelector" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides.property.realmsSelector"></a>

```java
public GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector getRealmsSelector();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

realms_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#realms_selector GameServicesGameServerDeploymentRollout#realms_selector}

---

### GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector <a name="GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_deployment_rollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector;

GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector.builder()
//  .realms(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector.property.realms">realms</a></code> | <code>java.util.List<java.lang.String></code> | List of realms to match against. |

---

##### `realms`<sup>Optional</sup> <a name="realms" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector.property.realms"></a>

```java
public java.util.List<java.lang.String> getRealms();
```

- *Type:* java.util.List<java.lang.String>

List of realms to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#realms GameServicesGameServerDeploymentRollout#realms}

---

### GameServicesGameServerDeploymentRolloutTimeouts <a name="GameServicesGameServerDeploymentRolloutTimeouts" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_deployment_rollout.GameServicesGameServerDeploymentRolloutTimeouts;

GameServicesGameServerDeploymentRolloutTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#create GameServicesGameServerDeploymentRollout#create}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#delete GameServicesGameServerDeploymentRollout#delete}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#update GameServicesGameServerDeploymentRollout#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#create GameServicesGameServerDeploymentRollout#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#delete GameServicesGameServerDeploymentRollout#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/game_services_game_server_deployment_rollout#update GameServicesGameServerDeploymentRollout#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList <a name="GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_deployment_rollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList;

new GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get"></a>

```java
public GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>>

---


### GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference <a name="GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_deployment_rollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference;

new GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.putRealmsSelector">putRealmsSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetConfigVersion">resetConfigVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetRealmsSelector">resetRealmsSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRealmsSelector` <a name="putRealmsSelector" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.putRealmsSelector"></a>

```java
public void putRealmsSelector(GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.putRealmsSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

---

##### `resetConfigVersion` <a name="resetConfigVersion" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetConfigVersion"></a>

```java
public void resetConfigVersion()
```

##### `resetRealmsSelector` <a name="resetRealmsSelector" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.resetRealmsSelector"></a>

```java
public void resetRealmsSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelector">realmsSelector</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersionInput">configVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelectorInput">realmsSelectorInput</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersion">configVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `realmsSelector`<sup>Required</sup> <a name="realmsSelector" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelector"></a>

```java
public GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference getRealmsSelector();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference</a>

---

##### `configVersionInput`<sup>Optional</sup> <a name="configVersionInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersionInput"></a>

```java
public java.lang.String getConfigVersionInput();
```

- *Type:* java.lang.String

---

##### `realmsSelectorInput`<sup>Optional</sup> <a name="realmsSelectorInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.realmsSelectorInput"></a>

```java
public GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector getRealmsSelectorInput();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

---

##### `configVersion`<sup>Required</sup> <a name="configVersion" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.configVersion"></a>

```java
public java.lang.String getConfigVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverrides">GameServicesGameServerDeploymentRolloutGameServerConfigOverrides</a>

---


### GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference <a name="GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_deployment_rollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference;

new GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resetRealms">resetRealms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRealms` <a name="resetRealms" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.resetRealms"></a>

```java
public void resetRealms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realmsInput">realmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realms">realms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `realmsInput`<sup>Optional</sup> <a name="realmsInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realmsInput"></a>

```java
public java.util.List<java.lang.String> getRealmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `realms`<sup>Required</sup> <a name="realms" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.realms"></a>

```java
public java.util.List<java.lang.String> getRealms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference.property.internalValue"></a>

```java
public GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector">GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector</a>

---


### GameServicesGameServerDeploymentRolloutTimeoutsOutputReference <a name="GameServicesGameServerDeploymentRolloutTimeoutsOutputReference" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.game_services_game_server_deployment_rollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference;

new GameServicesGameServerDeploymentRolloutTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts">GameServicesGameServerDeploymentRolloutTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.gameServicesGameServerDeploymentRollout.GameServicesGameServerDeploymentRolloutTimeouts">GameServicesGameServerDeploymentRolloutTimeouts</a>

---



