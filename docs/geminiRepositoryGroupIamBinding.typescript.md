# `geminiRepositoryGroupIamBinding` Submodule <a name="`geminiRepositoryGroupIamBinding` Submodule" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiRepositoryGroupIamBinding <a name="GeminiRepositoryGroupIamBinding" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding google_gemini_repository_group_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer"></a>

```typescript
import { geminiRepositoryGroupIamBinding } from '@cdktf/provider-google'

new geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding(scope: Construct, id: string, config: GeminiRepositoryGroupIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig">GeminiRepositoryGroupIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig">GeminiRepositoryGroupIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.putCondition"></a>

```typescript
public putCondition(value: GeminiRepositoryGroupIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition">GeminiRepositoryGroupIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiRepositoryGroupIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.isConstruct"></a>

```typescript
import { geminiRepositoryGroupIamBinding } from '@cdktf/provider-google'

geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.isTerraformElement"></a>

```typescript
import { geminiRepositoryGroupIamBinding } from '@cdktf/provider-google'

geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.isTerraformResource"></a>

```typescript
import { geminiRepositoryGroupIamBinding } from '@cdktf/provider-google'

geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.generateConfigForImport"></a>

```typescript
import { geminiRepositoryGroupIamBinding } from '@cdktf/provider-google'

geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GeminiRepositoryGroupIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GeminiRepositoryGroupIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GeminiRepositoryGroupIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GeminiRepositoryGroupIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference">GeminiRepositoryGroupIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.codeRepositoryIndexInput">codeRepositoryIndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition">GeminiRepositoryGroupIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.repositoryGroupIdInput">repositoryGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.codeRepositoryIndex">codeRepositoryIndex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.repositoryGroupId">repositoryGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.condition"></a>

```typescript
public readonly condition: GeminiRepositoryGroupIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference">GeminiRepositoryGroupIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `codeRepositoryIndexInput`<sup>Optional</sup> <a name="codeRepositoryIndexInput" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.codeRepositoryIndexInput"></a>

```typescript
public readonly codeRepositoryIndexInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: GeminiRepositoryGroupIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition">GeminiRepositoryGroupIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `repositoryGroupIdInput`<sup>Optional</sup> <a name="repositoryGroupIdInput" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.repositoryGroupIdInput"></a>

```typescript
public readonly repositoryGroupIdInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `codeRepositoryIndex`<sup>Required</sup> <a name="codeRepositoryIndex" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.codeRepositoryIndex"></a>

```typescript
public readonly codeRepositoryIndex: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `repositoryGroupId`<sup>Required</sup> <a name="repositoryGroupId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.repositoryGroupId"></a>

```typescript
public readonly repositoryGroupId: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiRepositoryGroupIamBindingCondition <a name="GeminiRepositoryGroupIamBindingCondition" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition.Initializer"></a>

```typescript
import { geminiRepositoryGroupIamBinding } from '@cdktf/provider-google'

const geminiRepositoryGroupIamBindingCondition: geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding#expression GeminiRepositoryGroupIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding#title GeminiRepositoryGroupIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding#description GeminiRepositoryGroupIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding#expression GeminiRepositoryGroupIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding#title GeminiRepositoryGroupIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding#description GeminiRepositoryGroupIamBinding#description}.

---

### GeminiRepositoryGroupIamBindingConfig <a name="GeminiRepositoryGroupIamBindingConfig" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.Initializer"></a>

```typescript
import { geminiRepositoryGroupIamBinding } from '@cdktf/provider-google'

const geminiRepositoryGroupIamBindingConfig: geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.codeRepositoryIndex">codeRepositoryIndex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding#code_repository_index GeminiRepositoryGroupIamBinding#code_repository_index}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding#members GeminiRepositoryGroupIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.repositoryGroupId">repositoryGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding#repository_group_id GeminiRepositoryGroupIamBinding#repository_group_id}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding#role GeminiRepositoryGroupIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition">GeminiRepositoryGroupIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding#id GeminiRepositoryGroupIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding#location GeminiRepositoryGroupIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding#project GeminiRepositoryGroupIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `codeRepositoryIndex`<sup>Required</sup> <a name="codeRepositoryIndex" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.codeRepositoryIndex"></a>

```typescript
public readonly codeRepositoryIndex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding#code_repository_index GeminiRepositoryGroupIamBinding#code_repository_index}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding#members GeminiRepositoryGroupIamBinding#members}.

---

##### `repositoryGroupId`<sup>Required</sup> <a name="repositoryGroupId" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.repositoryGroupId"></a>

```typescript
public readonly repositoryGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding#repository_group_id GeminiRepositoryGroupIamBinding#repository_group_id}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding#role GeminiRepositoryGroupIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: GeminiRepositoryGroupIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition">GeminiRepositoryGroupIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding#condition GeminiRepositoryGroupIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding#id GeminiRepositoryGroupIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding#location GeminiRepositoryGroupIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/gemini_repository_group_iam_binding#project GeminiRepositoryGroupIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiRepositoryGroupIamBindingConditionOutputReference <a name="GeminiRepositoryGroupIamBindingConditionOutputReference" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { geminiRepositoryGroupIamBinding } from '@cdktf/provider-google'

new geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition">GeminiRepositoryGroupIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GeminiRepositoryGroupIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroupIamBinding.GeminiRepositoryGroupIamBindingCondition">GeminiRepositoryGroupIamBindingCondition</a>

---



