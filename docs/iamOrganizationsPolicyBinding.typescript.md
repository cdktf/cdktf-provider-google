# `iamOrganizationsPolicyBinding` Submodule <a name="`iamOrganizationsPolicyBinding` Submodule" id="@cdktf/provider-google.iamOrganizationsPolicyBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamOrganizationsPolicyBinding <a name="IamOrganizationsPolicyBinding" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding google_iam_organizations_policy_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer"></a>

```typescript
import { iamOrganizationsPolicyBinding } from '@cdktf/provider-google'

new iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding(scope: Construct, id: string, config: IamOrganizationsPolicyBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig">IamOrganizationsPolicyBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig">IamOrganizationsPolicyBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetPolicyKind">resetPolicyKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putCondition"></a>

```typescript
public putCondition(value: IamOrganizationsPolicyBindingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putTarget"></a>

```typescript
public putTarget(value: IamOrganizationsPolicyBindingTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putTimeouts"></a>

```typescript
public putTimeouts(value: IamOrganizationsPolicyBindingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPolicyKind` <a name="resetPolicyKind" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetPolicyKind"></a>

```typescript
public resetPolicyKind(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IamOrganizationsPolicyBinding resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isConstruct"></a>

```typescript
import { iamOrganizationsPolicyBinding } from '@cdktf/provider-google'

iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isTerraformElement"></a>

```typescript
import { iamOrganizationsPolicyBinding } from '@cdktf/provider-google'

iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isTerraformResource"></a>

```typescript
import { iamOrganizationsPolicyBinding } from '@cdktf/provider-google'

iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.generateConfigForImport"></a>

```typescript
import { iamOrganizationsPolicyBinding } from '@cdktf/provider-google'

iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IamOrganizationsPolicyBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamOrganizationsPolicyBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamOrganizationsPolicyBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IamOrganizationsPolicyBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference">IamOrganizationsPolicyBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyUid">policyUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.target">target</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference">IamOrganizationsPolicyBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference">IamOrganizationsPolicyBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyBindingIdInput">policyBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyKindInput">policyKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyBindingId">policyBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyKind">policyKind</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.condition"></a>

```typescript
public readonly condition: IamOrganizationsPolicyBindingConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference">IamOrganizationsPolicyBindingConditionOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyUid`<sup>Required</sup> <a name="policyUid" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyUid"></a>

```typescript
public readonly policyUid: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.target"></a>

```typescript
public readonly target: IamOrganizationsPolicyBindingTargetOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference">IamOrganizationsPolicyBindingTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.timeouts"></a>

```typescript
public readonly timeouts: IamOrganizationsPolicyBindingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference">IamOrganizationsPolicyBindingTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.conditionInput"></a>

```typescript
public readonly conditionInput: IamOrganizationsPolicyBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `policyBindingIdInput`<sup>Optional</sup> <a name="policyBindingIdInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyBindingIdInput"></a>

```typescript
public readonly policyBindingIdInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `policyKindInput`<sup>Optional</sup> <a name="policyKindInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyKindInput"></a>

```typescript
public readonly policyKindInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.targetInput"></a>

```typescript
public readonly targetInput: IamOrganizationsPolicyBindingTarget;
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IamOrganizationsPolicyBindingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `policyBindingId`<sup>Required</sup> <a name="policyBindingId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyBindingId"></a>

```typescript
public readonly policyBindingId: string;
```

- *Type:* string

---

##### `policyKind`<sup>Required</sup> <a name="policyKind" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyKind"></a>

```typescript
public readonly policyKind: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamOrganizationsPolicyBindingCondition <a name="IamOrganizationsPolicyBindingCondition" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.Initializer"></a>

```typescript
import { iamOrganizationsPolicyBinding } from '@cdktf/provider-google'

const iamOrganizationsPolicyBindingCondition: iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.description">description</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.location">location</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.title">title</a></code> | <code>string</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#description IamOrganizationsPolicyBinding#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#expression IamOrganizationsPolicyBinding#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#location IamOrganizationsPolicyBinding#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#title IamOrganizationsPolicyBinding#title}

---

### IamOrganizationsPolicyBindingConfig <a name="IamOrganizationsPolicyBindingConfig" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.Initializer"></a>

```typescript
import { iamOrganizationsPolicyBinding } from '@cdktf/provider-google'

const iamOrganizationsPolicyBindingConfig: iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.location">location</a></code> | <code>string</code> | The location of the Policy Binding. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.organization">organization</a></code> | <code>string</code> | The parent organization of the Policy Binding. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.policy">policy</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.policyBindingId">policyBindingId</a></code> | <code>string</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.target">target</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.displayName">displayName</a></code> | <code>string</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#id IamOrganizationsPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.policyKind">policyKind</a></code> | <code>string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#location IamOrganizationsPolicyBinding#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The parent organization of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#organization IamOrganizationsPolicyBinding#organization}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#policy IamOrganizationsPolicyBinding#policy}

---

##### `policyBindingId`<sup>Required</sup> <a name="policyBindingId" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.policyBindingId"></a>

```typescript
public readonly policyBindingId: string;
```

- *Type:* string

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#policy_binding_id IamOrganizationsPolicyBinding#policy_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.target"></a>

```typescript
public readonly target: IamOrganizationsPolicyBindingTarget;
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#target IamOrganizationsPolicyBinding#target}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#annotations IamOrganizationsPolicyBinding#annotations}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.condition"></a>

```typescript
public readonly condition: IamOrganizationsPolicyBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#condition IamOrganizationsPolicyBinding#condition}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#display_name IamOrganizationsPolicyBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#id IamOrganizationsPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyKind`<sup>Optional</sup> <a name="policyKind" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.policyKind"></a>

```typescript
public readonly policyKind: string;
```

- *Type:* string

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#policy_kind IamOrganizationsPolicyBinding#policy_kind}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IamOrganizationsPolicyBindingTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#timeouts IamOrganizationsPolicyBinding#timeouts}

---

### IamOrganizationsPolicyBindingTarget <a name="IamOrganizationsPolicyBindingTarget" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget.Initializer"></a>

```typescript
import { iamOrganizationsPolicyBinding } from '@cdktf/provider-google'

const iamOrganizationsPolicyBindingTarget: iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget.property.principalSet">principalSet</a></code> | <code>string</code> | Required. |

---

##### `principalSet`<sup>Optional</sup> <a name="principalSet" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget.property.principalSet"></a>

```typescript
public readonly principalSet: string;
```

- *Type:* string

Required.

Immutable. Full Resource Name of the principal set used for principal access boundary policy bindings.
Examples for each one of the following supported principal set types:
* Organization '//cloudresourcemanager.googleapis.com/organizations/ORGANIZATION_ID'
* Workforce Identity: '//iam.googleapis.com/locations/global/workforcePools/WORKFORCE_POOL_ID'
* Workspace Identity: '//iam.googleapis.com/locations/global/workspace/WORKSPACE_ID'
It must be parent by the policy binding's parent (the organization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#principal_set IamOrganizationsPolicyBinding#principal_set}

---

### IamOrganizationsPolicyBindingTimeouts <a name="IamOrganizationsPolicyBindingTimeouts" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts.Initializer"></a>

```typescript
import { iamOrganizationsPolicyBinding } from '@cdktf/provider-google'

const iamOrganizationsPolicyBindingTimeouts: iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#create IamOrganizationsPolicyBinding#create}. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#delete IamOrganizationsPolicyBinding#delete}. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#update IamOrganizationsPolicyBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#create IamOrganizationsPolicyBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#delete IamOrganizationsPolicyBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#update IamOrganizationsPolicyBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamOrganizationsPolicyBindingConditionOutputReference <a name="IamOrganizationsPolicyBindingConditionOutputReference" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.Initializer"></a>

```typescript
import { iamOrganizationsPolicyBinding } from '@cdktf/provider-google'

new iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamOrganizationsPolicyBindingCondition;
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a>

---


### IamOrganizationsPolicyBindingTargetOutputReference <a name="IamOrganizationsPolicyBindingTargetOutputReference" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.Initializer"></a>

```typescript
import { iamOrganizationsPolicyBinding } from '@cdktf/provider-google'

new iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.resetPrincipalSet">resetPrincipalSet</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrincipalSet` <a name="resetPrincipalSet" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.resetPrincipalSet"></a>

```typescript
public resetPrincipalSet(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.principalSetInput">principalSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.principalSet">principalSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalSetInput`<sup>Optional</sup> <a name="principalSetInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.principalSetInput"></a>

```typescript
public readonly principalSetInput: string;
```

- *Type:* string

---

##### `principalSet`<sup>Required</sup> <a name="principalSet" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.principalSet"></a>

```typescript
public readonly principalSet: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamOrganizationsPolicyBindingTarget;
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a>

---


### IamOrganizationsPolicyBindingTimeoutsOutputReference <a name="IamOrganizationsPolicyBindingTimeoutsOutputReference" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer"></a>

```typescript
import { iamOrganizationsPolicyBinding } from '@cdktf/provider-google'

new iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamOrganizationsPolicyBindingTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a>

---



