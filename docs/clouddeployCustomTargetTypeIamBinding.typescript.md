# `clouddeployCustomTargetTypeIamBinding` Submodule <a name="`clouddeployCustomTargetTypeIamBinding` Submodule" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClouddeployCustomTargetTypeIamBinding <a name="ClouddeployCustomTargetTypeIamBinding" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/clouddeploy_custom_target_type_iam_binding google_clouddeploy_custom_target_type_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.Initializer"></a>

```typescript
import { clouddeployCustomTargetTypeIamBinding } from '@cdktf/provider-google'

new clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding(scope: Construct, id: string, config: ClouddeployCustomTargetTypeIamBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig">ClouddeployCustomTargetTypeIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig">ClouddeployCustomTargetTypeIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.putCondition"></a>

```typescript
public putCondition(value: ClouddeployCustomTargetTypeIamBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition">ClouddeployCustomTargetTypeIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ClouddeployCustomTargetTypeIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.isConstruct"></a>

```typescript
import { clouddeployCustomTargetTypeIamBinding } from '@cdktf/provider-google'

clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.isTerraformElement"></a>

```typescript
import { clouddeployCustomTargetTypeIamBinding } from '@cdktf/provider-google'

clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.isTerraformResource"></a>

```typescript
import { clouddeployCustomTargetTypeIamBinding } from '@cdktf/provider-google'

clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.generateConfigForImport"></a>

```typescript
import { clouddeployCustomTargetTypeIamBinding } from '@cdktf/provider-google'

clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ClouddeployCustomTargetTypeIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ClouddeployCustomTargetTypeIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ClouddeployCustomTargetTypeIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/clouddeploy_custom_target_type_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ClouddeployCustomTargetTypeIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference">ClouddeployCustomTargetTypeIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition">ClouddeployCustomTargetTypeIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.membersInput">membersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.members">members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.condition"></a>

```typescript
public readonly condition: ClouddeployCustomTargetTypeIamBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference">ClouddeployCustomTargetTypeIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: ClouddeployCustomTargetTypeIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition">ClouddeployCustomTargetTypeIamBindingCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.membersInput"></a>

```typescript
public readonly membersInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClouddeployCustomTargetTypeIamBindingCondition <a name="ClouddeployCustomTargetTypeIamBindingCondition" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition.Initializer"></a>

```typescript
import { clouddeployCustomTargetTypeIamBinding } from '@cdktf/provider-google'

const clouddeployCustomTargetTypeIamBindingCondition: clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/clouddeploy_custom_target_type_iam_binding#expression ClouddeployCustomTargetTypeIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/clouddeploy_custom_target_type_iam_binding#title ClouddeployCustomTargetTypeIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/clouddeploy_custom_target_type_iam_binding#description ClouddeployCustomTargetTypeIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/clouddeploy_custom_target_type_iam_binding#expression ClouddeployCustomTargetTypeIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/clouddeploy_custom_target_type_iam_binding#title ClouddeployCustomTargetTypeIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/clouddeploy_custom_target_type_iam_binding#description ClouddeployCustomTargetTypeIamBinding#description}.

---

### ClouddeployCustomTargetTypeIamBindingConfig <a name="ClouddeployCustomTargetTypeIamBindingConfig" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.Initializer"></a>

```typescript
import { clouddeployCustomTargetTypeIamBinding } from '@cdktf/provider-google'

const clouddeployCustomTargetTypeIamBindingConfig: clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.members">members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/clouddeploy_custom_target_type_iam_binding#members ClouddeployCustomTargetTypeIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/clouddeploy_custom_target_type_iam_binding#name ClouddeployCustomTargetTypeIamBinding#name}. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/clouddeploy_custom_target_type_iam_binding#role ClouddeployCustomTargetTypeIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition">ClouddeployCustomTargetTypeIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/clouddeploy_custom_target_type_iam_binding#id ClouddeployCustomTargetTypeIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/clouddeploy_custom_target_type_iam_binding#location ClouddeployCustomTargetTypeIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/clouddeploy_custom_target_type_iam_binding#project ClouddeployCustomTargetTypeIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.members"></a>

```typescript
public readonly members: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/clouddeploy_custom_target_type_iam_binding#members ClouddeployCustomTargetTypeIamBinding#members}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/clouddeploy_custom_target_type_iam_binding#name ClouddeployCustomTargetTypeIamBinding#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/clouddeploy_custom_target_type_iam_binding#role ClouddeployCustomTargetTypeIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.condition"></a>

```typescript
public readonly condition: ClouddeployCustomTargetTypeIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition">ClouddeployCustomTargetTypeIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/clouddeploy_custom_target_type_iam_binding#condition ClouddeployCustomTargetTypeIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/clouddeploy_custom_target_type_iam_binding#id ClouddeployCustomTargetTypeIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/clouddeploy_custom_target_type_iam_binding#location ClouddeployCustomTargetTypeIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/clouddeploy_custom_target_type_iam_binding#project ClouddeployCustomTargetTypeIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClouddeployCustomTargetTypeIamBindingConditionOutputReference <a name="ClouddeployCustomTargetTypeIamBindingConditionOutputReference" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.Initializer"></a>

```typescript
import { clouddeployCustomTargetTypeIamBinding } from '@cdktf/provider-google'

new clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition">ClouddeployCustomTargetTypeIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployCustomTargetTypeIamBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamBinding.ClouddeployCustomTargetTypeIamBindingCondition">ClouddeployCustomTargetTypeIamBindingCondition</a>

---



