# `beyondcorpApplicationIamBinding` Submodule <a name="`beyondcorpApplicationIamBinding` Submodule" id="@cdktf/provider-google.beyondcorpApplicationIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BeyondcorpApplicationIamBinding <a name="BeyondcorpApplicationIamBinding" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/beyondcorp_application_iam_binding google_beyondcorp_application_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer"></a>

```typescript
import { beyondcorpApplicationIamBinding } from '@cdktf/provider-google'

new beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding(scope: Construct, id: string, config: BeyondcorpApplicationIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig">BeyondcorpApplicationIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig">BeyondcorpApplicationIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.putCondition"></a>

```typescript
public putCondition(value: BeyondcorpApplicationIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BeyondcorpApplicationIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isConstruct"></a>

```typescript
import { beyondcorpApplicationIamBinding } from '@cdktf/provider-google'

beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isTerraformElement"></a>

```typescript
import { beyondcorpApplicationIamBinding } from '@cdktf/provider-google'

beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isTerraformResource"></a>

```typescript
import { beyondcorpApplicationIamBinding } from '@cdktf/provider-google'

beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.generateConfigForImport"></a>

```typescript
import { beyondcorpApplicationIamBinding } from '@cdktf/provider-google'

beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BeyondcorpApplicationIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BeyondcorpApplicationIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BeyondcorpApplicationIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/beyondcorp_application_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BeyondcorpApplicationIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference">BeyondcorpApplicationIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.securityGatewaysIdInput">securityGatewaysIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.securityGatewaysId">securityGatewaysId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.condition"></a>

```typescript
public readonly condition: BeyondcorpApplicationIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference">BeyondcorpApplicationIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: BeyondcorpApplicationIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `securityGatewaysIdInput`<sup>Optional</sup> <a name="securityGatewaysIdInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.securityGatewaysIdInput"></a>

```typescript
public readonly securityGatewaysIdInput: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `securityGatewaysId`<sup>Required</sup> <a name="securityGatewaysId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.securityGatewaysId"></a>

```typescript
public readonly securityGatewaysId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BeyondcorpApplicationIamBindingCondition <a name="BeyondcorpApplicationIamBindingCondition" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition.Initializer"></a>

```typescript
import { beyondcorpApplicationIamBinding } from '@cdktf/provider-google'

const beyondcorpApplicationIamBindingCondition: beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/beyondcorp_application_iam_binding#expression BeyondcorpApplicationIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/beyondcorp_application_iam_binding#title BeyondcorpApplicationIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/beyondcorp_application_iam_binding#description BeyondcorpApplicationIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/beyondcorp_application_iam_binding#expression BeyondcorpApplicationIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/beyondcorp_application_iam_binding#title BeyondcorpApplicationIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/beyondcorp_application_iam_binding#description BeyondcorpApplicationIamBinding#description}.

---

### BeyondcorpApplicationIamBindingConfig <a name="BeyondcorpApplicationIamBindingConfig" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.Initializer"></a>

```typescript
import { beyondcorpApplicationIamBinding } from '@cdktf/provider-google'

const beyondcorpApplicationIamBindingConfig: beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/beyondcorp_application_iam_binding#application_id BeyondcorpApplicationIamBinding#application_id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/beyondcorp_application_iam_binding#members BeyondcorpApplicationIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/beyondcorp_application_iam_binding#role BeyondcorpApplicationIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.securityGatewaysId">securityGatewaysId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/beyondcorp_application_iam_binding#security_gateways_id BeyondcorpApplicationIamBinding#security_gateways_id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/beyondcorp_application_iam_binding#id BeyondcorpApplicationIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/beyondcorp_application_iam_binding#project BeyondcorpApplicationIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/beyondcorp_application_iam_binding#application_id BeyondcorpApplicationIamBinding#application_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/beyondcorp_application_iam_binding#members BeyondcorpApplicationIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/beyondcorp_application_iam_binding#role BeyondcorpApplicationIamBinding#role}.

---

##### `securityGatewaysId`<sup>Required</sup> <a name="securityGatewaysId" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.securityGatewaysId"></a>

```typescript
public readonly securityGatewaysId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/beyondcorp_application_iam_binding#security_gateways_id BeyondcorpApplicationIamBinding#security_gateways_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: BeyondcorpApplicationIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/beyondcorp_application_iam_binding#condition BeyondcorpApplicationIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/beyondcorp_application_iam_binding#id BeyondcorpApplicationIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/beyondcorp_application_iam_binding#project BeyondcorpApplicationIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BeyondcorpApplicationIamBindingConditionOutputReference <a name="BeyondcorpApplicationIamBindingConditionOutputReference" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { beyondcorpApplicationIamBinding } from '@cdktf/provider-google'

new beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BeyondcorpApplicationIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpApplicationIamBinding.BeyondcorpApplicationIamBindingCondition">BeyondcorpApplicationIamBindingCondition</a>

---



