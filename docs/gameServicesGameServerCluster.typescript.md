# `google_game_services_game_server_cluster`

Refer to the Terraform Registory for docs: [`google_game_services_game_server_cluster`](https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/game_services_game_server_cluster).

# `gameServicesGameServerCluster` Submodule <a name="`gameServicesGameServerCluster` Submodule" id="@cdktf/provider-google.gameServicesGameServerCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameServicesGameServerCluster <a name="GameServicesGameServerCluster" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/game_services_game_server_cluster google_game_services_game_server_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer"></a>

```typescript
import { gameServicesGameServerCluster } from '@cdktf/provider-google'

new gameServicesGameServerCluster.GameServicesGameServerCluster(scope: Construct, id: string, config: GameServicesGameServerClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig">GameServicesGameServerClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig">GameServicesGameServerClusterConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putConnectionInfo` <a name="putConnectionInfo" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putConnectionInfo"></a>

```typescript
public putConnectionInfo(value: GameServicesGameServerClusterConnectionInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putConnectionInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: GameServicesGameServerClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isConstruct"></a>

```typescript
import { gameServicesGameServerCluster } from '@cdktf/provider-google'

gameServicesGameServerCluster.GameServicesGameServerCluster.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformElement"></a>

```typescript
import { gameServicesGameServerCluster } from '@cdktf/provider-google'

gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformResource"></a>

```typescript
import { gameServicesGameServerCluster } from '@cdktf/provider-google'

gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connectionInfo">connectionInfo</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference">GameServicesGameServerClusterConnectionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference">GameServicesGameServerClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connectionInfoInput">connectionInfoInput</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.realmIdInput">realmIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.realmId">realmId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionInfo`<sup>Required</sup> <a name="connectionInfo" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connectionInfo"></a>

```typescript
public readonly connectionInfo: GameServicesGameServerClusterConnectionInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference">GameServicesGameServerClusterConnectionInfoOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.timeouts"></a>

```typescript
public readonly timeouts: GameServicesGameServerClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference">GameServicesGameServerClusterTimeoutsOutputReference</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `connectionInfoInput`<sup>Optional</sup> <a name="connectionInfoInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.connectionInfoInput"></a>

```typescript
public readonly connectionInfoInput: GameServicesGameServerClusterConnectionInfo;
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `realmIdInput`<sup>Optional</sup> <a name="realmIdInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.realmIdInput"></a>

```typescript
public readonly realmIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GameServicesGameServerClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `realmId`<sup>Required</sup> <a name="realmId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.realmId"></a>

```typescript
public readonly realmId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GameServicesGameServerClusterConfig <a name="GameServicesGameServerClusterConfig" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.Initializer"></a>

```typescript
import { gameServicesGameServerCluster } from '@cdktf/provider-google'

const gameServicesGameServerClusterConfig: gameServicesGameServerCluster.GameServicesGameServerClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Required. The resource name of the game server cluster. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.connectionInfo">connectionInfo</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a></code> | connection_info block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.realmId">realmId</a></code> | <code>string</code> | The realm id of the game server realm. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.description">description</a></code> | <code>string</code> | Human readable description of the cluster. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/game_services_game_server_cluster#id GameServicesGameServerCluster#id}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels associated with this game server cluster. Each label is a key-value pair. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.location">location</a></code> | <code>string</code> | Location of the Cluster. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/game_services_game_server_cluster#project GameServicesGameServerCluster#project}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Required. The resource name of the game server cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/game_services_game_server_cluster#cluster_id GameServicesGameServerCluster#cluster_id}

---

##### `connectionInfo`<sup>Required</sup> <a name="connectionInfo" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.connectionInfo"></a>

```typescript
public readonly connectionInfo: GameServicesGameServerClusterConnectionInfo;
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a>

connection_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/game_services_game_server_cluster#connection_info GameServicesGameServerCluster#connection_info}

---

##### `realmId`<sup>Required</sup> <a name="realmId" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.realmId"></a>

```typescript
public readonly realmId: string;
```

- *Type:* string

The realm id of the game server realm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/game_services_game_server_cluster#realm_id GameServicesGameServerCluster#realm_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human readable description of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/game_services_game_server_cluster#description GameServicesGameServerCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/game_services_game_server_cluster#id GameServicesGameServerCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels associated with this game server cluster. Each label is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/game_services_game_server_cluster#labels GameServicesGameServerCluster#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location of the Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/game_services_game_server_cluster#location GameServicesGameServerCluster#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/game_services_game_server_cluster#project GameServicesGameServerCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GameServicesGameServerClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/game_services_game_server_cluster#timeouts GameServicesGameServerCluster#timeouts}

