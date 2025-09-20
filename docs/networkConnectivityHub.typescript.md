# `networkConnectivityHub` Submodule <a name="`networkConnectivityHub` Submodule" id="@cdktf/provider-google.networkConnectivityHub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityHub <a name="NetworkConnectivityHub" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_connectivity_hub google_network_connectivity_hub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.Initializer"></a>

```typescript
import { networkConnectivityHub } from '@cdktf/provider-google'

new networkConnectivityHub.NetworkConnectivityHub(scope: Construct, id: string, config?: NetworkConnectivityHubConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig">NetworkConnectivityHubConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig">NetworkConnectivityHubConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetExportPsc">resetExportPsc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetPolicyMode">resetPolicyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetPresetTopology">resetPresetTopology</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkConnectivityHubTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts">NetworkConnectivityHubTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExportPsc` <a name="resetExportPsc" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetExportPsc"></a>

```typescript
public resetExportPsc(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPolicyMode` <a name="resetPolicyMode" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetPolicyMode"></a>

```typescript
public resetPolicyMode(): void
```

##### `resetPresetTopology` <a name="resetPresetTopology" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetPresetTopology"></a>

```typescript
public resetPresetTopology(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkConnectivityHub resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.isConstruct"></a>

```typescript
import { networkConnectivityHub } from '@cdktf/provider-google'

networkConnectivityHub.NetworkConnectivityHub.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.isTerraformElement"></a>

```typescript
import { networkConnectivityHub } from '@cdktf/provider-google'

networkConnectivityHub.NetworkConnectivityHub.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.isTerraformResource"></a>

```typescript
import { networkConnectivityHub } from '@cdktf/provider-google'

networkConnectivityHub.NetworkConnectivityHub.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.generateConfigForImport"></a>

```typescript
import { networkConnectivityHub } from '@cdktf/provider-google'

networkConnectivityHub.NetworkConnectivityHub.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkConnectivityHub resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkConnectivityHub to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkConnectivityHub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_connectivity_hub#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityHub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.routingVpcs">routingVpcs</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList">NetworkConnectivityHubRoutingVpcsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference">NetworkConnectivityHubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.exportPscInput">exportPscInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.policyModeInput">policyModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.presetTopologyInput">presetTopologyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts">NetworkConnectivityHubTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.exportPsc">exportPsc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.policyMode">policyMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.presetTopology">presetTopology</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `routingVpcs`<sup>Required</sup> <a name="routingVpcs" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.routingVpcs"></a>

```typescript
public readonly routingVpcs: NetworkConnectivityHubRoutingVpcsList;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList">NetworkConnectivityHubRoutingVpcsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkConnectivityHubTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference">NetworkConnectivityHubTimeoutsOutputReference</a>

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `exportPscInput`<sup>Optional</sup> <a name="exportPscInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.exportPscInput"></a>

```typescript
public readonly exportPscInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyModeInput`<sup>Optional</sup> <a name="policyModeInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.policyModeInput"></a>

```typescript
public readonly policyModeInput: string;
```

- *Type:* string

---

##### `presetTopologyInput`<sup>Optional</sup> <a name="presetTopologyInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.presetTopologyInput"></a>

```typescript
public readonly presetTopologyInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkConnectivityHubTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts">NetworkConnectivityHubTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `exportPsc`<sup>Required</sup> <a name="exportPsc" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.exportPsc"></a>

```typescript
public readonly exportPsc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyMode`<sup>Required</sup> <a name="policyMode" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.policyMode"></a>

```typescript
public readonly policyMode: string;
```

- *Type:* string

---

##### `presetTopology`<sup>Required</sup> <a name="presetTopology" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.presetTopology"></a>

```typescript
public readonly presetTopology: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHub.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityHubConfig <a name="NetworkConnectivityHubConfig" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.Initializer"></a>

```typescript
import { networkConnectivityHub } from '@cdktf/provider-google'

const networkConnectivityHubConfig: networkConnectivityHub.NetworkConnectivityHubConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.description">description</a></code> | <code>string</code> | An optional description of the hub. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.exportPsc">exportPsc</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Private Service Connect transitivity is enabled for the hub. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_connectivity_hub#id NetworkConnectivityHub#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.name">name</a></code> | <code>string</code> | Immutable. The name of the hub. Hub names must be unique. They use the following form: 'projects/{project_number}/locations/global/hubs/{hub_id}'. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.policyMode">policyMode</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.presetTopology">presetTopology</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_connectivity_hub#project NetworkConnectivityHub#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts">NetworkConnectivityHubTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of the hub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_connectivity_hub#description NetworkConnectivityHub#description}

---

##### `exportPsc`<sup>Optional</sup> <a name="exportPsc" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.exportPsc"></a>

```typescript
public readonly exportPsc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Private Service Connect transitivity is enabled for the hub.

