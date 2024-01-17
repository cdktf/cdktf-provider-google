# `computeGlobalAddress` Submodule <a name="`computeGlobalAddress` Submodule" id="@cdktf/provider-google.computeGlobalAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeGlobalAddress <a name="ComputeGlobalAddress" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_address google_compute_global_address}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.Initializer"></a>

```typescript
import { computeGlobalAddress } from '@cdktf/provider-google'

new computeGlobalAddress.ComputeGlobalAddress(scope: Construct, id: string, config: ComputeGlobalAddressConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig">ComputeGlobalAddressConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig">ComputeGlobalAddressConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetAddressType">resetAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetPrefixLength">resetPrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetPurpose">resetPurpose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeGlobalAddressTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeouts">ComputeGlobalAddressTimeouts</a>

---

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetAddressType` <a name="resetAddressType" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetAddressType"></a>

```typescript
public resetAddressType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpVersion` <a name="resetIpVersion" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetPrefixLength` <a name="resetPrefixLength" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetPrefixLength"></a>

```typescript
public resetPrefixLength(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPurpose` <a name="resetPurpose" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetPurpose"></a>

```typescript
public resetPurpose(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeGlobalAddress resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.isConstruct"></a>

```typescript
import { computeGlobalAddress } from '@cdktf/provider-google'

computeGlobalAddress.ComputeGlobalAddress.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.isTerraformElement"></a>

```typescript
import { computeGlobalAddress } from '@cdktf/provider-google'

computeGlobalAddress.ComputeGlobalAddress.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.isTerraformResource"></a>

```typescript
import { computeGlobalAddress } from '@cdktf/provider-google'

computeGlobalAddress.ComputeGlobalAddress.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.generateConfigForImport"></a>

```typescript
import { computeGlobalAddress } from '@cdktf/provider-google'

computeGlobalAddress.ComputeGlobalAddress.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeGlobalAddress resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeGlobalAddress to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeGlobalAddress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_address#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeGlobalAddress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference">ComputeGlobalAddressTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.addressTypeInput">addressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.ipVersionInput">ipVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.prefixLengthInput">prefixLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.purposeInput">purposeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeouts">ComputeGlobalAddressTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.addressType">addressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.ipVersion">ipVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.prefixLength">prefixLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.purpose">purpose</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeGlobalAddressTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference">ComputeGlobalAddressTimeoutsOutputReference</a>

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `addressTypeInput`<sup>Optional</sup> <a name="addressTypeInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.addressTypeInput"></a>

```typescript
public readonly addressTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `prefixLengthInput`<sup>Optional</sup> <a name="prefixLengthInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.prefixLengthInput"></a>

```typescript
public readonly prefixLengthInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `purposeInput`<sup>Optional</sup> <a name="purposeInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.purposeInput"></a>

```typescript
public readonly purposeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeGlobalAddressTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeouts">ComputeGlobalAddressTimeouts</a>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `addressType`<sup>Required</sup> <a name="addressType" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.addressType"></a>

```typescript
public readonly addressType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `prefixLength`<sup>Required</sup> <a name="prefixLength" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.prefixLength"></a>

```typescript
public readonly prefixLength: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddress.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeGlobalAddressConfig <a name="ComputeGlobalAddressConfig" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.Initializer"></a>

```typescript
import { computeGlobalAddress } from '@cdktf/provider-google'

const computeGlobalAddressConfig: computeGlobalAddress.ComputeGlobalAddressConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.address">address</a></code> | <code>string</code> | The IP address or beginning of the address range represented by this resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.addressType">addressType</a></code> | <code>string</code> | The type of the address to reserve. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_address#id ComputeGlobalAddress#id}. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.ipVersion">ipVersion</a></code> | <code>string</code> | The IP Version that will be used by this address. The default value is 'IPV4'. Possible values: ["IPV4", "IPV6"]. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.network">network</a></code> | <code>string</code> | The URL of the network in which to reserve the IP range. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.prefixLength">prefixLength</a></code> | <code>number</code> | The prefix length of the IP range. If not present, it means the address field is a single IP address. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_address#project ComputeGlobalAddress#project}. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.purpose">purpose</a></code> | <code>string</code> | The purpose of the resource. Possible values include:. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeouts">ComputeGlobalAddressTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_address#name ComputeGlobalAddress#name}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The IP address or beginning of the address range represented by this resource.

This can be supplied as an input to reserve a specific
address or omitted to allow GCP to choose a valid one for you.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_address#address ComputeGlobalAddress#address}

---

##### `addressType`<sup>Optional</sup> <a name="addressType" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.addressType"></a>

```typescript
public readonly addressType: string;
```

- *Type:* string

The type of the address to reserve.

* EXTERNAL indicates public/external single IP address.
* INTERNAL indicates internal IP ranges belonging to some network. Default value: "EXTERNAL" Possible values: ["EXTERNAL", "INTERNAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_address#address_type ComputeGlobalAddress#address_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_address#description ComputeGlobalAddress#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_address#id ComputeGlobalAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.ipVersion"></a>

```typescript
public readonly ipVersion: string;
```

- *Type:* string

The IP Version that will be used by this address. The default value is 'IPV4'. Possible values: ["IPV4", "IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_address#ip_version ComputeGlobalAddress#ip_version}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The URL of the network in which to reserve the IP range.

The IP range
must be in RFC1918 space. The network cannot be deleted if there are
any reserved IP ranges referring to it.

This should only be set when using an Internal address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_address#network ComputeGlobalAddress#network}

---

##### `prefixLength`<sup>Optional</sup> <a name="prefixLength" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.prefixLength"></a>

```typescript
public readonly prefixLength: number;
```

- *Type:* number

The prefix length of the IP range. If not present, it means the address field is a single IP address.

This field is not applicable to addresses with addressType=INTERNAL
when purpose=PRIVATE_SERVICE_CONNECT

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_address#prefix_length ComputeGlobalAddress#prefix_length}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_address#project ComputeGlobalAddress#project}.

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.purpose"></a>

```typescript
public readonly purpose: string;
```

- *Type:* string

The purpose of the resource. Possible values include:.

* VPC_PEERING - for peer networks

* PRIVATE_SERVICE_CONNECT - for ([Beta](https://terraform.io/docs/providers/google/guides/provider_versions.html) only) Private Service Connect networks

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_address#purpose ComputeGlobalAddress#purpose}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeGlobalAddressTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeouts">ComputeGlobalAddressTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_address#timeouts ComputeGlobalAddress#timeouts}

---

### ComputeGlobalAddressTimeouts <a name="ComputeGlobalAddressTimeouts" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeouts.Initializer"></a>

```typescript
import { computeGlobalAddress } from '@cdktf/provider-google'

const computeGlobalAddressTimeouts: computeGlobalAddress.ComputeGlobalAddressTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_address#create ComputeGlobalAddress#create}. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_address#delete ComputeGlobalAddress#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_address#create ComputeGlobalAddress#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/compute_global_address#delete ComputeGlobalAddress#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeGlobalAddressTimeoutsOutputReference <a name="ComputeGlobalAddressTimeoutsOutputReference" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeGlobalAddress } from '@cdktf/provider-google'

new computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeouts">ComputeGlobalAddressTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeGlobalAddressTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.computeGlobalAddress.ComputeGlobalAddressTimeouts">ComputeGlobalAddressTimeouts</a>

---



