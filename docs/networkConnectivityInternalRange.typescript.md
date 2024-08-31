# `networkConnectivityInternalRange` Submodule <a name="`networkConnectivityInternalRange` Submodule" id="@cdktf/provider-google.networkConnectivityInternalRange"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityInternalRange <a name="NetworkConnectivityInternalRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range google_network_connectivity_internal_range}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer"></a>

```typescript
import { networkConnectivityInternalRange } from '@cdktf/provider-google'

new networkConnectivityInternalRange.NetworkConnectivityInternalRange(scope: Construct, id: string, config: NetworkConnectivityInternalRangeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig">NetworkConnectivityInternalRangeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig">NetworkConnectivityInternalRangeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetIpCidrRange">resetIpCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetOverlaps">resetOverlaps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetPrefixLength">resetPrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetTargetCidrRange">resetTargetCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkConnectivityInternalRangeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpCidrRange` <a name="resetIpCidrRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetIpCidrRange"></a>

```typescript
public resetIpCidrRange(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetOverlaps` <a name="resetOverlaps" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetOverlaps"></a>

```typescript
public resetOverlaps(): void
```

##### `resetPrefixLength` <a name="resetPrefixLength" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetPrefixLength"></a>

```typescript
public resetPrefixLength(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTargetCidrRange` <a name="resetTargetCidrRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetTargetCidrRange"></a>

```typescript
public resetTargetCidrRange(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkConnectivityInternalRange resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isConstruct"></a>

```typescript
import { networkConnectivityInternalRange } from '@cdktf/provider-google'

networkConnectivityInternalRange.NetworkConnectivityInternalRange.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformElement"></a>

```typescript
import { networkConnectivityInternalRange } from '@cdktf/provider-google'

networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformResource"></a>

```typescript
import { networkConnectivityInternalRange } from '@cdktf/provider-google'

networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport"></a>

```typescript
import { networkConnectivityInternalRange } from '@cdktf/provider-google'

networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkConnectivityInternalRange resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkConnectivityInternalRange to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkConnectivityInternalRange that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityInternalRange to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference">NetworkConnectivityInternalRangeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.users">users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.overlapsInput">overlapsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.peeringInput">peeringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.prefixLengthInput">prefixLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.targetCidrRangeInput">targetCidrRangeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.usageInput">usageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.overlaps">overlaps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.peering">peering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.prefixLength">prefixLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.targetCidrRange">targetCidrRange</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.usage">usage</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkConnectivityInternalRangeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference">NetworkConnectivityInternalRangeTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.ipCidrRangeInput"></a>

```typescript
public readonly ipCidrRangeInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `overlapsInput`<sup>Optional</sup> <a name="overlapsInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.overlapsInput"></a>

```typescript
public readonly overlapsInput: string[];
```

- *Type:* string[]

---

##### `peeringInput`<sup>Optional</sup> <a name="peeringInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.peeringInput"></a>

```typescript
public readonly peeringInput: string;
```

- *Type:* string

---

##### `prefixLengthInput`<sup>Optional</sup> <a name="prefixLengthInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.prefixLengthInput"></a>

```typescript
public readonly prefixLengthInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `targetCidrRangeInput`<sup>Optional</sup> <a name="targetCidrRangeInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.targetCidrRangeInput"></a>

```typescript
public readonly targetCidrRangeInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkConnectivityInternalRangeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a>

---

##### `usageInput`<sup>Optional</sup> <a name="usageInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.usageInput"></a>

```typescript
public readonly usageInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `overlaps`<sup>Required</sup> <a name="overlaps" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.overlaps"></a>

```typescript
public readonly overlaps: string[];
```

- *Type:* string[]

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.peering"></a>

```typescript
public readonly peering: string;
```

- *Type:* string

---

##### `prefixLength`<sup>Required</sup> <a name="prefixLength" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.prefixLength"></a>

```typescript
public readonly prefixLength: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `targetCidrRange`<sup>Required</sup> <a name="targetCidrRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.targetCidrRange"></a>

