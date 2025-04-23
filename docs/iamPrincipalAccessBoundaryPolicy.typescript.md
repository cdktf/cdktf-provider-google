# `iamPrincipalAccessBoundaryPolicy` Submodule <a name="`iamPrincipalAccessBoundaryPolicy` Submodule" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamPrincipalAccessBoundaryPolicy <a name="IamPrincipalAccessBoundaryPolicy" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_principal_access_boundary_policy google_iam_principal_access_boundary_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer"></a>

```typescript
import { iamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google'

new iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy(scope: Construct, id: string, config: IamPrincipalAccessBoundaryPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig">IamPrincipalAccessBoundaryPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig">IamPrincipalAccessBoundaryPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putDetails">putDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetDetails">resetDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDetails` <a name="putDetails" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putDetails"></a>

```typescript
public putDetails(value: IamPrincipalAccessBoundaryPolicyDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: IamPrincipalAccessBoundaryPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts">IamPrincipalAccessBoundaryPolicyTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDetails` <a name="resetDetails" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetDetails"></a>

```typescript
public resetDetails(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IamPrincipalAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isConstruct"></a>

```typescript
import { iamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google'

iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformElement"></a>

```typescript
import { iamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google'

iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformResource"></a>

```typescript
import { iamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google'

iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport"></a>

```typescript
import { iamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google'

iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IamPrincipalAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamPrincipalAccessBoundaryPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamPrincipalAccessBoundaryPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_principal_access_boundary_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IamPrincipalAccessBoundaryPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.details">details</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference">IamPrincipalAccessBoundaryPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference">IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.detailsInput">detailsInput</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyIdInput">principalAccessBoundaryPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts">IamPrincipalAccessBoundaryPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyId">principalAccessBoundaryPolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.details"></a>

```typescript
public readonly details: IamPrincipalAccessBoundaryPolicyDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference">IamPrincipalAccessBoundaryPolicyDetailsOutputReference</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference">IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.detailsInput"></a>

```typescript
public readonly detailsInput: IamPrincipalAccessBoundaryPolicyDetails;
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `principalAccessBoundaryPolicyIdInput`<sup>Optional</sup> <a name="principalAccessBoundaryPolicyIdInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyIdInput"></a>

```typescript
public readonly principalAccessBoundaryPolicyIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IamPrincipalAccessBoundaryPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts">IamPrincipalAccessBoundaryPolicyTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `principalAccessBoundaryPolicyId`<sup>Required</sup> <a name="principalAccessBoundaryPolicyId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyId"></a>

```typescript
public readonly principalAccessBoundaryPolicyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamPrincipalAccessBoundaryPolicyConfig <a name="IamPrincipalAccessBoundaryPolicyConfig" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.Initializer"></a>

```typescript
import { iamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google'

const iamPrincipalAccessBoundaryPolicyConfig: iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.location">location</a></code> | <code>string</code> | The location the principal access boundary policy is in. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.organization">organization</a></code> | <code>string</code> | The parent organization of the principal access boundary policy. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.principalAccessBoundaryPolicyId">principalAccessBoundaryPolicyId</a></code> | <code>string</code> | The ID to use to create the principal access boundary policy. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.details">details</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.displayName">displayName</a></code> | <code>string</code> | The description of the principal access boundary policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_principal_access_boundary_policy#id IamPrincipalAccessBoundaryPolicy#id}. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts">IamPrincipalAccessBoundaryPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location the principal access boundary policy is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_principal_access_boundary_policy#location IamPrincipalAccessBoundaryPolicy#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The parent organization of the principal access boundary policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_principal_access_boundary_policy#organization IamPrincipalAccessBoundaryPolicy#organization}

---

##### `principalAccessBoundaryPolicyId`<sup>Required</sup> <a name="principalAccessBoundaryPolicyId" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.principalAccessBoundaryPolicyId"></a>

```typescript
public readonly principalAccessBoundaryPolicyId: string;
```

- *Type:* string

The ID to use to create the principal access boundary policy.

This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, hyphens, or dots. Pattern, /a-z{2,62}/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_principal_access_boundary_policy#principal_access_boundary_policy_id IamPrincipalAccessBoundaryPolicy#principal_access_boundary_policy_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_principal_access_boundary_policy#annotations IamPrincipalAccessBoundaryPolicy#annotations}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.details"></a>

```typescript
public readonly details: IamPrincipalAccessBoundaryPolicyDetails;
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_principal_access_boundary_policy#details IamPrincipalAccessBoundaryPolicy#details}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The description of the principal access boundary policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_principal_access_boundary_policy#display_name IamPrincipalAccessBoundaryPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_principal_access_boundary_policy#id IamPrincipalAccessBoundaryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IamPrincipalAccessBoundaryPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts">IamPrincipalAccessBoundaryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_principal_access_boundary_policy#timeouts IamPrincipalAccessBoundaryPolicy#timeouts}

---

### IamPrincipalAccessBoundaryPolicyDetails <a name="IamPrincipalAccessBoundaryPolicyDetails" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails.Initializer"></a>

```typescript
import { iamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google'

const iamPrincipalAccessBoundaryPolicyDetails: iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules">IamPrincipalAccessBoundaryPolicyDetailsRules</a>[]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails.property.enforcementVersion">enforcementVersion</a></code> | <code>string</code> | The version number that indicates which Google Cloud services are included in the enforcement (e.g. \"latest\", \"1\", ...). If empty, the PAB policy version will be set to the current latest version, and this version won't get updated when new versions are released. |

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails.property.rules"></a>

```typescript
public readonly rules: IResolvable | IamPrincipalAccessBoundaryPolicyDetailsRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules">IamPrincipalAccessBoundaryPolicyDetailsRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_principal_access_boundary_policy#rules IamPrincipalAccessBoundaryPolicy#rules}

---

##### `enforcementVersion`<sup>Optional</sup> <a name="enforcementVersion" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails.property.enforcementVersion"></a>

```typescript
public readonly enforcementVersion: string;
```

- *Type:* string

The version number that indicates which Google Cloud services are included in the enforcement (e.g. \"latest\", \"1\", ...). If empty, the PAB policy version will be set to the current latest version, and this version won't get updated when new versions are released.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_principal_access_boundary_policy#enforcement_version IamPrincipalAccessBoundaryPolicy#enforcement_version}

---

### IamPrincipalAccessBoundaryPolicyDetailsRules <a name="IamPrincipalAccessBoundaryPolicyDetailsRules" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.Initializer"></a>

```typescript
import { iamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google'

const iamPrincipalAccessBoundaryPolicyDetailsRules: iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.effect">effect</a></code> | <code>string</code> | The access relationship of principals to the resources in this rule. Possible values: ALLOW. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.resources">resources</a></code> | <code>string[]</code> | A list of Cloud Resource Manager resources. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.description">description</a></code> | <code>string</code> | The description of the principal access boundary policy rule. Must be less than or equal to 256 characters. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

The access relationship of principals to the resources in this rule. Possible values: ALLOW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_principal_access_boundary_policy#effect IamPrincipalAccessBoundaryPolicy#effect}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

A list of Cloud Resource Manager resources.

The resource
and all the descendants are included. The number of resources in a policy
is limited to 500 across all rules.
The following resource types are supported:
* Organizations, such as '//cloudresourcemanager.googleapis.com/organizations/123'.
* Folders, such as '//cloudresourcemanager.googleapis.com/folders/123'.
* Projects, such as '//cloudresourcemanager.googleapis.com/projects/123'
or '//cloudresourcemanager.googleapis.com/projects/my-project-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_principal_access_boundary_policy#resources IamPrincipalAccessBoundaryPolicy#resources}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the principal access boundary policy rule. Must be less than or equal to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_principal_access_boundary_policy#description IamPrincipalAccessBoundaryPolicy#description}

---

### IamPrincipalAccessBoundaryPolicyTimeouts <a name="IamPrincipalAccessBoundaryPolicyTimeouts" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.Initializer"></a>

```typescript
import { iamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google'

const iamPrincipalAccessBoundaryPolicyTimeouts: iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_principal_access_boundary_policy#create IamPrincipalAccessBoundaryPolicy#create}. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_principal_access_boundary_policy#delete IamPrincipalAccessBoundaryPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_principal_access_boundary_policy#update IamPrincipalAccessBoundaryPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_principal_access_boundary_policy#create IamPrincipalAccessBoundaryPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_principal_access_boundary_policy#delete IamPrincipalAccessBoundaryPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_principal_access_boundary_policy#update IamPrincipalAccessBoundaryPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamPrincipalAccessBoundaryPolicyDetailsOutputReference <a name="IamPrincipalAccessBoundaryPolicyDetailsOutputReference" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer"></a>

```typescript
import { iamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google'

new iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.resetEnforcementVersion">resetEnforcementVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | IamPrincipalAccessBoundaryPolicyDetailsRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules">IamPrincipalAccessBoundaryPolicyDetailsRules</a>[]

---

##### `resetEnforcementVersion` <a name="resetEnforcementVersion" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.resetEnforcementVersion"></a>

```typescript
public resetEnforcementVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList">IamPrincipalAccessBoundaryPolicyDetailsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersionInput">enforcementVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules">IamPrincipalAccessBoundaryPolicyDetailsRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersion">enforcementVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rules"></a>

```typescript
public readonly rules: IamPrincipalAccessBoundaryPolicyDetailsRulesList;
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList">IamPrincipalAccessBoundaryPolicyDetailsRulesList</a>

---

##### `enforcementVersionInput`<sup>Optional</sup> <a name="enforcementVersionInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersionInput"></a>

```typescript
public readonly enforcementVersionInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | IamPrincipalAccessBoundaryPolicyDetailsRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules">IamPrincipalAccessBoundaryPolicyDetailsRules</a>[]

---

##### `enforcementVersion`<sup>Required</sup> <a name="enforcementVersion" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersion"></a>

```typescript
public readonly enforcementVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IamPrincipalAccessBoundaryPolicyDetails;
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a>

---


### IamPrincipalAccessBoundaryPolicyDetailsRulesList <a name="IamPrincipalAccessBoundaryPolicyDetailsRulesList" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer"></a>

```typescript
import { iamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google'

new iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.get"></a>

```typescript
public get(index: number): IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules">IamPrincipalAccessBoundaryPolicyDetailsRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamPrincipalAccessBoundaryPolicyDetailsRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules">IamPrincipalAccessBoundaryPolicyDetailsRules</a>[]

---


### IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference <a name="IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer"></a>

```typescript
import { iamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google'

new iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules">IamPrincipalAccessBoundaryPolicyDetailsRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamPrincipalAccessBoundaryPolicyDetailsRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules">IamPrincipalAccessBoundaryPolicyDetailsRules</a>

---


### IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference <a name="IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { iamPrincipalAccessBoundaryPolicy } from '@cdktf/provider-google'

new iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts">IamPrincipalAccessBoundaryPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamPrincipalAccessBoundaryPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts">IamPrincipalAccessBoundaryPolicyTimeouts</a>

---