If true, Private Service Connect endpoints in VPC spokes attached to the hub are made accessible to other VPC spokes attached to the hub. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_connectivity_hub#export_psc NetworkConnectivityHub#export_psc}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_connectivity_hub#id NetworkConnectivityHub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_connectivity_hub#labels NetworkConnectivityHub#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Immutable. The name of the hub. Hub names must be unique. They use the following form: 'projects/{project_number}/locations/global/hubs/{hub_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_connectivity_hub#name NetworkConnectivityHub#name}

---

##### `policyMode`<sup>Optional</sup> <a name="policyMode" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.policyMode"></a>

```typescript
public readonly policyMode: string;
```

- *Type:* string

Optional.

The policy mode of this hub. This field can be either PRESET or CUSTOM. If unspecified, the policyMode defaults to PRESET. Possible values: ["CUSTOM", "PRESET"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_connectivity_hub#policy_mode NetworkConnectivityHub#policy_mode}

---

##### `presetTopology`<sup>Optional</sup> <a name="presetTopology" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.presetTopology"></a>

```typescript
public readonly presetTopology: string;
```

- *Type:* string

Optional.

The topology implemented in this hub. Currently, this field is only used when policyMode = PRESET. The available preset topologies are MESH and STAR. If presetTopology is unspecified and policyMode = PRESET, the presetTopology defaults to MESH. When policyMode = CUSTOM, the presetTopology is set to PRESET_TOPOLOGY_UNSPECIFIED. Possible values: ["MESH", "STAR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_connectivity_hub#preset_topology NetworkConnectivityHub#preset_topology}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_connectivity_hub#project NetworkConnectivityHub#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkConnectivityHubTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts">NetworkConnectivityHubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_connectivity_hub#timeouts NetworkConnectivityHub#timeouts}

---

### NetworkConnectivityHubRoutingVpcs <a name="NetworkConnectivityHubRoutingVpcs" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcs.Initializer"></a>

```typescript
import { networkConnectivityHub } from '@cdktf/provider-google'

const networkConnectivityHubRoutingVpcs: networkConnectivityHub.NetworkConnectivityHubRoutingVpcs = { ... }
```


### NetworkConnectivityHubTimeouts <a name="NetworkConnectivityHubTimeouts" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts.Initializer"></a>

```typescript
import { networkConnectivityHub } from '@cdktf/provider-google'

const networkConnectivityHubTimeouts: networkConnectivityHub.NetworkConnectivityHubTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_connectivity_hub#create NetworkConnectivityHub#create}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_connectivity_hub#delete NetworkConnectivityHub#delete}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_connectivity_hub#update NetworkConnectivityHub#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_connectivity_hub#create NetworkConnectivityHub#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_connectivity_hub#delete NetworkConnectivityHub#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_connectivity_hub#update NetworkConnectivityHub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityHubRoutingVpcsList <a name="NetworkConnectivityHubRoutingVpcsList" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.Initializer"></a>

```typescript
import { networkConnectivityHub } from '@cdktf/provider-google'

new networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.get"></a>

```typescript
public get(index: number): NetworkConnectivityHubRoutingVpcsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### NetworkConnectivityHubRoutingVpcsOutputReference <a name="NetworkConnectivityHubRoutingVpcsOutputReference" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.Initializer"></a>

```typescript
import { networkConnectivityHub } from '@cdktf/provider-google'

new networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcs">NetworkConnectivityHubRoutingVpcs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkConnectivityHubRoutingVpcs;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubRoutingVpcs">NetworkConnectivityHubRoutingVpcs</a>

---


### NetworkConnectivityHubTimeoutsOutputReference <a name="NetworkConnectivityHubTimeoutsOutputReference" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkConnectivityHub } from '@cdktf/provider-google'

new networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts">NetworkConnectivityHubTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectivityHubTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkConnectivityHub.NetworkConnectivityHubTimeouts">NetworkConnectivityHubTimeouts</a>

---



