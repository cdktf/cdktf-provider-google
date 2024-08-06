# `computeRegionDiskIamMember` Submodule <a name="`computeRegionDiskIamMember` Submodule" id="@cdktf/provider-google.computeRegionDiskIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionDiskIamMember <a name="ComputeRegionDiskIamMember" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_disk_iam_member google_compute_region_disk_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.Initializer"></a>

```typescript
import { computeRegionDiskIamMember } from '@cdktf/provider-google'

new computeRegionDiskIamMember.ComputeRegionDiskIamMember(scope: Construct, id: string, config: ComputeRegionDiskIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig">ComputeRegionDiskIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig">ComputeRegionDiskIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.putCondition"></a>

```typescript
public putCondition(value: ComputeRegionDiskIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberCondition">ComputeRegionDiskIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionDiskIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.isConstruct"></a>

```typescript
import { computeRegionDiskIamMember } from '@cdktf/provider-google'

computeRegionDiskIamMember.ComputeRegionDiskIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.isTerraformElement"></a>

```typescript
import { computeRegionDiskIamMember } from '@cdktf/provider-google'

computeRegionDiskIamMember.ComputeRegionDiskIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.isTerraformResource"></a>

```typescript
import { computeRegionDiskIamMember } from '@cdktf/provider-google'

computeRegionDiskIamMember.ComputeRegionDiskIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.generateConfigForImport"></a>

```typescript
import { computeRegionDiskIamMember } from '@cdktf/provider-google'

computeRegionDiskIamMember.ComputeRegionDiskIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeRegionDiskIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRegionDiskIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRegionDiskIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_disk_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionDiskIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference">ComputeRegionDiskIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberCondition">ComputeRegionDiskIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.condition"></a>

```typescript
public readonly condition: ComputeRegionDiskIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference">ComputeRegionDiskIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: ComputeRegionDiskIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberCondition">ComputeRegionDiskIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionDiskIamMemberCondition <a name="ComputeRegionDiskIamMemberCondition" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberCondition.Initializer"></a>

```typescript
import { computeRegionDiskIamMember } from '@cdktf/provider-google'

const computeRegionDiskIamMemberCondition: computeRegionDiskIamMember.ComputeRegionDiskIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_disk_iam_member#expression ComputeRegionDiskIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_disk_iam_member#title ComputeRegionDiskIamMember#title}. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_disk_iam_member#description ComputeRegionDiskIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_disk_iam_member#expression ComputeRegionDiskIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_disk_iam_member#title ComputeRegionDiskIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_disk_iam_member#description ComputeRegionDiskIamMember#description}.

---

### ComputeRegionDiskIamMemberConfig <a name="ComputeRegionDiskIamMemberConfig" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.Initializer"></a>

```typescript
import { computeRegionDiskIamMember } from '@cdktf/provider-google'

const computeRegionDiskIamMemberConfig: computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_disk_iam_member#member ComputeRegionDiskIamMember#member}. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_disk_iam_member#name ComputeRegionDiskIamMember#name}. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_disk_iam_member#role ComputeRegionDiskIamMember#role}. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberCondition">ComputeRegionDiskIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_disk_iam_member#id ComputeRegionDiskIamMember#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_disk_iam_member#project ComputeRegionDiskIamMember#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_disk_iam_member#region ComputeRegionDiskIamMember#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_disk_iam_member#member ComputeRegionDiskIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_disk_iam_member#name ComputeRegionDiskIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_disk_iam_member#role ComputeRegionDiskIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: ComputeRegionDiskIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberCondition">ComputeRegionDiskIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_disk_iam_member#condition ComputeRegionDiskIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_disk_iam_member#id ComputeRegionDiskIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_disk_iam_member#project ComputeRegionDiskIamMember#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.40.0/docs/resources/compute_region_disk_iam_member#region ComputeRegionDiskIamMember#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionDiskIamMemberConditionOutputReference <a name="ComputeRegionDiskIamMemberConditionOutputReference" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { computeRegionDiskIamMember } from '@cdktf/provider-google'

new computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberCondition">ComputeRegionDiskIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeRegionDiskIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionDiskIamMember.ComputeRegionDiskIamMemberCondition">ComputeRegionDiskIamMemberCondition</a>

---



