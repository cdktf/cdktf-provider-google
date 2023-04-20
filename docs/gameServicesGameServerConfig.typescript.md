# `google_game_services_game_server_config`

Refer to the Terraform Registory for docs: [`google_game_services_game_server_config`](https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config).

# `gameServicesGameServerConfig` Submodule <a name="`gameServicesGameServerConfig` Submodule" id="@cdktf/provider-google.gameServicesGameServerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameServicesGameServerConfig <a name="GameServicesGameServerConfig" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config google_game_services_game_server_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer"></a>

```typescript
import { gameServicesGameServerConfig } from '@cdktf/provider-google'

new gameServicesGameServerConfig.GameServicesGameServerConfig(scope: Construct, id: string, config: GameServicesGameServerConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig">GameServicesGameServerConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig">GameServicesGameServerConfigConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFleetConfigs` <a name="putFleetConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putFleetConfigs"></a>

```typescript
public putFleetConfigs(value: IResolvable | GameServicesGameServerConfigFleetConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putFleetConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs">GameServicesGameServerConfigFleetConfigs</a>[]

---

##### `putScalingConfigs` <a name="putScalingConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putScalingConfigs"></a>

```typescript
public putScalingConfigs(value: IResolvable | GameServicesGameServerConfigScalingConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putScalingConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs">GameServicesGameServerConfigScalingConfigs</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GameServicesGameServerConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts">GameServicesGameServerConfigTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetScalingConfigs` <a name="resetScalingConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetScalingConfigs"></a>

```typescript
public resetScalingConfigs(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isConstruct"></a>

```typescript
import { gameServicesGameServerConfig } from '@cdktf/provider-google'

gameServicesGameServerConfig.GameServicesGameServerConfig.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isTerraformElement"></a>

```typescript
import { gameServicesGameServerConfig } from '@cdktf/provider-google'

gameServicesGameServerConfig.GameServicesGameServerConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isTerraformResource"></a>

```typescript
import { gameServicesGameServerConfig } from '@cdktf/provider-google'

gameServicesGameServerConfig.GameServicesGameServerConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.fleetConfigs">fleetConfigs</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList">GameServicesGameServerConfigFleetConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.scalingConfigs">scalingConfigs</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList">GameServicesGameServerConfigScalingConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference">GameServicesGameServerConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.configIdInput">configIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.deploymentIdInput">deploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.fleetConfigsInput">fleetConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs">GameServicesGameServerConfigFleetConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.scalingConfigsInput">scalingConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs">GameServicesGameServerConfigScalingConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts">GameServicesGameServerConfigTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.configId">configId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fleetConfigs`<sup>Required</sup> <a name="fleetConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.fleetConfigs"></a>

```typescript
public readonly fleetConfigs: GameServicesGameServerConfigFleetConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList">GameServicesGameServerConfigFleetConfigsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scalingConfigs`<sup>Required</sup> <a name="scalingConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.scalingConfigs"></a>

```typescript
public readonly scalingConfigs: GameServicesGameServerConfigScalingConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList">GameServicesGameServerConfigScalingConfigsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GameServicesGameServerConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference">GameServicesGameServerConfigTimeoutsOutputReference</a>

---

##### `configIdInput`<sup>Optional</sup> <a name="configIdInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.configIdInput"></a>

```typescript
public readonly configIdInput: string;
```

- *Type:* string

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.deploymentIdInput"></a>

```typescript
public readonly deploymentIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fleetConfigsInput`<sup>Optional</sup> <a name="fleetConfigsInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.fleetConfigsInput"></a>

```typescript
public readonly fleetConfigsInput: IResolvable | GameServicesGameServerConfigFleetConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs">GameServicesGameServerConfigFleetConfigs</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `scalingConfigsInput`<sup>Optional</sup> <a name="scalingConfigsInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.scalingConfigsInput"></a>

```typescript
public readonly scalingConfigsInput: IResolvable | GameServicesGameServerConfigScalingConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs">GameServicesGameServerConfigScalingConfigs</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: GameServicesGameServerConfigTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts">GameServicesGameServerConfigTimeouts</a> | cdktf.IResolvable

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GameServicesGameServerConfigConfig <a name="GameServicesGameServerConfigConfig" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.Initializer"></a>

```typescript
import { gameServicesGameServerConfig } from '@cdktf/provider-google'

const gameServicesGameServerConfigConfig: gameServicesGameServerConfig.GameServicesGameServerConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.configId">configId</a></code> | <code>string</code> | A unique id for the deployment config. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.deploymentId">deploymentId</a></code> | <code>string</code> | A unique id for the deployment. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.fleetConfigs">fleetConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs">GameServicesGameServerConfigFleetConfigs</a>[]</code> | fleet_configs block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.description">description</a></code> | <code>string</code> | The description of the game server config. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#id GameServicesGameServerConfig#id}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels associated with this game server config. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.location">location</a></code> | <code>string</code> | Location of the Deployment. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#project GameServicesGameServerConfig#project}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.scalingConfigs">scalingConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs">GameServicesGameServerConfigScalingConfigs</a>[]</code> | scaling_configs block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts">GameServicesGameServerConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

A unique id for the deployment config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#config_id GameServicesGameServerConfig#config_id}

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

A unique id for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#deployment_id GameServicesGameServerConfig#deployment_id}

---

##### `fleetConfigs`<sup>Required</sup> <a name="fleetConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.fleetConfigs"></a>

```typescript
public readonly fleetConfigs: IResolvable | GameServicesGameServerConfigFleetConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs">GameServicesGameServerConfigFleetConfigs</a>[]

fleet_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#fleet_configs GameServicesGameServerConfig#fleet_configs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the game server config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#description GameServicesGameServerConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#id GameServicesGameServerConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels associated with this game server config. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#labels GameServicesGameServerConfig#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location of the Deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#location GameServicesGameServerConfig#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#project GameServicesGameServerConfig#project}.

---

##### `scalingConfigs`<sup>Optional</sup> <a name="scalingConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.scalingConfigs"></a>

```typescript
public readonly scalingConfigs: IResolvable | GameServicesGameServerConfigScalingConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs">GameServicesGameServerConfigScalingConfigs</a>[]

scaling_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#scaling_configs GameServicesGameServerConfig#scaling_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GameServicesGameServerConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts">GameServicesGameServerConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#timeouts GameServicesGameServerConfig#timeouts}

---

### GameServicesGameServerConfigFleetConfigs <a name="GameServicesGameServerConfigFleetConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs.Initializer"></a>

```typescript
import { gameServicesGameServerConfig } from '@cdktf/provider-google'

const gameServicesGameServerConfigFleetConfigs: gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs.property.fleetSpec">fleetSpec</a></code> | <code>string</code> | The fleet spec, which is sent to Agones to configure fleet. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs.property.name">name</a></code> | <code>string</code> | The name of the FleetConfig. |

---

##### `fleetSpec`<sup>Required</sup> <a name="fleetSpec" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs.property.fleetSpec"></a>

```typescript
public readonly fleetSpec: string;
```

- *Type:* string

The fleet spec, which is sent to Agones to configure fleet.

The spec can be passed as inline json but it is recommended to use a file reference
instead. File references can contain the json or yaml format of the fleet spec. Eg:

fleet_spec = jsonencode(yamldecode(file("fleet_configs.yaml")))
fleet_spec = file("fleet_configs.json")

The format of the spec can be found :
'https://agones.dev/site/docs/reference/fleet/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#fleet_spec GameServicesGameServerConfig#fleet_spec}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the FleetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#name GameServicesGameServerConfig#name}

---

### GameServicesGameServerConfigScalingConfigs <a name="GameServicesGameServerConfigScalingConfigs" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.Initializer"></a>

```typescript
import { gameServicesGameServerConfig } from '@cdktf/provider-google'

const gameServicesGameServerConfigScalingConfigs: gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.fleetAutoscalerSpec">fleetAutoscalerSpec</a></code> | <code>string</code> | Fleet autoscaler spec, which is sent to Agones. Example spec can be found : https://agones.dev/site/docs/reference/fleetautoscaler/. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.name">name</a></code> | <code>string</code> | The name of the ScalingConfig. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.schedules">schedules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules">GameServicesGameServerConfigScalingConfigsSchedules</a>[]</code> | schedules block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.selectors">selectors</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors">GameServicesGameServerConfigScalingConfigsSelectors</a>[]</code> | selectors block. |

---

##### `fleetAutoscalerSpec`<sup>Required</sup> <a name="fleetAutoscalerSpec" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.fleetAutoscalerSpec"></a>

```typescript
public readonly fleetAutoscalerSpec: string;
```

- *Type:* string

Fleet autoscaler spec, which is sent to Agones. Example spec can be found : https://agones.dev/site/docs/reference/fleetautoscaler/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#fleet_autoscaler_spec GameServicesGameServerConfig#fleet_autoscaler_spec}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the ScalingConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#name GameServicesGameServerConfig#name}

---

##### `schedules`<sup>Optional</sup> <a name="schedules" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.schedules"></a>

```typescript
public readonly schedules: IResolvable | GameServicesGameServerConfigScalingConfigsSchedules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules">GameServicesGameServerConfigScalingConfigsSchedules</a>[]

schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#schedules GameServicesGameServerConfig#schedules}

---

##### `selectors`<sup>Optional</sup> <a name="selectors" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs.property.selectors"></a>

```typescript
public readonly selectors: IResolvable | GameServicesGameServerConfigScalingConfigsSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors">GameServicesGameServerConfigScalingConfigsSelectors</a>[]

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#selectors GameServicesGameServerConfig#selectors}

---

### GameServicesGameServerConfigScalingConfigsSchedules <a name="GameServicesGameServerConfigScalingConfigsSchedules" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.Initializer"></a>

```typescript
import { gameServicesGameServerConfig } from '@cdktf/provider-google'

const gameServicesGameServerConfigScalingConfigsSchedules: gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.cronJobDuration">cronJobDuration</a></code> | <code>string</code> | The duration for the cron job event. The duration of the event is effective after the cron job's start time. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.cronSpec">cronSpec</a></code> | <code>string</code> | The cron definition of the scheduled event. See https://en.wikipedia.org/wiki/Cron. Cron spec specifies the local time as defined by the realm. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.endTime">endTime</a></code> | <code>string</code> | The end time of the event. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.startTime">startTime</a></code> | <code>string</code> | The start time of the event. |

---

##### `cronJobDuration`<sup>Optional</sup> <a name="cronJobDuration" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.cronJobDuration"></a>

```typescript
public readonly cronJobDuration: string;
```

- *Type:* string

The duration for the cron job event. The duration of the event is effective after the cron job's start time.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#cron_job_duration GameServicesGameServerConfig#cron_job_duration}

---

##### `cronSpec`<sup>Optional</sup> <a name="cronSpec" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.cronSpec"></a>

```typescript
public readonly cronSpec: string;
```

- *Type:* string

The cron definition of the scheduled event. See https://en.wikipedia.org/wiki/Cron. Cron spec specifies the local time as defined by the realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#cron_spec GameServicesGameServerConfig#cron_spec}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

The end time of the event.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#end_time GameServicesGameServerConfig#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

The start time of the event.

A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#start_time GameServicesGameServerConfig#start_time}

---

### GameServicesGameServerConfigScalingConfigsSelectors <a name="GameServicesGameServerConfigScalingConfigsSelectors" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors.Initializer"></a>

```typescript
import { gameServicesGameServerConfig } from '@cdktf/provider-google'

const gameServicesGameServerConfigScalingConfigsSelectors: gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of labels to group by. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of labels to group by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#labels GameServicesGameServerConfig#labels}

---

### GameServicesGameServerConfigTimeouts <a name="GameServicesGameServerConfigTimeouts" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts.Initializer"></a>

```typescript
import { gameServicesGameServerConfig } from '@cdktf/provider-google'

const gameServicesGameServerConfigTimeouts: gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#create GameServicesGameServerConfig#create}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#delete GameServicesGameServerConfig#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#create GameServicesGameServerConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/game_services_game_server_config#delete GameServicesGameServerConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameServicesGameServerConfigFleetConfigsList <a name="GameServicesGameServerConfigFleetConfigsList" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.Initializer"></a>

```typescript
import { gameServicesGameServerConfig } from '@cdktf/provider-google'

new gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.get"></a>

```typescript
public get(index: number): GameServicesGameServerConfigFleetConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs">GameServicesGameServerConfigFleetConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameServicesGameServerConfigFleetConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs">GameServicesGameServerConfigFleetConfigs</a>[]

---


### GameServicesGameServerConfigFleetConfigsOutputReference <a name="GameServicesGameServerConfigFleetConfigsOutputReference" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer"></a>

```typescript
import { gameServicesGameServerConfig } from '@cdktf/provider-google'

new gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpecInput">fleetSpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpec">fleetSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs">GameServicesGameServerConfigFleetConfigs</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fleetSpecInput`<sup>Optional</sup> <a name="fleetSpecInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpecInput"></a>

```typescript
public readonly fleetSpecInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `fleetSpec`<sup>Required</sup> <a name="fleetSpec" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.fleetSpec"></a>

```typescript
public readonly fleetSpec: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GameServicesGameServerConfigFleetConfigs | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigFleetConfigs">GameServicesGameServerConfigFleetConfigs</a> | cdktf.IResolvable

---


### GameServicesGameServerConfigScalingConfigsList <a name="GameServicesGameServerConfigScalingConfigsList" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.Initializer"></a>

```typescript
import { gameServicesGameServerConfig } from '@cdktf/provider-google'

new gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.get"></a>

```typescript
public get(index: number): GameServicesGameServerConfigScalingConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs">GameServicesGameServerConfigScalingConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameServicesGameServerConfigScalingConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs">GameServicesGameServerConfigScalingConfigs</a>[]

---


### GameServicesGameServerConfigScalingConfigsOutputReference <a name="GameServicesGameServerConfigScalingConfigsOutputReference" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer"></a>

```typescript
import { gameServicesGameServerConfig } from '@cdktf/provider-google'

new gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchedules` <a name="putSchedules" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.putSchedules"></a>

```typescript
public putSchedules(value: IResolvable | GameServicesGameServerConfigScalingConfigsSchedules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.putSchedules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules">GameServicesGameServerConfigScalingConfigsSchedules</a>[]

---

##### `putSelectors` <a name="putSelectors" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.putSelectors"></a>

```typescript
public putSelectors(value: IResolvable | GameServicesGameServerConfigScalingConfigsSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.putSelectors.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors">GameServicesGameServerConfigScalingConfigsSelectors</a>[]

---

##### `resetSchedules` <a name="resetSchedules" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.resetSchedules"></a>

```typescript
public resetSchedules(): void
```

##### `resetSelectors` <a name="resetSelectors" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.resetSelectors"></a>

```typescript
public resetSelectors(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.schedules">schedules</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList">GameServicesGameServerConfigScalingConfigsSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.selectors">selectors</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList">GameServicesGameServerConfigScalingConfigsSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpecInput">fleetAutoscalerSpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.schedulesInput">schedulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules">GameServicesGameServerConfigScalingConfigsSchedules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.selectorsInput">selectorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors">GameServicesGameServerConfigScalingConfigsSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpec">fleetAutoscalerSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs">GameServicesGameServerConfigScalingConfigs</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schedules`<sup>Required</sup> <a name="schedules" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.schedules"></a>

```typescript
public readonly schedules: GameServicesGameServerConfigScalingConfigsSchedulesList;
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList">GameServicesGameServerConfigScalingConfigsSchedulesList</a>

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.selectors"></a>

```typescript
public readonly selectors: GameServicesGameServerConfigScalingConfigsSelectorsList;
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList">GameServicesGameServerConfigScalingConfigsSelectorsList</a>

---

##### `fleetAutoscalerSpecInput`<sup>Optional</sup> <a name="fleetAutoscalerSpecInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpecInput"></a>

```typescript
public readonly fleetAutoscalerSpecInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schedulesInput`<sup>Optional</sup> <a name="schedulesInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.schedulesInput"></a>

```typescript
public readonly schedulesInput: IResolvable | GameServicesGameServerConfigScalingConfigsSchedules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules">GameServicesGameServerConfigScalingConfigsSchedules</a>[]

---

##### `selectorsInput`<sup>Optional</sup> <a name="selectorsInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.selectorsInput"></a>

```typescript
public readonly selectorsInput: IResolvable | GameServicesGameServerConfigScalingConfigsSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors">GameServicesGameServerConfigScalingConfigsSelectors</a>[]

---

##### `fleetAutoscalerSpec`<sup>Required</sup> <a name="fleetAutoscalerSpec" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.fleetAutoscalerSpec"></a>

```typescript
public readonly fleetAutoscalerSpec: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GameServicesGameServerConfigScalingConfigs | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigs">GameServicesGameServerConfigScalingConfigs</a> | cdktf.IResolvable

---


### GameServicesGameServerConfigScalingConfigsSchedulesList <a name="GameServicesGameServerConfigScalingConfigsSchedulesList" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.Initializer"></a>

```typescript
import { gameServicesGameServerConfig } from '@cdktf/provider-google'

new gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.get"></a>

```typescript
public get(index: number): GameServicesGameServerConfigScalingConfigsSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules">GameServicesGameServerConfigScalingConfigsSchedules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameServicesGameServerConfigScalingConfigsSchedules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules">GameServicesGameServerConfigScalingConfigsSchedules</a>[]

---


### GameServicesGameServerConfigScalingConfigsSchedulesOutputReference <a name="GameServicesGameServerConfigScalingConfigsSchedulesOutputReference" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer"></a>

```typescript
import { gameServicesGameServerConfig } from '@cdktf/provider-google'

new gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCronJobDuration` <a name="resetCronJobDuration" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetCronJobDuration"></a>

```typescript
public resetCronJobDuration(): void
```

##### `resetCronSpec` <a name="resetCronSpec" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetCronSpec"></a>

```typescript
public resetCronSpec(): void
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDurationInput">cronJobDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpecInput">cronSpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDuration">cronJobDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpec">cronSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules">GameServicesGameServerConfigScalingConfigsSchedules</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cronJobDurationInput`<sup>Optional</sup> <a name="cronJobDurationInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDurationInput"></a>

```typescript
public readonly cronJobDurationInput: string;
```

- *Type:* string

---

##### `cronSpecInput`<sup>Optional</sup> <a name="cronSpecInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpecInput"></a>

```typescript
public readonly cronSpecInput: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `cronJobDuration`<sup>Required</sup> <a name="cronJobDuration" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronJobDuration"></a>

```typescript
public readonly cronJobDuration: string;
```

- *Type:* string

---

##### `cronSpec`<sup>Required</sup> <a name="cronSpec" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.cronSpec"></a>

```typescript
public readonly cronSpec: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GameServicesGameServerConfigScalingConfigsSchedules | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSchedules">GameServicesGameServerConfigScalingConfigsSchedules</a> | cdktf.IResolvable

---


### GameServicesGameServerConfigScalingConfigsSelectorsList <a name="GameServicesGameServerConfigScalingConfigsSelectorsList" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.Initializer"></a>

```typescript
import { gameServicesGameServerConfig } from '@cdktf/provider-google'

new gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.get"></a>

```typescript
public get(index: number): GameServicesGameServerConfigScalingConfigsSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors">GameServicesGameServerConfigScalingConfigsSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameServicesGameServerConfigScalingConfigsSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors">GameServicesGameServerConfigScalingConfigsSelectors</a>[]

---


### GameServicesGameServerConfigScalingConfigsSelectorsOutputReference <a name="GameServicesGameServerConfigScalingConfigsSelectorsOutputReference" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer"></a>

```typescript
import { gameServicesGameServerConfig } from '@cdktf/provider-google'

new gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors">GameServicesGameServerConfigScalingConfigsSelectors</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GameServicesGameServerConfigScalingConfigsSelectors | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigScalingConfigsSelectors">GameServicesGameServerConfigScalingConfigsSelectors</a> | cdktf.IResolvable

---


### GameServicesGameServerConfigTimeoutsOutputReference <a name="GameServicesGameServerConfigTimeoutsOutputReference" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { gameServicesGameServerConfig } from '@cdktf/provider-google'

new gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts">GameServicesGameServerConfigTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GameServicesGameServerConfigTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerConfig.GameServicesGameServerConfigTimeouts">GameServicesGameServerConfigTimeouts</a> | cdktf.IResolvable

---



