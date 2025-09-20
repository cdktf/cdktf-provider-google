# `cloudfunctions2FunctionIamBinding` Submodule <a name="`cloudfunctions2FunctionIamBinding` Submodule" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloudfunctions2FunctionIamBinding <a name="Cloudfunctions2FunctionIamBinding" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudfunctions2_function_iam_binding google_cloudfunctions2_function_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer"></a>

```typescript
import { cloudfunctions2FunctionIamBinding } from '@cdktf/provider-google'

new cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding(scope: Construct, id: string, config: Cloudfunctions2FunctionIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig">Cloudfunctions2FunctionIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig">Cloudfunctions2FunctionIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.putCondition"></a>

```typescript
public putCondition(value: Cloudfunctions2FunctionIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition">Cloudfunctions2FunctionIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Cloudfunctions2FunctionIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.isConstruct"></a>

```typescript
import { cloudfunctions2FunctionIamBinding } from '@cdktf/provider-google'

cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.isTerraformElement"></a>

```typescript
import { cloudfunctions2FunctionIamBinding } from '@cdktf/provider-google'

cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.isTerraformResource"></a>

```typescript
import { cloudfunctions2FunctionIamBinding } from '@cdktf/provider-google'

cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.generateConfigForImport"></a>

```typescript
import { cloudfunctions2FunctionIamBinding } from '@cdktf/provider-google'

cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Cloudfunctions2FunctionIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Cloudfunctions2FunctionIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Cloudfunctions2FunctionIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudfunctions2_function_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Cloudfunctions2FunctionIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference">Cloudfunctions2FunctionIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.cloudFunctionInput">cloudFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition">Cloudfunctions2FunctionIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.cloudFunction">cloudFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.condition"></a>

```typescript
public readonly condition: Cloudfunctions2FunctionIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference">Cloudfunctions2FunctionIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `cloudFunctionInput`<sup>Optional</sup> <a name="cloudFunctionInput" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.cloudFunctionInput"></a>

```typescript
public readonly cloudFunctionInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: Cloudfunctions2FunctionIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition">Cloudfunctions2FunctionIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `cloudFunction`<sup>Required</sup> <a name="cloudFunction" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.cloudFunction"></a>

```typescript
public readonly cloudFunction: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Cloudfunctions2FunctionIamBindingCondition <a name="Cloudfunctions2FunctionIamBindingCondition" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition.Initializer"></a>

```typescript
import { cloudfunctions2FunctionIamBinding } from '@cdktf/provider-google'

const cloudfunctions2FunctionIamBindingCondition: cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudfunctions2_function_iam_binding#expression Cloudfunctions2FunctionIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudfunctions2_function_iam_binding#title Cloudfunctions2FunctionIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudfunctions2_function_iam_binding#description Cloudfunctions2FunctionIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudfunctions2_function_iam_binding#expression Cloudfunctions2FunctionIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudfunctions2_function_iam_binding#title Cloudfunctions2FunctionIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudfunctions2_function_iam_binding#description Cloudfunctions2FunctionIamBinding#description}.

---

### Cloudfunctions2FunctionIamBindingConfig <a name="Cloudfunctions2FunctionIamBindingConfig" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.Initializer"></a>

```typescript
import { cloudfunctions2FunctionIamBinding } from '@cdktf/provider-google'

const cloudfunctions2FunctionIamBindingConfig: cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.cloudFunction">cloudFunction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudfunctions2_function_iam_binding#cloud_function Cloudfunctions2FunctionIamBinding#cloud_function}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudfunctions2_function_iam_binding#members Cloudfunctions2FunctionIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudfunctions2_function_iam_binding#role Cloudfunctions2FunctionIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition">Cloudfunctions2FunctionIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudfunctions2_function_iam_binding#id Cloudfunctions2FunctionIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudfunctions2_function_iam_binding#location Cloudfunctions2FunctionIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudfunctions2_function_iam_binding#project Cloudfunctions2FunctionIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudFunction`<sup>Required</sup> <a name="cloudFunction" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.cloudFunction"></a>

```typescript
public readonly cloudFunction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudfunctions2_function_iam_binding#cloud_function Cloudfunctions2FunctionIamBinding#cloud_function}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudfunctions2_function_iam_binding#members Cloudfunctions2FunctionIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudfunctions2_function_iam_binding#role Cloudfunctions2FunctionIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: Cloudfunctions2FunctionIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition">Cloudfunctions2FunctionIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudfunctions2_function_iam_binding#condition Cloudfunctions2FunctionIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudfunctions2_function_iam_binding#id Cloudfunctions2FunctionIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudfunctions2_function_iam_binding#location Cloudfunctions2FunctionIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudfunctions2_function_iam_binding#project Cloudfunctions2FunctionIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### Cloudfunctions2FunctionIamBindingConditionOutputReference <a name="Cloudfunctions2FunctionIamBindingConditionOutputReference" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { cloudfunctions2FunctionIamBinding } from '@cdktf/provider-google'

new cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition">Cloudfunctions2FunctionIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Cloudfunctions2FunctionIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.cloudfunctions2FunctionIamBinding.Cloudfunctions2FunctionIamBindingCondition">Cloudfunctions2FunctionIamBindingCondition</a>

---



