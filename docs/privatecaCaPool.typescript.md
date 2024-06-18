# `privatecaCaPool` Submodule <a name="`privatecaCaPool` Submodule" id="@cdktf/provider-google.privatecaCaPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatecaCaPool <a name="PrivatecaCaPool" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool google_privateca_ca_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPool(scope: Construct, id: string, config: PrivatecaCaPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig">PrivatecaCaPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig">PrivatecaCaPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putIssuancePolicy">putIssuancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putPublishingOptions">putPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetIssuancePolicy">resetIssuancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetPublishingOptions">resetPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIssuancePolicy` <a name="putIssuancePolicy" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putIssuancePolicy"></a>

```typescript
public putIssuancePolicy(value: PrivatecaCaPoolIssuancePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putIssuancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy">PrivatecaCaPoolIssuancePolicy</a>

---

##### `putPublishingOptions` <a name="putPublishingOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putPublishingOptions"></a>

```typescript
public putPublishingOptions(value: PrivatecaCaPoolPublishingOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putPublishingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions">PrivatecaCaPoolPublishingOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putTimeouts"></a>

```typescript
public putTimeouts(value: PrivatecaCaPoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts">PrivatecaCaPoolTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIssuancePolicy` <a name="resetIssuancePolicy" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetIssuancePolicy"></a>

```typescript
public resetIssuancePolicy(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPublishingOptions` <a name="resetPublishingOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetPublishingOptions"></a>

```typescript
public resetPublishingOptions(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivatecaCaPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isConstruct"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

privatecaCaPool.PrivatecaCaPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isTerraformElement"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

privatecaCaPool.PrivatecaCaPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isTerraformResource"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

privatecaCaPool.PrivatecaCaPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.generateConfigForImport"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

privatecaCaPool.PrivatecaCaPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PrivatecaCaPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivatecaCaPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivatecaCaPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivatecaCaPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.issuancePolicy">issuancePolicy</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference">PrivatecaCaPoolIssuancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.publishingOptions">publishingOptions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference">PrivatecaCaPoolPublishingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference">PrivatecaCaPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.issuancePolicyInput">issuancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy">PrivatecaCaPoolIssuancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.publishingOptionsInput">publishingOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions">PrivatecaCaPoolPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts">PrivatecaCaPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.tier">tier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `issuancePolicy`<sup>Required</sup> <a name="issuancePolicy" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.issuancePolicy"></a>

```typescript
public readonly issuancePolicy: PrivatecaCaPoolIssuancePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference">PrivatecaCaPoolIssuancePolicyOutputReference</a>

---

##### `publishingOptions`<sup>Required</sup> <a name="publishingOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.publishingOptions"></a>

```typescript
public readonly publishingOptions: PrivatecaCaPoolPublishingOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference">PrivatecaCaPoolPublishingOptionsOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.timeouts"></a>

```typescript
public readonly timeouts: PrivatecaCaPoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference">PrivatecaCaPoolTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `issuancePolicyInput`<sup>Optional</sup> <a name="issuancePolicyInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.issuancePolicyInput"></a>

```typescript
public readonly issuancePolicyInput: PrivatecaCaPoolIssuancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy">PrivatecaCaPoolIssuancePolicy</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `publishingOptionsInput`<sup>Optional</sup> <a name="publishingOptionsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.publishingOptionsInput"></a>

```typescript
public readonly publishingOptionsInput: PrivatecaCaPoolPublishingOptions;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions">PrivatecaCaPoolPublishingOptions</a>

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PrivatecaCaPoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts">PrivatecaCaPoolTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatecaCaPoolConfig <a name="PrivatecaCaPoolConfig" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

const privatecaCaPoolConfig: privatecaCaPool.PrivatecaCaPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.location">location</a></code> | <code>string</code> | Location of the CaPool. A full list of valid locations can be found by running 'gcloud privateca locations list'. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.name">name</a></code> | <code>string</code> | The name for this CaPool. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.tier">tier</a></code> | <code>string</code> | The Tier of this CaPool. Possible values: ["ENTERPRISE", "DEVOPS"]. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#id PrivatecaCaPool#id}. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.issuancePolicy">issuancePolicy</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy">PrivatecaCaPoolIssuancePolicy</a></code> | issuance_policy block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#project PrivatecaCaPool#project}. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.publishingOptions">publishingOptions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions">PrivatecaCaPoolPublishingOptions</a></code> | publishing_options block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts">PrivatecaCaPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location of the CaPool. A full list of valid locations can be found by running 'gcloud privateca locations list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#location PrivatecaCaPool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for this CaPool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#name PrivatecaCaPool#name}

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

The Tier of this CaPool. Possible values: ["ENTERPRISE", "DEVOPS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#tier PrivatecaCaPool#tier}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#id PrivatecaCaPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuancePolicy`<sup>Optional</sup> <a name="issuancePolicy" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.issuancePolicy"></a>

```typescript
public readonly issuancePolicy: PrivatecaCaPoolIssuancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy">PrivatecaCaPoolIssuancePolicy</a>

issuance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#issuance_policy PrivatecaCaPool#issuance_policy}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels with user-defined metadata.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
"1.3kg", "count": "3" }.


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#labels PrivatecaCaPool#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#project PrivatecaCaPool#project}.

---

##### `publishingOptions`<sup>Optional</sup> <a name="publishingOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.publishingOptions"></a>

```typescript
public readonly publishingOptions: PrivatecaCaPoolPublishingOptions;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions">PrivatecaCaPoolPublishingOptions</a>

publishing_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#publishing_options PrivatecaCaPool#publishing_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PrivatecaCaPoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts">PrivatecaCaPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#timeouts PrivatecaCaPool#timeouts}

---

### PrivatecaCaPoolIssuancePolicy <a name="PrivatecaCaPoolIssuancePolicy" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

const privatecaCaPoolIssuancePolicy: privatecaCaPool.PrivatecaCaPoolIssuancePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.allowedIssuanceModes">allowedIssuanceModes</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a></code> | allowed_issuance_modes block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.allowedKeyTypes">allowedKeyTypes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes">PrivatecaCaPoolIssuancePolicyAllowedKeyTypes</a>[]</code> | allowed_key_types block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.baselineValues">baselineValues</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues">PrivatecaCaPoolIssuancePolicyBaselineValues</a></code> | baseline_values block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.identityConstraints">identityConstraints</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints">PrivatecaCaPoolIssuancePolicyIdentityConstraints</a></code> | identity_constraints block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.maximumLifetime">maximumLifetime</a></code> | <code>string</code> | The maximum lifetime allowed for issued Certificates. |

---

##### `allowedIssuanceModes`<sup>Optional</sup> <a name="allowedIssuanceModes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.allowedIssuanceModes"></a>

```typescript
public readonly allowedIssuanceModes: PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

allowed_issuance_modes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#allowed_issuance_modes PrivatecaCaPool#allowed_issuance_modes}

---

##### `allowedKeyTypes`<sup>Optional</sup> <a name="allowedKeyTypes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.allowedKeyTypes"></a>

```typescript
public readonly allowedKeyTypes: IResolvable | PrivatecaCaPoolIssuancePolicyAllowedKeyTypes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes">PrivatecaCaPoolIssuancePolicyAllowedKeyTypes</a>[]

allowed_key_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#allowed_key_types PrivatecaCaPool#allowed_key_types}

---

##### `baselineValues`<sup>Optional</sup> <a name="baselineValues" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.baselineValues"></a>

```typescript
public readonly baselineValues: PrivatecaCaPoolIssuancePolicyBaselineValues;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues">PrivatecaCaPoolIssuancePolicyBaselineValues</a>

baseline_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#baseline_values PrivatecaCaPool#baseline_values}

---

##### `identityConstraints`<sup>Optional</sup> <a name="identityConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.identityConstraints"></a>

```typescript
public readonly identityConstraints: PrivatecaCaPoolIssuancePolicyIdentityConstraints;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints">PrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

identity_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#identity_constraints PrivatecaCaPool#identity_constraints}

---

##### `maximumLifetime`<sup>Optional</sup> <a name="maximumLifetime" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.maximumLifetime"></a>

```typescript
public readonly maximumLifetime: string;
```

- *Type:* string

The maximum lifetime allowed for issued Certificates.

Note that if the issuing CertificateAuthority
expires before a Certificate's requested maximumLifetime, the effective lifetime will be explicitly truncated to match it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#maximum_lifetime PrivatecaCaPool#maximum_lifetime}

---

### PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes <a name="PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

const privatecaCaPoolIssuancePolicyAllowedIssuanceModes: privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowConfigBasedIssuance">allowConfigBasedIssuance</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, allows callers to create Certificates by specifying a CertificateConfig. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowCsrBasedIssuance">allowCsrBasedIssuance</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, allows callers to create Certificates by specifying a CSR. |

---

##### `allowConfigBasedIssuance`<sup>Required</sup> <a name="allowConfigBasedIssuance" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowConfigBasedIssuance"></a>

```typescript
public readonly allowConfigBasedIssuance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, allows callers to create Certificates by specifying a CertificateConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#allow_config_based_issuance PrivatecaCaPool#allow_config_based_issuance}

---

##### `allowCsrBasedIssuance`<sup>Required</sup> <a name="allowCsrBasedIssuance" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowCsrBasedIssuance"></a>

```typescript
public readonly allowCsrBasedIssuance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, allows callers to create Certificates by specifying a CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#allow_csr_based_issuance PrivatecaCaPool#allow_csr_based_issuance}

---

### PrivatecaCaPoolIssuancePolicyAllowedKeyTypes <a name="PrivatecaCaPoolIssuancePolicyAllowedKeyTypes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

const privatecaCaPoolIssuancePolicyAllowedKeyTypes: privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.ellipticCurve">ellipticCurve</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a></code> | elliptic_curve block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.rsa">rsa</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a></code> | rsa block. |

---

##### `ellipticCurve`<sup>Optional</sup> <a name="ellipticCurve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.ellipticCurve"></a>

```typescript
public readonly ellipticCurve: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

elliptic_curve block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#elliptic_curve PrivatecaCaPool#elliptic_curve}

---

##### `rsa`<sup>Optional</sup> <a name="rsa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.rsa"></a>

```typescript
public readonly rsa: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

rsa block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#rsa PrivatecaCaPool#rsa}

---

### PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve <a name="PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

const privatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve: privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>string</code> | The algorithm used. Possible values: ["ECDSA_P256", "ECDSA_P384", "EDDSA_25519"]. |

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="signatureAlgorithm" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve.property.signatureAlgorithm"></a>

```typescript
public readonly signatureAlgorithm: string;
```

- *Type:* string

The algorithm used. Possible values: ["ECDSA_P256", "ECDSA_P384", "EDDSA_25519"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#signature_algorithm PrivatecaCaPool#signature_algorithm}

---

### PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa <a name="PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

const privatecaCaPoolIssuancePolicyAllowedKeyTypesRsa: privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.maxModulusSize">maxModulusSize</a></code> | <code>string</code> | The maximum allowed RSA modulus size, in bits. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.minModulusSize">minModulusSize</a></code> | <code>string</code> | The minimum allowed RSA modulus size, in bits. |

---

##### `maxModulusSize`<sup>Optional</sup> <a name="maxModulusSize" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.maxModulusSize"></a>

```typescript
public readonly maxModulusSize: string;
```

- *Type:* string

The maximum allowed RSA modulus size, in bits.

If this is not set, or if set to zero, the
service will not enforce an explicit upper bound on RSA modulus sizes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#max_modulus_size PrivatecaCaPool#max_modulus_size}

---

##### `minModulusSize`<sup>Optional</sup> <a name="minModulusSize" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.minModulusSize"></a>

```typescript
public readonly minModulusSize: string;
```

- *Type:* string

The minimum allowed RSA modulus size, in bits.

If this is not set, or if set to zero, the
service-level min RSA modulus size will continue to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#min_modulus_size PrivatecaCaPool#min_modulus_size}

---

### PrivatecaCaPoolIssuancePolicyBaselineValues <a name="PrivatecaCaPoolIssuancePolicyBaselineValues" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

const privatecaCaPoolIssuancePolicyBaselineValues: privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.caOptions">caOptions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a></code> | ca_options block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.keyUsage">keyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a></code> | key_usage block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.additionalExtensions">additionalExtensions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions</a>[]</code> | additional_extensions block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.aiaOcspServers">aiaOcspServers</a></code> | <code>string[]</code> | Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.nameConstraints">nameConstraints</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a></code> | name_constraints block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.policyIds">policyIds</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds">PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds</a>[]</code> | policy_ids block. |

---

##### `caOptions`<sup>Required</sup> <a name="caOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.caOptions"></a>

```typescript
public readonly caOptions: PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

ca_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#ca_options PrivatecaCaPool#ca_options}

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.keyUsage"></a>

```typescript
public readonly keyUsage: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#key_usage PrivatecaCaPool#key_usage}

---

##### `additionalExtensions`<sup>Optional</sup> <a name="additionalExtensions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.additionalExtensions"></a>

```typescript
public readonly additionalExtensions: IResolvable | PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions</a>[]

additional_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#additional_extensions PrivatecaCaPool#additional_extensions}

---

##### `aiaOcspServers`<sup>Optional</sup> <a name="aiaOcspServers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.aiaOcspServers"></a>

```typescript
public readonly aiaOcspServers: string[];
```

- *Type:* string[]

Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#aia_ocsp_servers PrivatecaCaPool#aia_ocsp_servers}

---

##### `nameConstraints`<sup>Optional</sup> <a name="nameConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.nameConstraints"></a>

```typescript
public readonly nameConstraints: PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

name_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#name_constraints PrivatecaCaPool#name_constraints}

---

##### `policyIds`<sup>Optional</sup> <a name="policyIds" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.policyIds"></a>

```typescript
public readonly policyIds: IResolvable | PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds">PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds</a>[]

policy_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#policy_ids PrivatecaCaPool#policy_ids}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

const privatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions: privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.critical">critical</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error). |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.objectId">objectId</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a></code> | object_id block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.value">value</a></code> | <code>string</code> | The value of this X.509 extension. A base64-encoded string. |

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.critical"></a>

```typescript
public readonly critical: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#critical PrivatecaCaPool#critical}

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.objectId"></a>

```typescript
public readonly objectId: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

object_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#object_id PrivatecaCaPool#object_id}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of this X.509 extension. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#value PrivatecaCaPool#value}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

const privatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId: privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId.property.objectIdPath">objectIdPath</a></code> | <code>number[]</code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId.property.objectIdPath"></a>

```typescript
public readonly objectIdPath: number[];
```

- *Type:* number[]

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#object_id_path PrivatecaCaPool#object_id_path}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

const privatecaCaPoolIssuancePolicyBaselineValuesCaOptions: privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.isCa">isCa</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, the "CA" in Basic Constraints extension will be set to true. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.maxIssuerPathLength">maxIssuerPathLength</a></code> | <code>number</code> | Refers to the "path length constraint" in Basic Constraints extension. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.nonCa">nonCa</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, the "CA" in Basic Constraints extension will be set to false. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.zeroMaxIssuerPathLength">zeroMaxIssuerPathLength</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, the "path length constraint" in Basic Constraints extension will be set to 0. |

---

##### `isCa`<sup>Optional</sup> <a name="isCa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.isCa"></a>

```typescript
public readonly isCa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, the "CA" in Basic Constraints extension will be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#is_ca PrivatecaCaPool#is_ca}

---

##### `maxIssuerPathLength`<sup>Optional</sup> <a name="maxIssuerPathLength" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.maxIssuerPathLength"></a>

```typescript
public readonly maxIssuerPathLength: number;
```

- *Type:* number

Refers to the "path length constraint" in Basic Constraints extension.

For a CA certificate, this value describes the depth of
subordinate CA certificates that are allowed. If this value is less than 0, the request will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#max_issuer_path_length PrivatecaCaPool#max_issuer_path_length}

---

##### `nonCa`<sup>Optional</sup> <a name="nonCa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.nonCa"></a>

```typescript
public readonly nonCa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, the "CA" in Basic Constraints extension will be set to false.

If both 'is_ca' and 'non_ca' are unset, the extension will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#non_ca PrivatecaCaPool#non_ca}

---

##### `zeroMaxIssuerPathLength`<sup>Optional</sup> <a name="zeroMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.zeroMaxIssuerPathLength"></a>

```typescript
public readonly zeroMaxIssuerPathLength: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, the "path length constraint" in Basic Constraints extension will be set to 0.

if both 'max_issuer_path_length' and 'zero_max_issuer_path_length' are unset,
the max path length will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#zero_max_issuer_path_length PrivatecaCaPool#zero_max_issuer_path_length}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

const privatecaCaPoolIssuancePolicyBaselineValuesKeyUsage: privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.baseKeyUsage">baseKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a></code> | base_key_usage block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.extendedKeyUsage">extendedKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a></code> | extended_key_usage block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.unknownExtendedKeyUsages">unknownExtendedKeyUsages</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages</a>[]</code> | unknown_extended_key_usages block. |

---

##### `baseKeyUsage`<sup>Required</sup> <a name="baseKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.baseKeyUsage"></a>

```typescript
public readonly baseKeyUsage: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

base_key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#base_key_usage PrivatecaCaPool#base_key_usage}

---

##### `extendedKeyUsage`<sup>Required</sup> <a name="extendedKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.extendedKeyUsage"></a>

```typescript
public readonly extendedKeyUsage: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

extended_key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#extended_key_usage PrivatecaCaPool#extended_key_usage}

---

##### `unknownExtendedKeyUsages`<sup>Optional</sup> <a name="unknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.unknownExtendedKeyUsages"></a>

```typescript
public readonly unknownExtendedKeyUsages: IResolvable | PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages</a>[]

unknown_extended_key_usages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#unknown_extended_key_usages PrivatecaCaPool#unknown_extended_key_usages}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

const privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage: privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.certSign">certSign</a></code> | <code>boolean \| cdktf.IResolvable</code> | The key may be used to sign certificates. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.contentCommitment">contentCommitment</a></code> | <code>boolean \| cdktf.IResolvable</code> | The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation". |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.crlSign">crlSign</a></code> | <code>boolean \| cdktf.IResolvable</code> | The key may be used sign certificate revocation lists. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.dataEncipherment">dataEncipherment</a></code> | <code>boolean \| cdktf.IResolvable</code> | The key may be used to encipher data. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.decipherOnly">decipherOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | The key may be used to decipher only. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.digitalSignature">digitalSignature</a></code> | <code>boolean \| cdktf.IResolvable</code> | The key may be used for digital signatures. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.encipherOnly">encipherOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | The key may be used to encipher only. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyAgreement">keyAgreement</a></code> | <code>boolean \| cdktf.IResolvable</code> | The key may be used in a key agreement protocol. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyEncipherment">keyEncipherment</a></code> | <code>boolean \| cdktf.IResolvable</code> | The key may be used to encipher other keys. |

---

##### `certSign`<sup>Optional</sup> <a name="certSign" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.certSign"></a>

```typescript
public readonly certSign: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The key may be used to sign certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#cert_sign PrivatecaCaPool#cert_sign}

---

##### `contentCommitment`<sup>Optional</sup> <a name="contentCommitment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.contentCommitment"></a>

```typescript
public readonly contentCommitment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#content_commitment PrivatecaCaPool#content_commitment}

---

##### `crlSign`<sup>Optional</sup> <a name="crlSign" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.crlSign"></a>

```typescript
public readonly crlSign: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The key may be used sign certificate revocation lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#crl_sign PrivatecaCaPool#crl_sign}

---

##### `dataEncipherment`<sup>Optional</sup> <a name="dataEncipherment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.dataEncipherment"></a>

```typescript
public readonly dataEncipherment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The key may be used to encipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#data_encipherment PrivatecaCaPool#data_encipherment}

---

##### `decipherOnly`<sup>Optional</sup> <a name="decipherOnly" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.decipherOnly"></a>

```typescript
public readonly decipherOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The key may be used to decipher only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#decipher_only PrivatecaCaPool#decipher_only}

---

##### `digitalSignature`<sup>Optional</sup> <a name="digitalSignature" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.digitalSignature"></a>

```typescript
public readonly digitalSignature: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The key may be used for digital signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#digital_signature PrivatecaCaPool#digital_signature}

---

##### `encipherOnly`<sup>Optional</sup> <a name="encipherOnly" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.encipherOnly"></a>

```typescript
public readonly encipherOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The key may be used to encipher only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#encipher_only PrivatecaCaPool#encipher_only}

---

##### `keyAgreement`<sup>Optional</sup> <a name="keyAgreement" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyAgreement"></a>

```typescript
public readonly keyAgreement: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The key may be used in a key agreement protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#key_agreement PrivatecaCaPool#key_agreement}

---

##### `keyEncipherment`<sup>Optional</sup> <a name="keyEncipherment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyEncipherment"></a>

```typescript
public readonly keyEncipherment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The key may be used to encipher other keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#key_encipherment PrivatecaCaPool#key_encipherment}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

const privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage: privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.clientAuth">clientAuth</a></code> | <code>boolean \| cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.codeSigning">codeSigning</a></code> | <code>boolean \| cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication". |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.emailProtection">emailProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection". |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.ocspSigning">ocspSigning</a></code> | <code>boolean \| cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses". |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.serverAuth">serverAuth</a></code> | <code>boolean \| cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.timeStamping">timeStamping</a></code> | <code>boolean \| cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time". |

---

##### `clientAuth`<sup>Optional</sup> <a name="clientAuth" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.clientAuth"></a>

```typescript
public readonly clientAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#client_auth PrivatecaCaPool#client_auth}

---

##### `codeSigning`<sup>Optional</sup> <a name="codeSigning" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.codeSigning"></a>

```typescript
public readonly codeSigning: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#code_signing PrivatecaCaPool#code_signing}

---

##### `emailProtection`<sup>Optional</sup> <a name="emailProtection" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.emailProtection"></a>

```typescript
public readonly emailProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#email_protection PrivatecaCaPool#email_protection}

---

##### `ocspSigning`<sup>Optional</sup> <a name="ocspSigning" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.ocspSigning"></a>

```typescript
public readonly ocspSigning: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#ocsp_signing PrivatecaCaPool#ocsp_signing}

---

##### `serverAuth`<sup>Optional</sup> <a name="serverAuth" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.serverAuth"></a>

```typescript
public readonly serverAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#server_auth PrivatecaCaPool#server_auth}

---

##### `timeStamping`<sup>Optional</sup> <a name="timeStamping" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.timeStamping"></a>

```typescript
public readonly timeStamping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#time_stamping PrivatecaCaPool#time_stamping}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

const privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages: privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages.property.objectIdPath">objectIdPath</a></code> | <code>number[]</code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages.property.objectIdPath"></a>

```typescript
public readonly objectIdPath: number[];
```

- *Type:* number[]

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#object_id_path PrivatecaCaPool#object_id_path}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

const privatecaCaPoolIssuancePolicyBaselineValuesNameConstraints: privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.critical">critical</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether or not the name constraints are marked critical. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedDnsNames">excludedDnsNames</a></code> | <code>string[]</code> | Contains excluded DNS names. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedEmailAddresses">excludedEmailAddresses</a></code> | <code>string[]</code> | Contains the excluded email addresses. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedIpRanges">excludedIpRanges</a></code> | <code>string[]</code> | Contains the excluded IP ranges. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedUris">excludedUris</a></code> | <code>string[]</code> | Contains the excluded URIs that apply to the host part of the name. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedDnsNames">permittedDnsNames</a></code> | <code>string[]</code> | Contains permitted DNS names. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedEmailAddresses">permittedEmailAddresses</a></code> | <code>string[]</code> | Contains the permitted email addresses. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedIpRanges">permittedIpRanges</a></code> | <code>string[]</code> | Contains the permitted IP ranges. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedUris">permittedUris</a></code> | <code>string[]</code> | Contains the permitted URIs that apply to the host part of the name. |

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.critical"></a>

```typescript
public readonly critical: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether or not the name constraints are marked critical.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#critical PrivatecaCaPool#critical}

---

##### `excludedDnsNames`<sup>Optional</sup> <a name="excludedDnsNames" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedDnsNames"></a>

```typescript
public readonly excludedDnsNames: string[];
```

- *Type:* string[]

Contains excluded DNS names.

Any DNS name that can be
constructed by simply adding zero or more labels to
the left-hand side of the name satisfies the name constraint.
For example, 'example.com', 'www.example.com', 'www.sub.example.com'
would satisfy 'example.com' while 'example1.com' does not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#excluded_dns_names PrivatecaCaPool#excluded_dns_names}

---

##### `excludedEmailAddresses`<sup>Optional</sup> <a name="excludedEmailAddresses" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedEmailAddresses"></a>

```typescript
public readonly excludedEmailAddresses: string[];
```

- *Type:* string[]

Contains the excluded email addresses.

The value can be a particular
email address, a hostname to indicate all email addresses on that host or
a domain with a leading period (e.g. '.example.com') to indicate
all email addresses in that domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#excluded_email_addresses PrivatecaCaPool#excluded_email_addresses}

---

##### `excludedIpRanges`<sup>Optional</sup> <a name="excludedIpRanges" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedIpRanges"></a>

```typescript
public readonly excludedIpRanges: string[];
```

- *Type:* string[]

Contains the excluded IP ranges.

For IPv4 addresses, the ranges
are expressed using CIDR notation as specified in RFC 4632.
For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#excluded_ip_ranges PrivatecaCaPool#excluded_ip_ranges}

---

##### `excludedUris`<sup>Optional</sup> <a name="excludedUris" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedUris"></a>

```typescript
public readonly excludedUris: string[];
```

- *Type:* string[]

Contains the excluded URIs that apply to the host part of the name.

The value can be a hostname or a domain with a
leading period (like '.example.com')

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#excluded_uris PrivatecaCaPool#excluded_uris}

---

##### `permittedDnsNames`<sup>Optional</sup> <a name="permittedDnsNames" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedDnsNames"></a>

```typescript
public readonly permittedDnsNames: string[];
```

- *Type:* string[]

Contains permitted DNS names.

Any DNS name that can be
constructed by simply adding zero or more labels to
the left-hand side of the name satisfies the name constraint.
For example, 'example.com', 'www.example.com', 'www.sub.example.com'
would satisfy 'example.com' while 'example1.com' does not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#permitted_dns_names PrivatecaCaPool#permitted_dns_names}

---

##### `permittedEmailAddresses`<sup>Optional</sup> <a name="permittedEmailAddresses" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedEmailAddresses"></a>

```typescript
public readonly permittedEmailAddresses: string[];
```

- *Type:* string[]

Contains the permitted email addresses.

The value can be a particular
email address, a hostname to indicate all email addresses on that host or
a domain with a leading period (e.g. '.example.com') to indicate
all email addresses in that domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#permitted_email_addresses PrivatecaCaPool#permitted_email_addresses}

---

##### `permittedIpRanges`<sup>Optional</sup> <a name="permittedIpRanges" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedIpRanges"></a>

```typescript
public readonly permittedIpRanges: string[];
```

- *Type:* string[]

Contains the permitted IP ranges.

For IPv4 addresses, the ranges
are expressed using CIDR notation as specified in RFC 4632.
For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#permitted_ip_ranges PrivatecaCaPool#permitted_ip_ranges}

---

##### `permittedUris`<sup>Optional</sup> <a name="permittedUris" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedUris"></a>

```typescript
public readonly permittedUris: string[];
```

- *Type:* string[]

Contains the permitted URIs that apply to the host part of the name.

The value can be a hostname or a domain with a
leading period (like '.example.com')

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#permitted_uris PrivatecaCaPool#permitted_uris}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

const privatecaCaPoolIssuancePolicyBaselineValuesPolicyIds: privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds.property.objectIdPath">objectIdPath</a></code> | <code>number[]</code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds.property.objectIdPath"></a>

```typescript
public readonly objectIdPath: number[];
```

- *Type:* number[]

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#object_id_path PrivatecaCaPool#object_id_path}

---

### PrivatecaCaPoolIssuancePolicyIdentityConstraints <a name="PrivatecaCaPoolIssuancePolicyIdentityConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

const privatecaCaPoolIssuancePolicyIdentityConstraints: privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectAltNamesPassthrough">allowSubjectAltNamesPassthrough</a></code> | <code>boolean \| cdktf.IResolvable</code> | If this is set, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectPassthrough">allowSubjectPassthrough</a></code> | <code>boolean \| cdktf.IResolvable</code> | If this is set, the Subject field may be copied from a certificate request into the signed certificate. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints.property.celExpression">celExpression</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a></code> | cel_expression block. |

---

##### `allowSubjectAltNamesPassthrough`<sup>Required</sup> <a name="allowSubjectAltNamesPassthrough" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectAltNamesPassthrough"></a>

```typescript
public readonly allowSubjectAltNamesPassthrough: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If this is set, the SubjectAltNames extension may be copied from a certificate request into the signed certificate.

Otherwise, the requested SubjectAltNames will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#allow_subject_alt_names_passthrough PrivatecaCaPool#allow_subject_alt_names_passthrough}

---

##### `allowSubjectPassthrough`<sup>Required</sup> <a name="allowSubjectPassthrough" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectPassthrough"></a>

```typescript
public readonly allowSubjectPassthrough: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If this is set, the Subject field may be copied from a certificate request into the signed certificate.

Otherwise, the requested Subject will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#allow_subject_passthrough PrivatecaCaPool#allow_subject_passthrough}

---

##### `celExpression`<sup>Optional</sup> <a name="celExpression" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints.property.celExpression"></a>

```typescript
public readonly celExpression: PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

cel_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#cel_expression PrivatecaCaPool#cel_expression}

---

### PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression <a name="PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

const privatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression: privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.description">description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.location">location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.title">title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#expression PrivatecaCaPool#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the expression.

This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#description PrivatecaCaPool#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#location PrivatecaCaPool#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#title PrivatecaCaPool#title}

---

### PrivatecaCaPoolPublishingOptions <a name="PrivatecaCaPoolPublishingOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

const privatecaCaPoolPublishingOptions: privatecaCaPool.PrivatecaCaPoolPublishingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions.property.publishCaCert">publishCaCert</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, publishes each CertificateAuthority's CA certificate and includes its URL in the "Authority Information Access" X.509 extension in all issued Certificates. If this is false, the CA certificate will not be published and the corresponding X.509 extension will not be written in issued certificates. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions.property.publishCrl">publishCrl</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, publishes each CertificateAuthority's CRL and includes its URL in the "CRL Distribution Points" X.509 extension in all issued Certificates. If this is false, CRLs will not be published and the corresponding X.509 extension will not be written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are also rebuilt shortly after a certificate is revoked. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions.property.encodingFormat">encodingFormat</a></code> | <code>string</code> | Specifies the encoding format of each CertificateAuthority's CA certificate and CRLs. |

---

##### `publishCaCert`<sup>Required</sup> <a name="publishCaCert" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions.property.publishCaCert"></a>

```typescript
public readonly publishCaCert: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, publishes each CertificateAuthority's CA certificate and includes its URL in the "Authority Information Access" X.509 extension in all issued Certificates. If this is false, the CA certificate will not be published and the corresponding X.509 extension will not be written in issued certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#publish_ca_cert PrivatecaCaPool#publish_ca_cert}

---

##### `publishCrl`<sup>Required</sup> <a name="publishCrl" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions.property.publishCrl"></a>

```typescript
public readonly publishCrl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, publishes each CertificateAuthority's CRL and includes its URL in the "CRL Distribution Points" X.509 extension in all issued Certificates. If this is false, CRLs will not be published and the corresponding X.509 extension will not be written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are also rebuilt shortly after a certificate is revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#publish_crl PrivatecaCaPool#publish_crl}

---

##### `encodingFormat`<sup>Optional</sup> <a name="encodingFormat" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions.property.encodingFormat"></a>

```typescript
public readonly encodingFormat: string;
```

- *Type:* string

Specifies the encoding format of each CertificateAuthority's CA certificate and CRLs.

If this is omitted, CA certificates and CRLs
will be published in PEM. Possible values: ["PEM", "DER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#encoding_format PrivatecaCaPool#encoding_format}

---

### PrivatecaCaPoolTimeouts <a name="PrivatecaCaPoolTimeouts" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

const privatecaCaPoolTimeouts: privatecaCaPool.PrivatecaCaPoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#create PrivatecaCaPool#create}. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#delete PrivatecaCaPool#delete}. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#update PrivatecaCaPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#create PrivatecaCaPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#delete PrivatecaCaPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/privateca_ca_pool#update PrivatecaCaPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference <a name="PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuanceInput">allowConfigBasedIssuanceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuanceInput">allowCsrBasedIssuanceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuance">allowConfigBasedIssuance</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuance">allowCsrBasedIssuance</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowConfigBasedIssuanceInput`<sup>Optional</sup> <a name="allowConfigBasedIssuanceInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuanceInput"></a>

```typescript
public readonly allowConfigBasedIssuanceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowCsrBasedIssuanceInput`<sup>Optional</sup> <a name="allowCsrBasedIssuanceInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuanceInput"></a>

```typescript
public readonly allowCsrBasedIssuanceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowConfigBasedIssuance`<sup>Required</sup> <a name="allowConfigBasedIssuance" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuance"></a>

```typescript
public readonly allowConfigBasedIssuance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowCsrBasedIssuance`<sup>Required</sup> <a name="allowCsrBasedIssuance" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuance"></a>

```typescript
public readonly allowCsrBasedIssuance: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

---


### PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference <a name="PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithmInput">signatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `signatureAlgorithmInput`<sup>Optional</sup> <a name="signatureAlgorithmInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithmInput"></a>

```typescript
public readonly signatureAlgorithmInput: string;
```

- *Type:* string

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="signatureAlgorithm" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithm"></a>

```typescript
public readonly signatureAlgorithm: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

---


### PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList <a name="PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.get"></a>

```typescript
public get(index: number): PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes">PrivatecaCaPoolIssuancePolicyAllowedKeyTypes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivatecaCaPoolIssuancePolicyAllowedKeyTypes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes">PrivatecaCaPoolIssuancePolicyAllowedKeyTypes</a>[]

---


### PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference <a name="PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putEllipticCurve">putEllipticCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putRsa">putRsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetEllipticCurve">resetEllipticCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetRsa">resetRsa</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEllipticCurve` <a name="putEllipticCurve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putEllipticCurve"></a>

```typescript
public putEllipticCurve(value: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putEllipticCurve.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

---

##### `putRsa` <a name="putRsa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putRsa"></a>

```typescript
public putRsa(value: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putRsa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

---

##### `resetEllipticCurve` <a name="resetEllipticCurve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetEllipticCurve"></a>

```typescript
public resetEllipticCurve(): void
```

##### `resetRsa` <a name="resetRsa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetRsa"></a>

```typescript
public resetRsa(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurve">ellipticCurve</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsa">rsa</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurveInput">ellipticCurveInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsaInput">rsaInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes">PrivatecaCaPoolIssuancePolicyAllowedKeyTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ellipticCurve`<sup>Required</sup> <a name="ellipticCurve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurve"></a>

```typescript
public readonly ellipticCurve: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference</a>

---

##### `rsa`<sup>Required</sup> <a name="rsa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsa"></a>

```typescript
public readonly rsa: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference</a>

---

##### `ellipticCurveInput`<sup>Optional</sup> <a name="ellipticCurveInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurveInput"></a>

```typescript
public readonly ellipticCurveInput: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

---

##### `rsaInput`<sup>Optional</sup> <a name="rsaInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsaInput"></a>

```typescript
public readonly rsaInput: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivatecaCaPoolIssuancePolicyAllowedKeyTypes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes">PrivatecaCaPoolIssuancePolicyAllowedKeyTypes</a>

---


### PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference <a name="PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMaxModulusSize">resetMaxModulusSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMinModulusSize">resetMinModulusSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxModulusSize` <a name="resetMaxModulusSize" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMaxModulusSize"></a>

```typescript
public resetMaxModulusSize(): void
```

##### `resetMinModulusSize` <a name="resetMinModulusSize" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMinModulusSize"></a>

```typescript
public resetMinModulusSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSizeInput">maxModulusSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSizeInput">minModulusSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSize">maxModulusSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSize">minModulusSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxModulusSizeInput`<sup>Optional</sup> <a name="maxModulusSizeInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSizeInput"></a>

```typescript
public readonly maxModulusSizeInput: string;
```

- *Type:* string

---

##### `minModulusSizeInput`<sup>Optional</sup> <a name="minModulusSizeInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSizeInput"></a>

```typescript
public readonly minModulusSizeInput: string;
```

- *Type:* string

---

##### `maxModulusSize`<sup>Required</sup> <a name="maxModulusSize" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSize"></a>

```typescript
public readonly maxModulusSize: string;
```

- *Type:* string

---

##### `minModulusSize`<sup>Required</sup> <a name="minModulusSize" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSize"></a>

```typescript
public readonly minModulusSize: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.get"></a>

```typescript
public get(index: number): PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions</a>[]

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPathInput">objectIdPathInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPath">objectIdPath</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectIdPathInput`<sup>Optional</sup> <a name="objectIdPathInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPathInput"></a>

```typescript
public readonly objectIdPathInput: number[];
```

- *Type:* number[]

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPath"></a>

```typescript
public readonly objectIdPath: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.putObjectId">putObjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putObjectId` <a name="putObjectId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.putObjectId"></a>

```typescript
public putObjectId(value: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.putObjectId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectId">objectId</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.criticalInput">criticalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectIdInput">objectIdInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.critical">critical</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectId"></a>

```typescript
public readonly objectId: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference</a>

---

##### `criticalInput`<sup>Optional</sup> <a name="criticalInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.criticalInput"></a>

```typescript
public readonly criticalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.critical"></a>

```typescript
public readonly critical: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetIsCa">resetIsCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetMaxIssuerPathLength">resetMaxIssuerPathLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetNonCa">resetNonCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetZeroMaxIssuerPathLength">resetZeroMaxIssuerPathLength</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsCa` <a name="resetIsCa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetIsCa"></a>

```typescript
public resetIsCa(): void
```

##### `resetMaxIssuerPathLength` <a name="resetMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetMaxIssuerPathLength"></a>

```typescript
public resetMaxIssuerPathLength(): void
```

##### `resetNonCa` <a name="resetNonCa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetNonCa"></a>

```typescript
public resetNonCa(): void
```

##### `resetZeroMaxIssuerPathLength` <a name="resetZeroMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetZeroMaxIssuerPathLength"></a>

```typescript
public resetZeroMaxIssuerPathLength(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCaInput">isCaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLengthInput">maxIssuerPathLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCaInput">nonCaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLengthInput">zeroMaxIssuerPathLengthInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCa">isCa</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLength">maxIssuerPathLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCa">nonCa</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLength">zeroMaxIssuerPathLength</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isCaInput`<sup>Optional</sup> <a name="isCaInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCaInput"></a>

```typescript
public readonly isCaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxIssuerPathLengthInput`<sup>Optional</sup> <a name="maxIssuerPathLengthInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLengthInput"></a>

```typescript
public readonly maxIssuerPathLengthInput: number;
```

- *Type:* number

---

##### `nonCaInput`<sup>Optional</sup> <a name="nonCaInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCaInput"></a>

```typescript
public readonly nonCaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `zeroMaxIssuerPathLengthInput`<sup>Optional</sup> <a name="zeroMaxIssuerPathLengthInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLengthInput"></a>

```typescript
public readonly zeroMaxIssuerPathLengthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isCa`<sup>Required</sup> <a name="isCa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCa"></a>

```typescript
public readonly isCa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxIssuerPathLength`<sup>Required</sup> <a name="maxIssuerPathLength" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLength"></a>

```typescript
public readonly maxIssuerPathLength: number;
```

- *Type:* number

---

##### `nonCa`<sup>Required</sup> <a name="nonCa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCa"></a>

```typescript
public readonly nonCa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `zeroMaxIssuerPathLength`<sup>Required</sup> <a name="zeroMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLength"></a>

```typescript
public readonly zeroMaxIssuerPathLength: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCertSign">resetCertSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetContentCommitment">resetContentCommitment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCrlSign">resetCrlSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDataEncipherment">resetDataEncipherment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDecipherOnly">resetDecipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDigitalSignature">resetDigitalSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetEncipherOnly">resetEncipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyAgreement">resetKeyAgreement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyEncipherment">resetKeyEncipherment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertSign` <a name="resetCertSign" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCertSign"></a>

```typescript
public resetCertSign(): void
```

##### `resetContentCommitment` <a name="resetContentCommitment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetContentCommitment"></a>

```typescript
public resetContentCommitment(): void
```

##### `resetCrlSign` <a name="resetCrlSign" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCrlSign"></a>

```typescript
public resetCrlSign(): void
```

##### `resetDataEncipherment` <a name="resetDataEncipherment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDataEncipherment"></a>

```typescript
public resetDataEncipherment(): void
```

##### `resetDecipherOnly` <a name="resetDecipherOnly" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDecipherOnly"></a>

```typescript
public resetDecipherOnly(): void
```

##### `resetDigitalSignature` <a name="resetDigitalSignature" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDigitalSignature"></a>

```typescript
public resetDigitalSignature(): void
```

##### `resetEncipherOnly` <a name="resetEncipherOnly" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetEncipherOnly"></a>

```typescript
public resetEncipherOnly(): void
```

##### `resetKeyAgreement` <a name="resetKeyAgreement" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyAgreement"></a>

```typescript
public resetKeyAgreement(): void
```

##### `resetKeyEncipherment` <a name="resetKeyEncipherment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyEncipherment"></a>

```typescript
public resetKeyEncipherment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSignInput">certSignInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitmentInput">contentCommitmentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSignInput">crlSignInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEnciphermentInput">dataEnciphermentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnlyInput">decipherOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignatureInput">digitalSignatureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnlyInput">encipherOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreementInput">keyAgreementInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEnciphermentInput">keyEnciphermentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSign">certSign</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitment">contentCommitment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSign">crlSign</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment">dataEncipherment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnly">decipherOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignature">digitalSignature</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnly">encipherOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreement">keyAgreement</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment">keyEncipherment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certSignInput`<sup>Optional</sup> <a name="certSignInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSignInput"></a>

```typescript
public readonly certSignInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `contentCommitmentInput`<sup>Optional</sup> <a name="contentCommitmentInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitmentInput"></a>

```typescript
public readonly contentCommitmentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crlSignInput`<sup>Optional</sup> <a name="crlSignInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSignInput"></a>

```typescript
public readonly crlSignInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataEnciphermentInput`<sup>Optional</sup> <a name="dataEnciphermentInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEnciphermentInput"></a>

```typescript
public readonly dataEnciphermentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `decipherOnlyInput`<sup>Optional</sup> <a name="decipherOnlyInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnlyInput"></a>

```typescript
public readonly decipherOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `digitalSignatureInput`<sup>Optional</sup> <a name="digitalSignatureInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignatureInput"></a>

```typescript
public readonly digitalSignatureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encipherOnlyInput`<sup>Optional</sup> <a name="encipherOnlyInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnlyInput"></a>

```typescript
public readonly encipherOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyAgreementInput`<sup>Optional</sup> <a name="keyAgreementInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreementInput"></a>

```typescript
public readonly keyAgreementInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyEnciphermentInput`<sup>Optional</sup> <a name="keyEnciphermentInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEnciphermentInput"></a>

```typescript
public readonly keyEnciphermentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `certSign`<sup>Required</sup> <a name="certSign" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSign"></a>

```typescript
public readonly certSign: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `contentCommitment`<sup>Required</sup> <a name="contentCommitment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitment"></a>

```typescript
public readonly contentCommitment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crlSign`<sup>Required</sup> <a name="crlSign" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSign"></a>

```typescript
public readonly crlSign: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataEncipherment`<sup>Required</sup> <a name="dataEncipherment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment"></a>

```typescript
public readonly dataEncipherment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `decipherOnly`<sup>Required</sup> <a name="decipherOnly" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnly"></a>

```typescript
public readonly decipherOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `digitalSignature`<sup>Required</sup> <a name="digitalSignature" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignature"></a>

```typescript
public readonly digitalSignature: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encipherOnly`<sup>Required</sup> <a name="encipherOnly" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnly"></a>

```typescript
public readonly encipherOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyAgreement`<sup>Required</sup> <a name="keyAgreement" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreement"></a>

```typescript
public readonly keyAgreement: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyEncipherment`<sup>Required</sup> <a name="keyEncipherment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment"></a>

```typescript
public readonly keyEncipherment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetClientAuth">resetClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetCodeSigning">resetCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetEmailProtection">resetEmailProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetOcspSigning">resetOcspSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetServerAuth">resetServerAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetTimeStamping">resetTimeStamping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientAuth` <a name="resetClientAuth" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetClientAuth"></a>

```typescript
public resetClientAuth(): void
```

##### `resetCodeSigning` <a name="resetCodeSigning" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetCodeSigning"></a>

```typescript
public resetCodeSigning(): void
```

##### `resetEmailProtection` <a name="resetEmailProtection" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetEmailProtection"></a>

```typescript
public resetEmailProtection(): void
```

##### `resetOcspSigning` <a name="resetOcspSigning" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetOcspSigning"></a>

```typescript
public resetOcspSigning(): void
```

##### `resetServerAuth` <a name="resetServerAuth" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetServerAuth"></a>

```typescript
public resetServerAuth(): void
```

##### `resetTimeStamping` <a name="resetTimeStamping" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetTimeStamping"></a>

```typescript
public resetTimeStamping(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuthInput">clientAuthInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigningInput">codeSigningInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtectionInput">emailProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigningInput">ocspSigningInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuthInput">serverAuthInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStampingInput">timeStampingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuth">clientAuth</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigning">codeSigning</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtection">emailProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning">ocspSigning</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuth">serverAuth</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStamping">timeStamping</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientAuthInput`<sup>Optional</sup> <a name="clientAuthInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuthInput"></a>

```typescript
public readonly clientAuthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `codeSigningInput`<sup>Optional</sup> <a name="codeSigningInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigningInput"></a>

```typescript
public readonly codeSigningInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `emailProtectionInput`<sup>Optional</sup> <a name="emailProtectionInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtectionInput"></a>

```typescript
public readonly emailProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ocspSigningInput`<sup>Optional</sup> <a name="ocspSigningInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigningInput"></a>

```typescript
public readonly ocspSigningInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serverAuthInput`<sup>Optional</sup> <a name="serverAuthInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuthInput"></a>

```typescript
public readonly serverAuthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeStampingInput`<sup>Optional</sup> <a name="timeStampingInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStampingInput"></a>

```typescript
public readonly timeStampingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientAuth`<sup>Required</sup> <a name="clientAuth" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuth"></a>

```typescript
public readonly clientAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `codeSigning`<sup>Required</sup> <a name="codeSigning" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigning"></a>

```typescript
public readonly codeSigning: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `emailProtection`<sup>Required</sup> <a name="emailProtection" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtection"></a>

```typescript
public readonly emailProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ocspSigning`<sup>Required</sup> <a name="ocspSigning" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning"></a>

```typescript
public readonly ocspSigning: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serverAuth`<sup>Required</sup> <a name="serverAuth" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuth"></a>

```typescript
public readonly serverAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeStamping`<sup>Required</sup> <a name="timeStamping" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStamping"></a>

```typescript
public readonly timeStamping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putBaseKeyUsage">putBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putExtendedKeyUsage">putExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages">putUnknownExtendedKeyUsages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resetUnknownExtendedKeyUsages">resetUnknownExtendedKeyUsages</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBaseKeyUsage` <a name="putBaseKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putBaseKeyUsage"></a>

```typescript
public putBaseKeyUsage(value: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putBaseKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

---

##### `putExtendedKeyUsage` <a name="putExtendedKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putExtendedKeyUsage"></a>

```typescript
public putExtendedKeyUsage(value: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putExtendedKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

---

##### `putUnknownExtendedKeyUsages` <a name="putUnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages"></a>

```typescript
public putUnknownExtendedKeyUsages(value: IResolvable | PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages</a>[]

---

##### `resetUnknownExtendedKeyUsages` <a name="resetUnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resetUnknownExtendedKeyUsages"></a>

```typescript
public resetUnknownExtendedKeyUsages(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsage">baseKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsage">extendedKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsages">unknownExtendedKeyUsages</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsageInput">baseKeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsageInput">extendedKeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsagesInput">unknownExtendedKeyUsagesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseKeyUsage`<sup>Required</sup> <a name="baseKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsage"></a>

```typescript
public readonly baseKeyUsage: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference</a>

---

##### `extendedKeyUsage`<sup>Required</sup> <a name="extendedKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsage"></a>

```typescript
public readonly extendedKeyUsage: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference</a>

---

##### `unknownExtendedKeyUsages`<sup>Required</sup> <a name="unknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsages"></a>

```typescript
public readonly unknownExtendedKeyUsages: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList</a>

---

##### `baseKeyUsageInput`<sup>Optional</sup> <a name="baseKeyUsageInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsageInput"></a>

```typescript
public readonly baseKeyUsageInput: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

---

##### `extendedKeyUsageInput`<sup>Optional</sup> <a name="extendedKeyUsageInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsageInput"></a>

```typescript
public readonly extendedKeyUsageInput: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

---

##### `unknownExtendedKeyUsagesInput`<sup>Optional</sup> <a name="unknownExtendedKeyUsagesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsagesInput"></a>

```typescript
public readonly unknownExtendedKeyUsagesInput: IResolvable | PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.get"></a>

```typescript
public get(index: number): PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages</a>[]

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPathInput">objectIdPathInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath">objectIdPath</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectIdPathInput`<sup>Optional</sup> <a name="objectIdPathInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPathInput"></a>

```typescript
public readonly objectIdPathInput: number[];
```

- *Type:* number[]

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath"></a>

```typescript
public readonly objectIdPath: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedDnsNames">resetExcludedDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedEmailAddresses">resetExcludedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedIpRanges">resetExcludedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedUris">resetExcludedUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedDnsNames">resetPermittedDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedEmailAddresses">resetPermittedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedIpRanges">resetPermittedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedUris">resetPermittedUris</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludedDnsNames` <a name="resetExcludedDnsNames" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedDnsNames"></a>

```typescript
public resetExcludedDnsNames(): void
```

##### `resetExcludedEmailAddresses` <a name="resetExcludedEmailAddresses" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedEmailAddresses"></a>

```typescript
public resetExcludedEmailAddresses(): void
```

##### `resetExcludedIpRanges` <a name="resetExcludedIpRanges" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedIpRanges"></a>

```typescript
public resetExcludedIpRanges(): void
```

##### `resetExcludedUris` <a name="resetExcludedUris" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedUris"></a>

```typescript
public resetExcludedUris(): void
```

##### `resetPermittedDnsNames` <a name="resetPermittedDnsNames" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedDnsNames"></a>

```typescript
public resetPermittedDnsNames(): void
```

##### `resetPermittedEmailAddresses` <a name="resetPermittedEmailAddresses" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedEmailAddresses"></a>

```typescript
public resetPermittedEmailAddresses(): void
```

##### `resetPermittedIpRanges` <a name="resetPermittedIpRanges" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedIpRanges"></a>

```typescript
public resetPermittedIpRanges(): void
```

##### `resetPermittedUris` <a name="resetPermittedUris" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedUris"></a>

```typescript
public resetPermittedUris(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.criticalInput">criticalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNamesInput">excludedDnsNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddressesInput">excludedEmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRangesInput">excludedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUrisInput">excludedUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNamesInput">permittedDnsNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddressesInput">permittedEmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRangesInput">permittedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUrisInput">permittedUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.critical">critical</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNames">excludedDnsNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddresses">excludedEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRanges">excludedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUris">excludedUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNames">permittedDnsNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddresses">permittedEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRanges">permittedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUris">permittedUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `criticalInput`<sup>Optional</sup> <a name="criticalInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.criticalInput"></a>

```typescript
public readonly criticalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludedDnsNamesInput`<sup>Optional</sup> <a name="excludedDnsNamesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNamesInput"></a>

```typescript
public readonly excludedDnsNamesInput: string[];
```

- *Type:* string[]

---

##### `excludedEmailAddressesInput`<sup>Optional</sup> <a name="excludedEmailAddressesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddressesInput"></a>

```typescript
public readonly excludedEmailAddressesInput: string[];
```

- *Type:* string[]

---

##### `excludedIpRangesInput`<sup>Optional</sup> <a name="excludedIpRangesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRangesInput"></a>

```typescript
public readonly excludedIpRangesInput: string[];
```

- *Type:* string[]

---

##### `excludedUrisInput`<sup>Optional</sup> <a name="excludedUrisInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUrisInput"></a>

```typescript
public readonly excludedUrisInput: string[];
```

- *Type:* string[]

---

##### `permittedDnsNamesInput`<sup>Optional</sup> <a name="permittedDnsNamesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNamesInput"></a>

```typescript
public readonly permittedDnsNamesInput: string[];
```

- *Type:* string[]

---

##### `permittedEmailAddressesInput`<sup>Optional</sup> <a name="permittedEmailAddressesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddressesInput"></a>

```typescript
public readonly permittedEmailAddressesInput: string[];
```

- *Type:* string[]

---

##### `permittedIpRangesInput`<sup>Optional</sup> <a name="permittedIpRangesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRangesInput"></a>

```typescript
public readonly permittedIpRangesInput: string[];
```

- *Type:* string[]

---

##### `permittedUrisInput`<sup>Optional</sup> <a name="permittedUrisInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUrisInput"></a>

```typescript
public readonly permittedUrisInput: string[];
```

- *Type:* string[]

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.critical"></a>

```typescript
public readonly critical: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludedDnsNames`<sup>Required</sup> <a name="excludedDnsNames" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNames"></a>

```typescript
public readonly excludedDnsNames: string[];
```

- *Type:* string[]

---

##### `excludedEmailAddresses`<sup>Required</sup> <a name="excludedEmailAddresses" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddresses"></a>

```typescript
public readonly excludedEmailAddresses: string[];
```

- *Type:* string[]

---

##### `excludedIpRanges`<sup>Required</sup> <a name="excludedIpRanges" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRanges"></a>

```typescript
public readonly excludedIpRanges: string[];
```

- *Type:* string[]

---

##### `excludedUris`<sup>Required</sup> <a name="excludedUris" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUris"></a>

```typescript
public readonly excludedUris: string[];
```

- *Type:* string[]

---

##### `permittedDnsNames`<sup>Required</sup> <a name="permittedDnsNames" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNames"></a>

```typescript
public readonly permittedDnsNames: string[];
```

- *Type:* string[]

---

##### `permittedEmailAddresses`<sup>Required</sup> <a name="permittedEmailAddresses" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddresses"></a>

```typescript
public readonly permittedEmailAddresses: string[];
```

- *Type:* string[]

---

##### `permittedIpRanges`<sup>Required</sup> <a name="permittedIpRanges" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRanges"></a>

```typescript
public readonly permittedIpRanges: string[];
```

- *Type:* string[]

---

##### `permittedUris`<sup>Required</sup> <a name="permittedUris" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUris"></a>

```typescript
public readonly permittedUris: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putAdditionalExtensions">putAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putCaOptions">putCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putKeyUsage">putKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putNameConstraints">putNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putPolicyIds">putPolicyIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAdditionalExtensions">resetAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAiaOcspServers">resetAiaOcspServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetNameConstraints">resetNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetPolicyIds">resetPolicyIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalExtensions` <a name="putAdditionalExtensions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putAdditionalExtensions"></a>

```typescript
public putAdditionalExtensions(value: IResolvable | PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putAdditionalExtensions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions</a>[]

---

##### `putCaOptions` <a name="putCaOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putCaOptions"></a>

```typescript
public putCaOptions(value: PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putCaOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

---

##### `putKeyUsage` <a name="putKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putKeyUsage"></a>

```typescript
public putKeyUsage(value: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

---

##### `putNameConstraints` <a name="putNameConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putNameConstraints"></a>

```typescript
public putNameConstraints(value: PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putNameConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

---

##### `putPolicyIds` <a name="putPolicyIds" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putPolicyIds"></a>

```typescript
public putPolicyIds(value: IResolvable | PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putPolicyIds.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds">PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds</a>[]

---

##### `resetAdditionalExtensions` <a name="resetAdditionalExtensions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAdditionalExtensions"></a>

```typescript
public resetAdditionalExtensions(): void
```

##### `resetAiaOcspServers` <a name="resetAiaOcspServers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAiaOcspServers"></a>

```typescript
public resetAiaOcspServers(): void
```

##### `resetNameConstraints` <a name="resetNameConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetNameConstraints"></a>

```typescript
public resetNameConstraints(): void
```

##### `resetPolicyIds` <a name="resetPolicyIds" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetPolicyIds"></a>

```typescript
public resetPolicyIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensions">additionalExtensions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptions">caOptions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsage">keyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraints">nameConstraints</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIds">policyIds</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList">PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensionsInput">additionalExtensionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServersInput">aiaOcspServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptionsInput">caOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsageInput">keyUsageInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraintsInput">nameConstraintsInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIdsInput">policyIdsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds">PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServers">aiaOcspServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues">PrivatecaCaPoolIssuancePolicyBaselineValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalExtensions`<sup>Required</sup> <a name="additionalExtensions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensions"></a>

```typescript
public readonly additionalExtensions: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList</a>

---

##### `caOptions`<sup>Required</sup> <a name="caOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptions"></a>

```typescript
public readonly caOptions: PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference</a>

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsage"></a>

```typescript
public readonly keyUsage: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference</a>

---

##### `nameConstraints`<sup>Required</sup> <a name="nameConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraints"></a>

```typescript
public readonly nameConstraints: PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference</a>

---

##### `policyIds`<sup>Required</sup> <a name="policyIds" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIds"></a>

```typescript
public readonly policyIds: PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList">PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList</a>

---

##### `additionalExtensionsInput`<sup>Optional</sup> <a name="additionalExtensionsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensionsInput"></a>

```typescript
public readonly additionalExtensionsInput: IResolvable | PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions</a>[]

---

##### `aiaOcspServersInput`<sup>Optional</sup> <a name="aiaOcspServersInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServersInput"></a>

```typescript
public readonly aiaOcspServersInput: string[];
```

- *Type:* string[]

---

##### `caOptionsInput`<sup>Optional</sup> <a name="caOptionsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptionsInput"></a>

```typescript
public readonly caOptionsInput: PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

---

##### `keyUsageInput`<sup>Optional</sup> <a name="keyUsageInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsageInput"></a>

```typescript
public readonly keyUsageInput: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

---

##### `nameConstraintsInput`<sup>Optional</sup> <a name="nameConstraintsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraintsInput"></a>

```typescript
public readonly nameConstraintsInput: PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

---

##### `policyIdsInput`<sup>Optional</sup> <a name="policyIdsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIdsInput"></a>

```typescript
public readonly policyIdsInput: IResolvable | PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds">PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds</a>[]

---

##### `aiaOcspServers`<sup>Required</sup> <a name="aiaOcspServers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServers"></a>

```typescript
public readonly aiaOcspServers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCaPoolIssuancePolicyBaselineValues;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues">PrivatecaCaPoolIssuancePolicyBaselineValues</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.get"></a>

```typescript
public get(index: number): PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds">PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds">PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds</a>[]

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPathInput">objectIdPathInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPath">objectIdPath</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds">PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectIdPathInput`<sup>Optional</sup> <a name="objectIdPathInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPathInput"></a>

```typescript
public readonly objectIdPathInput: number[];
```

- *Type:* number[]

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPath"></a>

```typescript
public readonly objectIdPath: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds">PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds</a>

---


### PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference <a name="PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

---


### PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference <a name="PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.putCelExpression">putCelExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resetCelExpression">resetCelExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCelExpression` <a name="putCelExpression" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.putCelExpression"></a>

```typescript
public putCelExpression(value: PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.putCelExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

---

##### `resetCelExpression` <a name="resetCelExpression" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resetCelExpression"></a>

```typescript
public resetCelExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpression">celExpression</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthroughInput">allowSubjectAltNamesPassthroughInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthroughInput">allowSubjectPassthroughInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpressionInput">celExpressionInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthrough">allowSubjectAltNamesPassthrough</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthrough">allowSubjectPassthrough</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints">PrivatecaCaPoolIssuancePolicyIdentityConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `celExpression`<sup>Required</sup> <a name="celExpression" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpression"></a>

```typescript
public readonly celExpression: PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference</a>

---

##### `allowSubjectAltNamesPassthroughInput`<sup>Optional</sup> <a name="allowSubjectAltNamesPassthroughInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthroughInput"></a>

```typescript
public readonly allowSubjectAltNamesPassthroughInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowSubjectPassthroughInput`<sup>Optional</sup> <a name="allowSubjectPassthroughInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthroughInput"></a>

```typescript
public readonly allowSubjectPassthroughInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `celExpressionInput`<sup>Optional</sup> <a name="celExpressionInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpressionInput"></a>

```typescript
public readonly celExpressionInput: PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

---

##### `allowSubjectAltNamesPassthrough`<sup>Required</sup> <a name="allowSubjectAltNamesPassthrough" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthrough"></a>

```typescript
public readonly allowSubjectAltNamesPassthrough: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowSubjectPassthrough`<sup>Required</sup> <a name="allowSubjectPassthrough" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthrough"></a>

```typescript
public readonly allowSubjectPassthrough: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCaPoolIssuancePolicyIdentityConstraints;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints">PrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

---


### PrivatecaCaPoolIssuancePolicyOutputReference <a name="PrivatecaCaPoolIssuancePolicyOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putAllowedIssuanceModes">putAllowedIssuanceModes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putAllowedKeyTypes">putAllowedKeyTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putBaselineValues">putBaselineValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putIdentityConstraints">putIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedIssuanceModes">resetAllowedIssuanceModes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedKeyTypes">resetAllowedKeyTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetBaselineValues">resetBaselineValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetIdentityConstraints">resetIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetMaximumLifetime">resetMaximumLifetime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedIssuanceModes` <a name="putAllowedIssuanceModes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putAllowedIssuanceModes"></a>

```typescript
public putAllowedIssuanceModes(value: PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putAllowedIssuanceModes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

---

##### `putAllowedKeyTypes` <a name="putAllowedKeyTypes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putAllowedKeyTypes"></a>

```typescript
public putAllowedKeyTypes(value: IResolvable | PrivatecaCaPoolIssuancePolicyAllowedKeyTypes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putAllowedKeyTypes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes">PrivatecaCaPoolIssuancePolicyAllowedKeyTypes</a>[]

---

##### `putBaselineValues` <a name="putBaselineValues" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putBaselineValues"></a>

```typescript
public putBaselineValues(value: PrivatecaCaPoolIssuancePolicyBaselineValues): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putBaselineValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues">PrivatecaCaPoolIssuancePolicyBaselineValues</a>

---

##### `putIdentityConstraints` <a name="putIdentityConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putIdentityConstraints"></a>

```typescript
public putIdentityConstraints(value: PrivatecaCaPoolIssuancePolicyIdentityConstraints): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putIdentityConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints">PrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

---

##### `resetAllowedIssuanceModes` <a name="resetAllowedIssuanceModes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedIssuanceModes"></a>

```typescript
public resetAllowedIssuanceModes(): void
```

##### `resetAllowedKeyTypes` <a name="resetAllowedKeyTypes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedKeyTypes"></a>

```typescript
public resetAllowedKeyTypes(): void
```

##### `resetBaselineValues` <a name="resetBaselineValues" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetBaselineValues"></a>

```typescript
public resetBaselineValues(): void
```

##### `resetIdentityConstraints` <a name="resetIdentityConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetIdentityConstraints"></a>

```typescript
public resetIdentityConstraints(): void
```

##### `resetMaximumLifetime` <a name="resetMaximumLifetime" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetMaximumLifetime"></a>

```typescript
public resetMaximumLifetime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModes">allowedIssuanceModes</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypes">allowedKeyTypes</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValues">baselineValues</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraints">identityConstraints</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference">PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModesInput">allowedIssuanceModesInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypesInput">allowedKeyTypesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes">PrivatecaCaPoolIssuancePolicyAllowedKeyTypes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValuesInput">baselineValuesInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues">PrivatecaCaPoolIssuancePolicyBaselineValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraintsInput">identityConstraintsInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints">PrivatecaCaPoolIssuancePolicyIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetimeInput">maximumLifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetime">maximumLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy">PrivatecaCaPoolIssuancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedIssuanceModes`<sup>Required</sup> <a name="allowedIssuanceModes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModes"></a>

```typescript
public readonly allowedIssuanceModes: PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference</a>

---

##### `allowedKeyTypes`<sup>Required</sup> <a name="allowedKeyTypes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypes"></a>

```typescript
public readonly allowedKeyTypes: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList</a>

---

##### `baselineValues`<sup>Required</sup> <a name="baselineValues" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValues"></a>

```typescript
public readonly baselineValues: PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference</a>

---

##### `identityConstraints`<sup>Required</sup> <a name="identityConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraints"></a>

```typescript
public readonly identityConstraints: PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference">PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference</a>

---

##### `allowedIssuanceModesInput`<sup>Optional</sup> <a name="allowedIssuanceModesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModesInput"></a>

```typescript
public readonly allowedIssuanceModesInput: PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

---

##### `allowedKeyTypesInput`<sup>Optional</sup> <a name="allowedKeyTypesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypesInput"></a>

```typescript
public readonly allowedKeyTypesInput: IResolvable | PrivatecaCaPoolIssuancePolicyAllowedKeyTypes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes">PrivatecaCaPoolIssuancePolicyAllowedKeyTypes</a>[]

---

##### `baselineValuesInput`<sup>Optional</sup> <a name="baselineValuesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValuesInput"></a>

```typescript
public readonly baselineValuesInput: PrivatecaCaPoolIssuancePolicyBaselineValues;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues">PrivatecaCaPoolIssuancePolicyBaselineValues</a>

---

##### `identityConstraintsInput`<sup>Optional</sup> <a name="identityConstraintsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraintsInput"></a>

```typescript
public readonly identityConstraintsInput: PrivatecaCaPoolIssuancePolicyIdentityConstraints;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints">PrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

---

##### `maximumLifetimeInput`<sup>Optional</sup> <a name="maximumLifetimeInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetimeInput"></a>

```typescript
public readonly maximumLifetimeInput: string;
```

- *Type:* string

---

##### `maximumLifetime`<sup>Required</sup> <a name="maximumLifetime" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetime"></a>

```typescript
public readonly maximumLifetime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCaPoolIssuancePolicy;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy">PrivatecaCaPoolIssuancePolicy</a>

---


### PrivatecaCaPoolPublishingOptionsOutputReference <a name="PrivatecaCaPoolPublishingOptionsOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.resetEncodingFormat">resetEncodingFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncodingFormat` <a name="resetEncodingFormat" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.resetEncodingFormat"></a>

```typescript
public resetEncodingFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.encodingFormatInput">encodingFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCertInput">publishCaCertInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrlInput">publishCrlInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.encodingFormat">encodingFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCert">publishCaCert</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrl">publishCrl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions">PrivatecaCaPoolPublishingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encodingFormatInput`<sup>Optional</sup> <a name="encodingFormatInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.encodingFormatInput"></a>

```typescript
public readonly encodingFormatInput: string;
```

- *Type:* string

---

##### `publishCaCertInput`<sup>Optional</sup> <a name="publishCaCertInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCertInput"></a>

```typescript
public readonly publishCaCertInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publishCrlInput`<sup>Optional</sup> <a name="publishCrlInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrlInput"></a>

```typescript
public readonly publishCrlInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encodingFormat`<sup>Required</sup> <a name="encodingFormat" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.encodingFormat"></a>

```typescript
public readonly encodingFormat: string;
```

- *Type:* string

---

##### `publishCaCert`<sup>Required</sup> <a name="publishCaCert" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCert"></a>

```typescript
public readonly publishCaCert: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publishCrl`<sup>Required</sup> <a name="publishCrl" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrl"></a>

```typescript
public readonly publishCrl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivatecaCaPoolPublishingOptions;
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions">PrivatecaCaPoolPublishingOptions</a>

---


### PrivatecaCaPoolTimeoutsOutputReference <a name="PrivatecaCaPoolTimeoutsOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { privatecaCaPool } from '@cdktf/provider-google'

new privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts">PrivatecaCaPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivatecaCaPoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts">PrivatecaCaPoolTimeouts</a>

---



