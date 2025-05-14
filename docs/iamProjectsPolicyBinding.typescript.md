# `iamProjectsPolicyBinding` Submodule <a name="`iamProjectsPolicyBinding` Submodule" id="@cdktf/provider-google.iamProjectsPolicyBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamProjectsPolicyBinding <a name="IamProjectsPolicyBinding" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding google_iam_projects_policy_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer"></a>

```typescript
import { iamProjectsPolicyBinding } from '@cdktf/provider-google'

new iamProjectsPolicyBinding.IamProjectsPolicyBinding(scope: Construct, id: string, config: IamProjectsPolicyBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig">IamProjectsPolicyBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig">IamProjectsPolicyBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetPolicyKind">resetPolicyKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putCondition"></a>

```typescript
public putCondition(value: IamProjectsPolicyBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTarget"></a>

```typescript
public putTarget(value: IamProjectsPolicyBindingTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTimeouts"></a>

```typescript
public putTimeouts(value: IamProjectsPolicyBindingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPolicyKind` <a name="resetPolicyKind" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetPolicyKind"></a>

```typescript
public resetPolicyKind(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IamProjectsPolicyBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isConstruct"></a>

```typescript
import { iamProjectsPolicyBinding } from '@cdktf/provider-google'

iamProjectsPolicyBinding.IamProjectsPolicyBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformElement"></a>

```typescript
import { iamProjectsPolicyBinding } from '@cdktf/provider-google'

iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformResource"></a>

```typescript
import { iamProjectsPolicyBinding } from '@cdktf/provider-google'

iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport"></a>

```typescript
import { iamProjectsPolicyBinding } from '@cdktf/provider-google'

iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IamProjectsPolicyBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamProjectsPolicyBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamProjectsPolicyBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IamProjectsPolicyBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference">IamProjectsPolicyBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyUid">policyUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.target">target</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference">IamProjectsPolicyBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference">IamProjectsPolicyBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyBindingIdInput">policyBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyKindInput">policyKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyBindingId">policyBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyKind">policyKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.condition"></a>

```typescript
public readonly condition: IamProjectsPolicyBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference">IamProjectsPolicyBindingConditionOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyUid`<sup>Required</sup> <a name="policyUid" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyUid"></a>

```typescript
public readonly policyUid: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.target"></a>

```typescript
public readonly target: IamProjectsPolicyBindingTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference">IamProjectsPolicyBindingTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.timeouts"></a>

```typescript
public readonly timeouts: IamProjectsPolicyBindingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference">IamProjectsPolicyBindingTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: IamProjectsPolicyBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `policyBindingIdInput`<sup>Optional</sup> <a name="policyBindingIdInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyBindingIdInput"></a>

```typescript
public readonly policyBindingIdInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `policyKindInput`<sup>Optional</sup> <a name="policyKindInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyKindInput"></a>

```typescript
public readonly policyKindInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.targetInput"></a>

```typescript
public readonly targetInput: IamProjectsPolicyBindingTarget;
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IamProjectsPolicyBindingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `policyBindingId`<sup>Required</sup> <a name="policyBindingId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyBindingId"></a>

```typescript
public readonly policyBindingId: string;
```

- *Type:* string

---

##### `policyKind`<sup>Required</sup> <a name="policyKind" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyKind"></a>

```typescript
public readonly policyKind: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamProjectsPolicyBindingCondition <a name="IamProjectsPolicyBindingCondition" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.Initializer"></a>

```typescript
import { iamProjectsPolicyBinding } from '@cdktf/provider-google'

const iamProjectsPolicyBindingCondition: iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.description">description</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.location">location</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.title">title</a></code> | <code>string</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#description IamProjectsPolicyBinding#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#expression IamProjectsPolicyBinding#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#location IamProjectsPolicyBinding#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#title IamProjectsPolicyBinding#title}

---

### IamProjectsPolicyBindingConfig <a name="IamProjectsPolicyBindingConfig" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.Initializer"></a>

```typescript
import { iamProjectsPolicyBinding } from '@cdktf/provider-google'

const iamProjectsPolicyBindingConfig: iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.location">location</a></code> | <code>string</code> | The location of the Policy Binding. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policy">policy</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policyBindingId">policyBindingId</a></code> | <code>string</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.target">target</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.displayName">displayName</a></code> | <code>string</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#id IamProjectsPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policyKind">policyKind</a></code> | <code>string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#project IamProjectsPolicyBinding#project}. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#location IamProjectsPolicyBinding#location}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#policy IamProjectsPolicyBinding#policy}

---

##### `policyBindingId`<sup>Required</sup> <a name="policyBindingId" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policyBindingId"></a>

```typescript
public readonly policyBindingId: string;
```

- *Type:* string

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#policy_binding_id IamProjectsPolicyBinding#policy_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.target"></a>

```typescript
public readonly target: IamProjectsPolicyBindingTarget;
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#target IamProjectsPolicyBinding#target}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#annotations IamProjectsPolicyBinding#annotations}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.condition"></a>

```typescript
public readonly condition: IamProjectsPolicyBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#condition IamProjectsPolicyBinding#condition}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#display_name IamProjectsPolicyBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#id IamProjectsPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyKind`<sup>Optional</sup> <a name="policyKind" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policyKind"></a>

```typescript
public readonly policyKind: string;
```

- *Type:* string

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#policy_kind IamProjectsPolicyBinding#policy_kind}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#project IamProjectsPolicyBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IamProjectsPolicyBindingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#timeouts IamProjectsPolicyBinding#timeouts}

---

### IamProjectsPolicyBindingTarget <a name="IamProjectsPolicyBindingTarget" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget.Initializer"></a>

```typescript
import { iamProjectsPolicyBinding } from '@cdktf/provider-google'

const iamProjectsPolicyBindingTarget: iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget.property.principalSet">principalSet</a></code> | <code>string</code> | Required. |

---

##### `principalSet`<sup>Optional</sup> <a name="principalSet" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget.property.principalSet"></a>

```typescript
public readonly principalSet: string;
```

- *Type:* string

Required.

Immutable. Full Resource Name of the principal set used for principal access boundary policy bindings.
Examples for each one of the following supported principal set types:
* Project:
  * '//cloudresourcemanager.googleapis.com/projects/PROJECT_NUMBER'
  * '//cloudresourcemanager.googleapis.com/projects/PROJECT_ID'
* Workload Identity Pool: '//iam.googleapis.com/projects/PROJECT_NUMBER/locations/LOCATION/workloadIdentityPools/WORKLOAD_POOL_ID'
It must be parent by the policy binding's parent (the project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#principal_set IamProjectsPolicyBinding#principal_set}

---

### IamProjectsPolicyBindingTimeouts <a name="IamProjectsPolicyBindingTimeouts" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.Initializer"></a>

```typescript
import { iamProjectsPolicyBinding } from '@cdktf/provider-google'

const iamProjectsPolicyBindingTimeouts: iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#create IamProjectsPolicyBinding#create}. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#delete IamProjectsPolicyBinding#delete}. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#update IamProjectsPolicyBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#create IamProjectsPolicyBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#delete IamProjectsPolicyBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/iam_projects_policy_binding#update IamProjectsPolicyBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamProjectsPolicyBindingConditionOutputReference <a name="IamProjectsPolicyBindingConditionOutputReference" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.Initializer"></a>

```typescript
import { iamProjectsPolicyBinding } from '@cdktf/provider-google'

new iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamProjectsPolicyBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a>

---


### IamProjectsPolicyBindingTargetOutputReference <a name="IamProjectsPolicyBindingTargetOutputReference" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.Initializer"></a>

```typescript
import { iamProjectsPolicyBinding } from '@cdktf/provider-google'

new iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.resetPrincipalSet">resetPrincipalSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrincipalSet` <a name="resetPrincipalSet" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.resetPrincipalSet"></a>

```typescript
public resetPrincipalSet(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.principalSetInput">principalSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.principalSet">principalSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalSetInput`<sup>Optional</sup> <a name="principalSetInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.principalSetInput"></a>

```typescript
public readonly principalSetInput: string;
```

- *Type:* string

---

##### `principalSet`<sup>Required</sup> <a name="principalSet" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.principalSet"></a>

```typescript
public readonly principalSet: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamProjectsPolicyBindingTarget;
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a>

---


### IamProjectsPolicyBindingTimeoutsOutputReference <a name="IamProjectsPolicyBindingTimeoutsOutputReference" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.Initializer"></a>

```typescript
import { iamProjectsPolicyBinding } from '@cdktf/provider-google'

new iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamProjectsPolicyBindingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a>

---



