# `bigqueryConnectionIamBinding` Submodule <a name="`bigqueryConnectionIamBinding` Submodule" id="@cdktf/provider-google.bigqueryConnectionIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryConnectionIamBinding <a name="BigqueryConnectionIamBinding" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_connection_iam_binding google_bigquery_connection_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.Initializer"></a>

```typescript
import { bigqueryConnectionIamBinding } from '@cdktf/provider-google'

new bigqueryConnectionIamBinding.BigqueryConnectionIamBinding(scope: Construct, id: string, config: BigqueryConnectionIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig">BigqueryConnectionIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig">BigqueryConnectionIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.putCondition"></a>

```typescript
public putCondition(value: BigqueryConnectionIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingCondition">BigqueryConnectionIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryConnectionIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.isConstruct"></a>

```typescript
import { bigqueryConnectionIamBinding } from '@cdktf/provider-google'

bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.isTerraformElement"></a>

```typescript
import { bigqueryConnectionIamBinding } from '@cdktf/provider-google'

bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.isTerraformResource"></a>

```typescript
import { bigqueryConnectionIamBinding } from '@cdktf/provider-google'

bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.generateConfigForImport"></a>

```typescript
import { bigqueryConnectionIamBinding } from '@cdktf/provider-google'

bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BigqueryConnectionIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigqueryConnectionIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigqueryConnectionIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_connection_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryConnectionIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference">BigqueryConnectionIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingCondition">BigqueryConnectionIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.condition"></a>

```typescript
public readonly condition: BigqueryConnectionIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference">BigqueryConnectionIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: BigqueryConnectionIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingCondition">BigqueryConnectionIamBindingCondition</a>

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryConnectionIamBindingCondition <a name="BigqueryConnectionIamBindingCondition" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingCondition.Initializer"></a>

```typescript
import { bigqueryConnectionIamBinding } from '@cdktf/provider-google'

const bigqueryConnectionIamBindingCondition: bigqueryConnectionIamBinding.BigqueryConnectionIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_connection_iam_binding#expression BigqueryConnectionIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_connection_iam_binding#title BigqueryConnectionIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_connection_iam_binding#description BigqueryConnectionIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_connection_iam_binding#expression BigqueryConnectionIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_connection_iam_binding#title BigqueryConnectionIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_connection_iam_binding#description BigqueryConnectionIamBinding#description}.

---

### BigqueryConnectionIamBindingConfig <a name="BigqueryConnectionIamBindingConfig" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.Initializer"></a>

```typescript
import { bigqueryConnectionIamBinding } from '@cdktf/provider-google'

const bigqueryConnectionIamBindingConfig: bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.connectionId">connectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_connection_iam_binding#connection_id BigqueryConnectionIamBinding#connection_id}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_connection_iam_binding#members BigqueryConnectionIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_connection_iam_binding#role BigqueryConnectionIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingCondition">BigqueryConnectionIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_connection_iam_binding#id BigqueryConnectionIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_connection_iam_binding#location BigqueryConnectionIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_connection_iam_binding#project BigqueryConnectionIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_connection_iam_binding#connection_id BigqueryConnectionIamBinding#connection_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_connection_iam_binding#members BigqueryConnectionIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_connection_iam_binding#role BigqueryConnectionIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: BigqueryConnectionIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingCondition">BigqueryConnectionIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_connection_iam_binding#condition BigqueryConnectionIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_connection_iam_binding#id BigqueryConnectionIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_connection_iam_binding#location BigqueryConnectionIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/bigquery_connection_iam_binding#project BigqueryConnectionIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryConnectionIamBindingConditionOutputReference <a name="BigqueryConnectionIamBindingConditionOutputReference" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { bigqueryConnectionIamBinding } from '@cdktf/provider-google'

new bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingCondition">BigqueryConnectionIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BigqueryConnectionIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryConnectionIamBinding.BigqueryConnectionIamBindingCondition">BigqueryConnectionIamBindingCondition</a>

---