---

### GameServicesGameServerClusterConnectionInfo <a name="GameServicesGameServerClusterConnectionInfo" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo.Initializer"></a>

```typescript
import { gameServicesGameServerCluster } from '@cdktf/provider-google'

const gameServicesGameServerClusterConnectionInfo: gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo.property.gkeClusterReference">gkeClusterReference</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a></code> | gke_cluster_reference block. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo.property.namespace">namespace</a></code> | <code>string</code> | Namespace designated on the game server cluster where the game server instances will be created. |

---

##### `gkeClusterReference`<sup>Required</sup> <a name="gkeClusterReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo.property.gkeClusterReference"></a>

```typescript
public readonly gkeClusterReference: GameServicesGameServerClusterConnectionInfoGkeClusterReference;
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

gke_cluster_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/game_services_game_server_cluster#gke_cluster_reference GameServicesGameServerCluster#gke_cluster_reference}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace designated on the game server cluster where the game server instances will be created.

The namespace existence will be validated
during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/game_services_game_server_cluster#namespace GameServicesGameServerCluster#namespace}

---

### GameServicesGameServerClusterConnectionInfoGkeClusterReference <a name="GameServicesGameServerClusterConnectionInfoGkeClusterReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference.Initializer"></a>

```typescript
import { gameServicesGameServerCluster } from '@cdktf/provider-google'

const gameServicesGameServerClusterConnectionInfoGkeClusterReference: gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference.property.cluster">cluster</a></code> | <code>string</code> | The full or partial name of a GKE cluster, using one of the following forms:. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

The full or partial name of a GKE cluster, using one of the following forms:.

'projects/{project_id}/locations/{location}/clusters/{cluster_id}'
'locations/{location}/clusters/{cluster_id}'
'{cluster_id}'

If project and location are not specified, the project and location of the
GameServerCluster resource are used to generate the full name of the
GKE cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/game_services_game_server_cluster#cluster GameServicesGameServerCluster#cluster}

---

### GameServicesGameServerClusterTimeouts <a name="GameServicesGameServerClusterTimeouts" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.Initializer"></a>

```typescript
import { gameServicesGameServerCluster } from '@cdktf/provider-google'

const gameServicesGameServerClusterTimeouts: gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/game_services_game_server_cluster#create GameServicesGameServerCluster#create}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/game_services_game_server_cluster#delete GameServicesGameServerCluster#delete}. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/game_services_game_server_cluster#update GameServicesGameServerCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/game_services_game_server_cluster#create GameServicesGameServerCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/game_services_game_server_cluster#delete GameServicesGameServerCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/resources/game_services_game_server_cluster#update GameServicesGameServerCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference <a name="GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer"></a>

```typescript
import { gameServicesGameServerCluster } from '@cdktf/provider-google'

new gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GameServicesGameServerClusterConnectionInfoGkeClusterReference;
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

---


### GameServicesGameServerClusterConnectionInfoOutputReference <a name="GameServicesGameServerClusterConnectionInfoOutputReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.Initializer"></a>

```typescript
import { gameServicesGameServerCluster } from '@cdktf/provider-google'

new gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGkeClusterReference` <a name="putGkeClusterReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.putGkeClusterReference"></a>

```typescript
public putGkeClusterReference(value: GameServicesGameServerClusterConnectionInfoGkeClusterReference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.putGkeClusterReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReference">gkeClusterReference</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference">GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReferenceInput">gkeClusterReferenceInput</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gkeClusterReference`<sup>Required</sup> <a name="gkeClusterReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReference"></a>

```typescript
public readonly gkeClusterReference: GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference">GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference</a>

---

##### `gkeClusterReferenceInput`<sup>Optional</sup> <a name="gkeClusterReferenceInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.gkeClusterReferenceInput"></a>

```typescript
public readonly gkeClusterReferenceInput: GameServicesGameServerClusterConnectionInfoGkeClusterReference;
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoGkeClusterReference">GameServicesGameServerClusterConnectionInfoGkeClusterReference</a>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GameServicesGameServerClusterConnectionInfo;
```

- *Type:* <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterConnectionInfo">GameServicesGameServerClusterConnectionInfo</a>

---


### GameServicesGameServerClusterTimeoutsOutputReference <a name="GameServicesGameServerClusterTimeoutsOutputReference" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { gameServicesGameServerCluster } from '@cdktf/provider-google'

new gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GameServicesGameServerClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.gameServicesGameServerCluster.GameServicesGameServerClusterTimeouts">GameServicesGameServerClusterTimeouts</a>

---



