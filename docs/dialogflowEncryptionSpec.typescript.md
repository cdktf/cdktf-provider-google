# `dialogflowEncryptionSpec` Submodule <a name="`dialogflowEncryptionSpec` Submodule" id="@cdktf/provider-google.dialogflowEncryptionSpec"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowEncryptionSpec <a name="DialogflowEncryptionSpec" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dialogflow_encryption_spec google_dialogflow_encryption_spec}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.Initializer"></a>

```typescript
import { dialogflowEncryptionSpec } from '@cdktf/provider-google'

new dialogflowEncryptionSpec.DialogflowEncryptionSpec(scope: Construct, id: string, config: DialogflowEncryptionSpecConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig">DialogflowEncryptionSpecConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig">DialogflowEncryptionSpecConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.putEncryptionSpec"></a>

```typescript
public putEncryptionSpec(value: DialogflowEncryptionSpecEncryptionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpec">DialogflowEncryptionSpecEncryptionSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.putTimeouts"></a>

```typescript
public putTimeouts(value: DialogflowEncryptionSpecTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeouts">DialogflowEncryptionSpecTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DialogflowEncryptionSpec resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.isConstruct"></a>

```typescript
import { dialogflowEncryptionSpec } from '@cdktf/provider-google'

dialogflowEncryptionSpec.DialogflowEncryptionSpec.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.isTerraformElement"></a>

```typescript
import { dialogflowEncryptionSpec } from '@cdktf/provider-google'

dialogflowEncryptionSpec.DialogflowEncryptionSpec.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.isTerraformResource"></a>

```typescript
import { dialogflowEncryptionSpec } from '@cdktf/provider-google'

dialogflowEncryptionSpec.DialogflowEncryptionSpec.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.generateConfigForImport"></a>

```typescript
import { dialogflowEncryptionSpec } from '@cdktf/provider-google'

dialogflowEncryptionSpec.DialogflowEncryptionSpec.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DialogflowEncryptionSpec resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DialogflowEncryptionSpec to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DialogflowEncryptionSpec that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dialogflow_encryption_spec#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DialogflowEncryptionSpec to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference">DialogflowEncryptionSpecEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference">DialogflowEncryptionSpecTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpec">DialogflowEncryptionSpecEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeouts">DialogflowEncryptionSpecTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.encryptionSpec"></a>

```typescript
public readonly encryptionSpec: DialogflowEncryptionSpecEncryptionSpecOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference">DialogflowEncryptionSpecEncryptionSpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowEncryptionSpecTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference">DialogflowEncryptionSpecTimeoutsOutputReference</a>

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.encryptionSpecInput"></a>

```typescript
public readonly encryptionSpecInput: DialogflowEncryptionSpecEncryptionSpec;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpec">DialogflowEncryptionSpecEncryptionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DialogflowEncryptionSpecTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeouts">DialogflowEncryptionSpecTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpec.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowEncryptionSpecConfig <a name="DialogflowEncryptionSpecConfig" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.Initializer"></a>

```typescript
import { dialogflowEncryptionSpec } from '@cdktf/provider-google'

const dialogflowEncryptionSpecConfig: dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpec">DialogflowEncryptionSpecEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.location">location</a></code> | <code>string</code> | The location in which the encryptionSpec is to be initialized. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dialogflow_encryption_spec#id DialogflowEncryptionSpec#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dialogflow_encryption_spec#project DialogflowEncryptionSpec#project}. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeouts">DialogflowEncryptionSpecTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.encryptionSpec"></a>

```typescript
public readonly encryptionSpec: DialogflowEncryptionSpecEncryptionSpec;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpec">DialogflowEncryptionSpecEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dialogflow_encryption_spec#encryption_spec DialogflowEncryptionSpec#encryption_spec}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location in which the encryptionSpec is to be initialized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dialogflow_encryption_spec#location DialogflowEncryptionSpec#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dialogflow_encryption_spec#id DialogflowEncryptionSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dialogflow_encryption_spec#project DialogflowEncryptionSpec#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowEncryptionSpecTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeouts">DialogflowEncryptionSpecTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dialogflow_encryption_spec#timeouts DialogflowEncryptionSpec#timeouts}

---

### DialogflowEncryptionSpecEncryptionSpec <a name="DialogflowEncryptionSpecEncryptionSpec" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpec.Initializer"></a>

```typescript
import { dialogflowEncryptionSpec } from '@cdktf/provider-google'

const dialogflowEncryptionSpecEncryptionSpec: dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpec.property.kmsKey">kmsKey</a></code> | <code>string</code> | The name of customer-managed encryption key that is used to secure a resource and its sub-resources. |

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpec.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The name of customer-managed encryption key that is used to secure a resource and its sub-resources.

If empty, the resource is secured by the default Google encryption key.
Only the key in the same location as this resource is allowed to be used for encryption.
Format: projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{key}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dialogflow_encryption_spec#kms_key DialogflowEncryptionSpec#kms_key}

---

### DialogflowEncryptionSpecTimeouts <a name="DialogflowEncryptionSpecTimeouts" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeouts.Initializer"></a>

```typescript
import { dialogflowEncryptionSpec } from '@cdktf/provider-google'

const dialogflowEncryptionSpecTimeouts: dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dialogflow_encryption_spec#create DialogflowEncryptionSpec#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dialogflow_encryption_spec#delete DialogflowEncryptionSpec#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dialogflow_encryption_spec#create DialogflowEncryptionSpec#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/dialogflow_encryption_spec#delete DialogflowEncryptionSpec#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowEncryptionSpecEncryptionSpecOutputReference <a name="DialogflowEncryptionSpecEncryptionSpecOutputReference" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.Initializer"></a>

```typescript
import { dialogflowEncryptionSpec } from '@cdktf/provider-google'

new dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpec">DialogflowEncryptionSpecEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowEncryptionSpecEncryptionSpec;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecEncryptionSpec">DialogflowEncryptionSpecEncryptionSpec</a>

---


### DialogflowEncryptionSpecTimeoutsOutputReference <a name="DialogflowEncryptionSpecTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.Initializer"></a>

```typescript
import { dialogflowEncryptionSpec } from '@cdktf/provider-google'

new dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeouts">DialogflowEncryptionSpecTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowEncryptionSpecTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowEncryptionSpec.DialogflowEncryptionSpecTimeouts">DialogflowEncryptionSpecTimeouts</a>

---



