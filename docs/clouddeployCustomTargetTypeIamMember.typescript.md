# `clouddeployCustomTargetTypeIamMember` Submodule <a name="`clouddeployCustomTargetTypeIamMember` Submodule" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClouddeployCustomTargetTypeIamMember <a name="ClouddeployCustomTargetTypeIamMember" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/clouddeploy_custom_target_type_iam_member google_clouddeploy_custom_target_type_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.Initializer"></a>

```typescript
import { clouddeployCustomTargetTypeIamMember } from '@cdktf/provider-google'

new clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember(scope: Construct, id: string, config: ClouddeployCustomTargetTypeIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig">ClouddeployCustomTargetTypeIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig">ClouddeployCustomTargetTypeIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.putCondition"></a>

```typescript
public putCondition(value: ClouddeployCustomTargetTypeIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberCondition">ClouddeployCustomTargetTypeIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ClouddeployCustomTargetTypeIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.isConstruct"></a>

```typescript
import { clouddeployCustomTargetTypeIamMember } from '@cdktf/provider-google'

clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.isTerraformElement"></a>

```typescript
import { clouddeployCustomTargetTypeIamMember } from '@cdktf/provider-google'

clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.isTerraformResource"></a>

```typescript
import { clouddeployCustomTargetTypeIamMember } from '@cdktf/provider-google'

clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.generateConfigForImport"></a>

```typescript
import { clouddeployCustomTargetTypeIamMember } from '@cdktf/provider-google'

clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ClouddeployCustomTargetTypeIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ClouddeployCustomTargetTypeIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ClouddeployCustomTargetTypeIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/clouddeploy_custom_target_type_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ClouddeployCustomTargetTypeIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference">ClouddeployCustomTargetTypeIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberCondition">ClouddeployCustomTargetTypeIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.condition"></a>

```typescript
public readonly condition: ClouddeployCustomTargetTypeIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference">ClouddeployCustomTargetTypeIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: ClouddeployCustomTargetTypeIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberCondition">ClouddeployCustomTargetTypeIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClouddeployCustomTargetTypeIamMemberCondition <a name="ClouddeployCustomTargetTypeIamMemberCondition" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberCondition.Initializer"></a>

```typescript
import { clouddeployCustomTargetTypeIamMember } from '@cdktf/provider-google'

const clouddeployCustomTargetTypeIamMemberCondition: clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/clouddeploy_custom_target_type_iam_member#expression ClouddeployCustomTargetTypeIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/clouddeploy_custom_target_type_iam_member#title ClouddeployCustomTargetTypeIamMember#title}. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/clouddeploy_custom_target_type_iam_member#description ClouddeployCustomTargetTypeIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/clouddeploy_custom_target_type_iam_member#expression ClouddeployCustomTargetTypeIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/clouddeploy_custom_target_type_iam_member#title ClouddeployCustomTargetTypeIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/clouddeploy_custom_target_type_iam_member#description ClouddeployCustomTargetTypeIamMember#description}.

---

### ClouddeployCustomTargetTypeIamMemberConfig <a name="ClouddeployCustomTargetTypeIamMemberConfig" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.Initializer"></a>

```typescript
import { clouddeployCustomTargetTypeIamMember } from '@cdktf/provider-google'

const clouddeployCustomTargetTypeIamMemberConfig: clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/clouddeploy_custom_target_type_iam_member#member ClouddeployCustomTargetTypeIamMember#member}. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/clouddeploy_custom_target_type_iam_member#name ClouddeployCustomTargetTypeIamMember#name}. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/clouddeploy_custom_target_type_iam_member#role ClouddeployCustomTargetTypeIamMember#role}. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberCondition">ClouddeployCustomTargetTypeIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/clouddeploy_custom_target_type_iam_member#id ClouddeployCustomTargetTypeIamMember#id}. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/clouddeploy_custom_target_type_iam_member#location ClouddeployCustomTargetTypeIamMember#location}. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/clouddeploy_custom_target_type_iam_member#project ClouddeployCustomTargetTypeIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/clouddeploy_custom_target_type_iam_member#member ClouddeployCustomTargetTypeIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/clouddeploy_custom_target_type_iam_member#name ClouddeployCustomTargetTypeIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/clouddeploy_custom_target_type_iam_member#role ClouddeployCustomTargetTypeIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: ClouddeployCustomTargetTypeIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberCondition">ClouddeployCustomTargetTypeIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/clouddeploy_custom_target_type_iam_member#condition ClouddeployCustomTargetTypeIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/clouddeploy_custom_target_type_iam_member#id ClouddeployCustomTargetTypeIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/clouddeploy_custom_target_type_iam_member#location ClouddeployCustomTargetTypeIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.24.0/docs/resources/clouddeploy_custom_target_type_iam_member#project ClouddeployCustomTargetTypeIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClouddeployCustomTargetTypeIamMemberConditionOutputReference <a name="ClouddeployCustomTargetTypeIamMemberConditionOutputReference" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { clouddeployCustomTargetTypeIamMember } from '@cdktf/provider-google'

new clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberCondition">ClouddeployCustomTargetTypeIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployCustomTargetTypeIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployCustomTargetTypeIamMember.ClouddeployCustomTargetTypeIamMemberCondition">ClouddeployCustomTargetTypeIamMemberCondition</a>

---



