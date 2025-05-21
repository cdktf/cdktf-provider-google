# `sccV2OrganizationSourceIamMember` Submodule <a name="`sccV2OrganizationSourceIamMember` Submodule" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccV2OrganizationSourceIamMember <a name="SccV2OrganizationSourceIamMember" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/scc_v2_organization_source_iam_member google_scc_v2_organization_source_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer"></a>

```typescript
import { sccV2OrganizationSourceIamMember } from '@cdktf/provider-google'

new sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember(scope: Construct, id: string, config: SccV2OrganizationSourceIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig">SccV2OrganizationSourceIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig">SccV2OrganizationSourceIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.putCondition"></a>

```typescript
public putCondition(value: SccV2OrganizationSourceIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SccV2OrganizationSourceIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isConstruct"></a>

```typescript
import { sccV2OrganizationSourceIamMember } from '@cdktf/provider-google'

sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformElement"></a>

```typescript
import { sccV2OrganizationSourceIamMember } from '@cdktf/provider-google'

sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformResource"></a>

```typescript
import { sccV2OrganizationSourceIamMember } from '@cdktf/provider-google'

sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport"></a>

```typescript
import { sccV2OrganizationSourceIamMember } from '@cdktf/provider-google'

sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SccV2OrganizationSourceIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SccV2OrganizationSourceIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SccV2OrganizationSourceIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/scc_v2_organization_source_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SccV2OrganizationSourceIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference">SccV2OrganizationSourceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.source">source</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.condition"></a>

```typescript
public readonly condition: SccV2OrganizationSourceIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference">SccV2OrganizationSourceIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: SccV2OrganizationSourceIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SccV2OrganizationSourceIamMemberCondition <a name="SccV2OrganizationSourceIamMemberCondition" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.Initializer"></a>

```typescript
import { sccV2OrganizationSourceIamMember } from '@cdktf/provider-google'

const sccV2OrganizationSourceIamMemberCondition: sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/scc_v2_organization_source_iam_member#expression SccV2OrganizationSourceIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/scc_v2_organization_source_iam_member#title SccV2OrganizationSourceIamMember#title}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/scc_v2_organization_source_iam_member#description SccV2OrganizationSourceIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/scc_v2_organization_source_iam_member#expression SccV2OrganizationSourceIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/scc_v2_organization_source_iam_member#title SccV2OrganizationSourceIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/scc_v2_organization_source_iam_member#description SccV2OrganizationSourceIamMember#description}.

---

### SccV2OrganizationSourceIamMemberConfig <a name="SccV2OrganizationSourceIamMemberConfig" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.Initializer"></a>

```typescript
import { sccV2OrganizationSourceIamMember } from '@cdktf/provider-google'

const sccV2OrganizationSourceIamMemberConfig: sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/scc_v2_organization_source_iam_member#member SccV2OrganizationSourceIamMember#member}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.organization">organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/scc_v2_organization_source_iam_member#organization SccV2OrganizationSourceIamMember#organization}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/scc_v2_organization_source_iam_member#role SccV2OrganizationSourceIamMember#role}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/scc_v2_organization_source_iam_member#source SccV2OrganizationSourceIamMember#source}. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/scc_v2_organization_source_iam_member#id SccV2OrganizationSourceIamMember#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/scc_v2_organization_source_iam_member#member SccV2OrganizationSourceIamMember#member}.

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/scc_v2_organization_source_iam_member#organization SccV2OrganizationSourceIamMember#organization}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/scc_v2_organization_source_iam_member#role SccV2OrganizationSourceIamMember#role}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/scc_v2_organization_source_iam_member#source SccV2OrganizationSourceIamMember#source}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: SccV2OrganizationSourceIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/scc_v2_organization_source_iam_member#condition SccV2OrganizationSourceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/scc_v2_organization_source_iam_member#id SccV2OrganizationSourceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### SccV2OrganizationSourceIamMemberConditionOutputReference <a name="SccV2OrganizationSourceIamMemberConditionOutputReference" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { sccV2OrganizationSourceIamMember } from '@cdktf/provider-google'

new sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SccV2OrganizationSourceIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.sccV2OrganizationSourceIamMember.SccV2OrganizationSourceIamMemberCondition">SccV2OrganizationSourceIamMemberCondition</a>

---