```typescript
public readonly targetCidrRange: string[];
```

- *Type:* string[]

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.usage"></a>

```typescript
public readonly usage: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityInternalRangeConfig <a name="NetworkConnectivityInternalRangeConfig" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.Initializer"></a>

```typescript
import { networkConnectivityInternalRange } from '@cdktf/provider-google'

const networkConnectivityInternalRangeConfig: networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.name">name</a></code> | <code>string</code> | The name of the policy based route. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.network">network</a></code> | <code>string</code> | Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.peering">peering</a></code> | <code>string</code> | The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.usage">usage</a></code> | <code>string</code> | The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#id NetworkConnectivityInternalRange#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | The IP range that this internal range defines. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.overlaps">overlaps</a></code> | <code>string[]</code> | Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.prefixLength">prefixLength</a></code> | <code>number</code> | An alternate to ipCidrRange. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#project NetworkConnectivityInternalRange#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.targetCidrRange">targetCidrRange</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the policy based route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#name NetworkConnectivityInternalRange#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#network NetworkConnectivityInternalRange#network}

---

##### `peering`<sup>Required</sup> <a name="peering" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.peering"></a>

```typescript
public readonly peering: string;
```

- *Type:* string

The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#peering NetworkConnectivityInternalRange#peering}

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.usage"></a>

```typescript
public readonly usage: string;
```

- *Type:* string

The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#usage NetworkConnectivityInternalRange#usage}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#description NetworkConnectivityInternalRange#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#id NetworkConnectivityInternalRange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipCidrRange`<sup>Optional</sup> <a name="ipCidrRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

The IP range that this internal range defines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#ip_cidr_range NetworkConnectivityInternalRange#ip_cidr_range}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#labels NetworkConnectivityInternalRange#labels}

---

##### `overlaps`<sup>Optional</sup> <a name="overlaps" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.overlaps"></a>

```typescript
public readonly overlaps: string[];
```

- *Type:* string[]

Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#overlaps NetworkConnectivityInternalRange#overlaps}

---

##### `prefixLength`<sup>Optional</sup> <a name="prefixLength" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.prefixLength"></a>

```typescript
public readonly prefixLength: number;
```

- *Type:* number

An alternate to ipCidrRange.

Can be set when trying to create a reservation that automatically finds a free range of the given size.
If both ipCidrRange and prefixLength are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#prefix_length NetworkConnectivityInternalRange#prefix_length}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#project NetworkConnectivityInternalRange#project}.

---

##### `targetCidrRange`<sup>Optional</sup> <a name="targetCidrRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.targetCidrRange"></a>

```typescript
public readonly targetCidrRange: string[];
```

- *Type:* string[]

Optional.

Can be set to narrow down or pick a different address space while searching for a free range.
If not set, defaults to the "10.0.0.0/8" address space. This can be used to search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#target_cidr_range NetworkConnectivityInternalRange#target_cidr_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkConnectivityInternalRangeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#timeouts NetworkConnectivityInternalRange#timeouts}

---

### NetworkConnectivityInternalRangeTimeouts <a name="NetworkConnectivityInternalRangeTimeouts" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.Initializer"></a>

```typescript
import { networkConnectivityInternalRange } from '@cdktf/provider-google'

const networkConnectivityInternalRangeTimeouts: networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#create NetworkConnectivityInternalRange#create}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#delete NetworkConnectivityInternalRange#delete}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#update NetworkConnectivityInternalRange#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#create NetworkConnectivityInternalRange#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#delete NetworkConnectivityInternalRange#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#update NetworkConnectivityInternalRange#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityInternalRangeTimeoutsOutputReference <a name="NetworkConnectivityInternalRangeTimeoutsOutputReference" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkConnectivityInternalRange } from '@cdktf/provider-google'

new networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkConnectivityInternalRangeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a>

---



