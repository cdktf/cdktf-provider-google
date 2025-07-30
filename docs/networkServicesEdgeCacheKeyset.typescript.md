# `networkServicesEdgeCacheKeyset` Submodule <a name="`networkServicesEdgeCacheKeyset` Submodule" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesEdgeCacheKeyset <a name="NetworkServicesEdgeCacheKeyset" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_edge_cache_keyset google_network_services_edge_cache_keyset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer"></a>

```typescript
import { networkServicesEdgeCacheKeyset } from '@cdktf/provider-google'

new networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset(scope: Construct, id: string, config: NetworkServicesEdgeCacheKeysetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig">NetworkServicesEdgeCacheKeysetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig">NetworkServicesEdgeCacheKeysetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.putPublicKey">putPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.putValidationSharedKeys">putValidationSharedKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetPublicKey">resetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetValidationSharedKeys">resetValidationSharedKeys</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPublicKey` <a name="putPublicKey" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.putPublicKey"></a>

```typescript
public putPublicKey(value: IResolvable | NetworkServicesEdgeCacheKeysetPublicKey[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.putPublicKey.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey">NetworkServicesEdgeCacheKeysetPublicKey</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkServicesEdgeCacheKeysetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts">NetworkServicesEdgeCacheKeysetTimeouts</a>

---

##### `putValidationSharedKeys` <a name="putValidationSharedKeys" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.putValidationSharedKeys"></a>

```typescript
public putValidationSharedKeys(value: IResolvable | NetworkServicesEdgeCacheKeysetValidationSharedKeys[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.putValidationSharedKeys.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys">NetworkServicesEdgeCacheKeysetValidationSharedKeys</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPublicKey` <a name="resetPublicKey" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetPublicKey"></a>

```typescript
public resetPublicKey(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValidationSharedKeys` <a name="resetValidationSharedKeys" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetValidationSharedKeys"></a>

```typescript
public resetValidationSharedKeys(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkServicesEdgeCacheKeyset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.isConstruct"></a>

```typescript
import { networkServicesEdgeCacheKeyset } from '@cdktf/provider-google'

networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.isTerraformElement"></a>

```typescript
import { networkServicesEdgeCacheKeyset } from '@cdktf/provider-google'

networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.isTerraformResource"></a>

```typescript
import { networkServicesEdgeCacheKeyset } from '@cdktf/provider-google'

networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.generateConfigForImport"></a>

```typescript
import { networkServicesEdgeCacheKeyset } from '@cdktf/provider-google'

networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkServicesEdgeCacheKeyset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkServicesEdgeCacheKeyset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkServicesEdgeCacheKeyset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_edge_cache_keyset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesEdgeCacheKeyset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.publicKey">publicKey</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList">NetworkServicesEdgeCacheKeysetPublicKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference">NetworkServicesEdgeCacheKeysetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.validationSharedKeys">validationSharedKeys</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList">NetworkServicesEdgeCacheKeysetValidationSharedKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.publicKeyInput">publicKeyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey">NetworkServicesEdgeCacheKeysetPublicKey</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts">NetworkServicesEdgeCacheKeysetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.validationSharedKeysInput">validationSharedKeysInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys">NetworkServicesEdgeCacheKeysetValidationSharedKeys</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.publicKey"></a>

```typescript
public readonly publicKey: NetworkServicesEdgeCacheKeysetPublicKeyList;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList">NetworkServicesEdgeCacheKeysetPublicKeyList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesEdgeCacheKeysetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference">NetworkServicesEdgeCacheKeysetTimeoutsOutputReference</a>

---

##### `validationSharedKeys`<sup>Required</sup> <a name="validationSharedKeys" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.validationSharedKeys"></a>

```typescript
public readonly validationSharedKeys: NetworkServicesEdgeCacheKeysetValidationSharedKeysList;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList">NetworkServicesEdgeCacheKeysetValidationSharedKeysList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.publicKeyInput"></a>

```typescript
public readonly publicKeyInput: IResolvable | NetworkServicesEdgeCacheKeysetPublicKey[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey">NetworkServicesEdgeCacheKeysetPublicKey</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkServicesEdgeCacheKeysetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts">NetworkServicesEdgeCacheKeysetTimeouts</a>

---

##### `validationSharedKeysInput`<sup>Optional</sup> <a name="validationSharedKeysInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.validationSharedKeysInput"></a>

```typescript
public readonly validationSharedKeysInput: IResolvable | NetworkServicesEdgeCacheKeysetValidationSharedKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys">NetworkServicesEdgeCacheKeysetValidationSharedKeys</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesEdgeCacheKeysetConfig <a name="NetworkServicesEdgeCacheKeysetConfig" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.Initializer"></a>

```typescript
import { networkServicesEdgeCacheKeyset } from '@cdktf/provider-google'

const networkServicesEdgeCacheKeysetConfig: networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.name">name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.description">description</a></code> | <code>string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_edge_cache_keyset#id NetworkServicesEdgeCacheKeyset#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the EdgeCache resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_edge_cache_keyset#project NetworkServicesEdgeCacheKeyset#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.publicKey">publicKey</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey">NetworkServicesEdgeCacheKeysetPublicKey</a>[]</code> | public_key block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts">NetworkServicesEdgeCacheKeysetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.validationSharedKeys">validationSharedKeys</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys">NetworkServicesEdgeCacheKeysetValidationSharedKeys</a>[]</code> | validation_shared_keys block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_edge_cache_keyset#name NetworkServicesEdgeCacheKeyset#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_edge_cache_keyset#description NetworkServicesEdgeCacheKeyset#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_edge_cache_keyset#id NetworkServicesEdgeCacheKeyset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the EdgeCache resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_edge_cache_keyset#labels NetworkServicesEdgeCacheKeyset#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_edge_cache_keyset#project NetworkServicesEdgeCacheKeyset#project}.

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.publicKey"></a>

```typescript
public readonly publicKey: IResolvable | NetworkServicesEdgeCacheKeysetPublicKey[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey">NetworkServicesEdgeCacheKeysetPublicKey</a>[]

public_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_edge_cache_keyset#public_key NetworkServicesEdgeCacheKeyset#public_key}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkServicesEdgeCacheKeysetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts">NetworkServicesEdgeCacheKeysetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_edge_cache_keyset#timeouts NetworkServicesEdgeCacheKeyset#timeouts}

---

##### `validationSharedKeys`<sup>Optional</sup> <a name="validationSharedKeys" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.validationSharedKeys"></a>

```typescript
public readonly validationSharedKeys: IResolvable | NetworkServicesEdgeCacheKeysetValidationSharedKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys">NetworkServicesEdgeCacheKeysetValidationSharedKeys</a>[]

validation_shared_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_edge_cache_keyset#validation_shared_keys NetworkServicesEdgeCacheKeyset#validation_shared_keys}

---

### NetworkServicesEdgeCacheKeysetPublicKey <a name="NetworkServicesEdgeCacheKeysetPublicKey" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey.Initializer"></a>

```typescript
import { networkServicesEdgeCacheKeyset } from '@cdktf/provider-google'

const networkServicesEdgeCacheKeysetPublicKey: networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey.property.id">id</a></code> | <code>string</code> | The ID of the public key. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey.property.managed">managed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to have the CDN automatically manage this public key value. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey.property.value">value</a></code> | <code>string</code> | The base64-encoded value of the Ed25519 public key. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the public key.

The ID must be 1-63 characters long, and comply with RFC1035.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]*
which means the first character must be a letter, and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_edge_cache_keyset#id NetworkServicesEdgeCacheKeyset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey.property.managed"></a>

```typescript
public readonly managed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to have the CDN automatically manage this public key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_edge_cache_keyset#managed NetworkServicesEdgeCacheKeyset#managed}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The base64-encoded value of the Ed25519 public key.

The base64 encoding can be padded (44 bytes) or unpadded (43 bytes).
Representations or encodings of the public key other than this will be rejected with an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_edge_cache_keyset#value NetworkServicesEdgeCacheKeyset#value}

---

### NetworkServicesEdgeCacheKeysetTimeouts <a name="NetworkServicesEdgeCacheKeysetTimeouts" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts.Initializer"></a>

```typescript
import { networkServicesEdgeCacheKeyset } from '@cdktf/provider-google'

const networkServicesEdgeCacheKeysetTimeouts: networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_edge_cache_keyset#create NetworkServicesEdgeCacheKeyset#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_edge_cache_keyset#delete NetworkServicesEdgeCacheKeyset#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_edge_cache_keyset#update NetworkServicesEdgeCacheKeyset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_edge_cache_keyset#create NetworkServicesEdgeCacheKeyset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_edge_cache_keyset#delete NetworkServicesEdgeCacheKeyset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_edge_cache_keyset#update NetworkServicesEdgeCacheKeyset#update}.

---

### NetworkServicesEdgeCacheKeysetValidationSharedKeys <a name="NetworkServicesEdgeCacheKeysetValidationSharedKeys" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys.Initializer"></a>

```typescript
import { networkServicesEdgeCacheKeyset } from '@cdktf/provider-google'

const networkServicesEdgeCacheKeysetValidationSharedKeys: networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys.property.secretVersion">secretVersion</a></code> | <code>string</code> | The name of the secret version in Secret Manager. |

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

The name of the secret version in Secret Manager.

The resource name of the secret version must be in the format 'projects/* /secrets/* /versions/*' where the '*' values are replaced by the secrets themselves.
The secrets must be at least 16 bytes large.  The recommended secret size depends on the signature algorithm you are using.
* If you are using HMAC-SHA1, we suggest 20-byte secrets.
* If you are using HMAC-SHA256, we suggest 32-byte secrets.
See RFC 2104, Section 3 for more details on these recommendations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_services_edge_cache_keyset#secret_version NetworkServicesEdgeCacheKeyset#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesEdgeCacheKeysetPublicKeyList <a name="NetworkServicesEdgeCacheKeysetPublicKeyList" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.Initializer"></a>

```typescript
import { networkServicesEdgeCacheKeyset } from '@cdktf/provider-google'

new networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.get"></a>

```typescript
public get(index: number): NetworkServicesEdgeCacheKeysetPublicKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey">NetworkServicesEdgeCacheKeysetPublicKey</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesEdgeCacheKeysetPublicKey[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey">NetworkServicesEdgeCacheKeysetPublicKey</a>[]

---


### NetworkServicesEdgeCacheKeysetPublicKeyOutputReference <a name="NetworkServicesEdgeCacheKeysetPublicKeyOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer"></a>

```typescript
import { networkServicesEdgeCacheKeyset } from '@cdktf/provider-google'

new networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resetManaged">resetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManaged` <a name="resetManaged" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resetManaged"></a>

```typescript
public resetManaged(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.managedInput">managedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.managed">managed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey">NetworkServicesEdgeCacheKeysetPublicKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedInput`<sup>Optional</sup> <a name="managedInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.managedInput"></a>

```typescript
public readonly managedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.managed"></a>

```typescript
public readonly managed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesEdgeCacheKeysetPublicKey;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey">NetworkServicesEdgeCacheKeysetPublicKey</a>

---


### NetworkServicesEdgeCacheKeysetTimeoutsOutputReference <a name="NetworkServicesEdgeCacheKeysetTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkServicesEdgeCacheKeyset } from '@cdktf/provider-google'

new networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts">NetworkServicesEdgeCacheKeysetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesEdgeCacheKeysetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts">NetworkServicesEdgeCacheKeysetTimeouts</a>

---


### NetworkServicesEdgeCacheKeysetValidationSharedKeysList <a name="NetworkServicesEdgeCacheKeysetValidationSharedKeysList" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer"></a>

```typescript
import { networkServicesEdgeCacheKeyset } from '@cdktf/provider-google'

new networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.get"></a>

```typescript
public get(index: number): NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys">NetworkServicesEdgeCacheKeysetValidationSharedKeys</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesEdgeCacheKeysetValidationSharedKeys[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys">NetworkServicesEdgeCacheKeysetValidationSharedKeys</a>[]

---


### NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference <a name="NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer"></a>

```typescript
import { networkServicesEdgeCacheKeyset } from '@cdktf/provider-google'

new networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.secretVersion">secretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys">NetworkServicesEdgeCacheKeysetValidationSharedKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.secretVersionInput"></a>

```typescript
public readonly secretVersionInput: string;
```

- *Type:* string

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.secretVersion"></a>

```typescript
public readonly secretVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkServicesEdgeCacheKeysetValidationSharedKeys;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys">NetworkServicesEdgeCacheKeysetValidationSharedKeys</a>

---



