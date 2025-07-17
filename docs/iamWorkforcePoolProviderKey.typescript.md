# `iamWorkforcePoolProviderKey` Submodule <a name="`iamWorkforcePoolProviderKey` Submodule" id="@cdktf/provider-google.iamWorkforcePoolProviderKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamWorkforcePoolProviderKey <a name="IamWorkforcePoolProviderKey" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/iam_workforce_pool_provider_key google_iam_workforce_pool_provider_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer"></a>

```typescript
import { iamWorkforcePoolProviderKey } from '@cdktf/provider-google'

new iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey(scope: Construct, id: string, config: IamWorkforcePoolProviderKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig">IamWorkforcePoolProviderKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig">IamWorkforcePoolProviderKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.putKeyData">putKeyData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putKeyData` <a name="putKeyData" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.putKeyData"></a>

```typescript
public putKeyData(value: IamWorkforcePoolProviderKeyKeyData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.putKeyData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.putTimeouts"></a>

```typescript
public putTimeouts(value: IamWorkforcePoolProviderKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts">IamWorkforcePoolProviderKeyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IamWorkforcePoolProviderKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isConstruct"></a>

```typescript
import { iamWorkforcePoolProviderKey } from '@cdktf/provider-google'

iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isTerraformElement"></a>

```typescript
import { iamWorkforcePoolProviderKey } from '@cdktf/provider-google'

iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isTerraformResource"></a>

```typescript
import { iamWorkforcePoolProviderKey } from '@cdktf/provider-google'

iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.generateConfigForImport"></a>

```typescript
import { iamWorkforcePoolProviderKey } from '@cdktf/provider-google'

iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IamWorkforcePoolProviderKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamWorkforcePoolProviderKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamWorkforcePoolProviderKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/iam_workforce_pool_provider_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IamWorkforcePoolProviderKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyData">keyData</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference">IamWorkforcePoolProviderKeyKeyDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference">IamWorkforcePoolProviderKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyDataInput">keyDataInput</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.providerIdInput">providerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts">IamWorkforcePoolProviderKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.useInput">useInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.workforcePoolIdInput">workforcePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.providerId">providerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.use">use</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.workforcePoolId">workforcePoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `keyData`<sup>Required</sup> <a name="keyData" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyData"></a>

```typescript
public readonly keyData: IamWorkforcePoolProviderKeyKeyDataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference">IamWorkforcePoolProviderKeyKeyDataOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.timeouts"></a>

```typescript
public readonly timeouts: IamWorkforcePoolProviderKeyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference">IamWorkforcePoolProviderKeyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyDataInput`<sup>Optional</sup> <a name="keyDataInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyDataInput"></a>

```typescript
public readonly keyDataInput: IamWorkforcePoolProviderKeyKeyData;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a>

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `providerIdInput`<sup>Optional</sup> <a name="providerIdInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.providerIdInput"></a>

```typescript
public readonly providerIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IamWorkforcePoolProviderKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts">IamWorkforcePoolProviderKeyTimeouts</a>

---

##### `useInput`<sup>Optional</sup> <a name="useInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.useInput"></a>

```typescript
public readonly useInput: string;
```

- *Type:* string

---

##### `workforcePoolIdInput`<sup>Optional</sup> <a name="workforcePoolIdInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.workforcePoolIdInput"></a>

```typescript
public readonly workforcePoolIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

---

##### `use`<sup>Required</sup> <a name="use" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.use"></a>

```typescript
public readonly use: string;
```

- *Type:* string

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.workforcePoolId"></a>

```typescript
public readonly workforcePoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamWorkforcePoolProviderKeyConfig <a name="IamWorkforcePoolProviderKeyConfig" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.Initializer"></a>

```typescript
import { iamWorkforcePoolProviderKey } from '@cdktf/provider-google'

const iamWorkforcePoolProviderKeyConfig: iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.keyData">keyData</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a></code> | key_data block. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.keyId">keyId</a></code> | <code>string</code> | The ID to use for the key, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.providerId">providerId</a></code> | <code>string</code> | The ID of the provider. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.use">use</a></code> | <code>string</code> | The purpose of the key. Possible values: ["ENCRYPTION"]. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.workforcePoolId">workforcePoolId</a></code> | <code>string</code> | The ID of the workforce pool. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/iam_workforce_pool_provider_key#id IamWorkforcePoolProviderKey#id}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts">IamWorkforcePoolProviderKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyData`<sup>Required</sup> <a name="keyData" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.keyData"></a>

```typescript
public readonly keyData: IamWorkforcePoolProviderKeyKeyData;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a>

key_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/iam_workforce_pool_provider_key#key_data IamWorkforcePoolProviderKey#key_data}

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

The ID to use for the key, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/iam_workforce_pool_provider_key#key_id IamWorkforcePoolProviderKey#key_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/iam_workforce_pool_provider_key#location IamWorkforcePoolProviderKey#location}

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

The ID of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/iam_workforce_pool_provider_key#provider_id IamWorkforcePoolProviderKey#provider_id}

---

##### `use`<sup>Required</sup> <a name="use" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.use"></a>

```typescript
public readonly use: string;
```

- *Type:* string

The purpose of the key. Possible values: ["ENCRYPTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/iam_workforce_pool_provider_key#use IamWorkforcePoolProviderKey#use}

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.workforcePoolId"></a>

```typescript
public readonly workforcePoolId: string;
```

- *Type:* string

The ID of the workforce pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/iam_workforce_pool_provider_key#workforce_pool_id IamWorkforcePoolProviderKey#workforce_pool_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/iam_workforce_pool_provider_key#id IamWorkforcePoolProviderKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IamWorkforcePoolProviderKeyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts">IamWorkforcePoolProviderKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/iam_workforce_pool_provider_key#timeouts IamWorkforcePoolProviderKey#timeouts}

---

### IamWorkforcePoolProviderKeyKeyData <a name="IamWorkforcePoolProviderKeyKeyData" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData.Initializer"></a>

```typescript
import { iamWorkforcePoolProviderKey } from '@cdktf/provider-google'

const iamWorkforcePoolProviderKeyKeyData: iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData.property.keySpec">keySpec</a></code> | <code>string</code> | The specifications for the key. Possible values: ["RSA_2048", "RSA_3072", "RSA_4096"]. |

---

##### `keySpec`<sup>Required</sup> <a name="keySpec" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData.property.keySpec"></a>

```typescript
public readonly keySpec: string;
```

- *Type:* string

The specifications for the key. Possible values: ["RSA_2048", "RSA_3072", "RSA_4096"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/iam_workforce_pool_provider_key#key_spec IamWorkforcePoolProviderKey#key_spec}

---

### IamWorkforcePoolProviderKeyTimeouts <a name="IamWorkforcePoolProviderKeyTimeouts" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts.Initializer"></a>

```typescript
import { iamWorkforcePoolProviderKey } from '@cdktf/provider-google'

const iamWorkforcePoolProviderKeyTimeouts: iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/iam_workforce_pool_provider_key#create IamWorkforcePoolProviderKey#create}. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/iam_workforce_pool_provider_key#delete IamWorkforcePoolProviderKey#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/iam_workforce_pool_provider_key#create IamWorkforcePoolProviderKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/iam_workforce_pool_provider_key#delete IamWorkforcePoolProviderKey#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamWorkforcePoolProviderKeyKeyDataOutputReference <a name="IamWorkforcePoolProviderKeyKeyDataOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer"></a>

```typescript
import { iamWorkforcePoolProviderKey } from '@cdktf/provider-google'

new iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.notAfterTime">notAfterTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.notBeforeTime">notBeforeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpecInput">keySpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpec">keySpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `notAfterTime`<sup>Required</sup> <a name="notAfterTime" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.notAfterTime"></a>

```typescript
public readonly notAfterTime: string;
```

- *Type:* string

---

##### `notBeforeTime`<sup>Required</sup> <a name="notBeforeTime" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.notBeforeTime"></a>

```typescript
public readonly notBeforeTime: string;
```

- *Type:* string

---

##### `keySpecInput`<sup>Optional</sup> <a name="keySpecInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpecInput"></a>

```typescript
public readonly keySpecInput: string;
```

- *Type:* string

---

##### `keySpec`<sup>Required</sup> <a name="keySpec" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.keySpec"></a>

```typescript
public readonly keySpec: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamWorkforcePoolProviderKeyKeyData;
```

- *Type:* <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyKeyData">IamWorkforcePoolProviderKeyKeyData</a>

---


### IamWorkforcePoolProviderKeyTimeoutsOutputReference <a name="IamWorkforcePoolProviderKeyTimeoutsOutputReference" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { iamWorkforcePoolProviderKey } from '@cdktf/provider-google'

new iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts">IamWorkforcePoolProviderKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamWorkforcePoolProviderKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamWorkforcePoolProviderKey.IamWorkforcePoolProviderKeyTimeouts">IamWorkforcePoolProviderKeyTimeouts</a>

---



