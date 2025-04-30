# `dataprocMetastoreFederationIamMember` Submodule <a name="`dataprocMetastoreFederationIamMember` Submodule" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocMetastoreFederationIamMember <a name="DataprocMetastoreFederationIamMember" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_federation_iam_member google_dataproc_metastore_federation_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.Initializer"></a>

```typescript
import { dataprocMetastoreFederationIamMember } from '@cdktf/provider-google'

new dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember(scope: Construct, id: string, config: DataprocMetastoreFederationIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig">DataprocMetastoreFederationIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig">DataprocMetastoreFederationIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.putCondition"></a>

```typescript
public putCondition(value: DataprocMetastoreFederationIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberCondition">DataprocMetastoreFederationIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataprocMetastoreFederationIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.isConstruct"></a>

```typescript
import { dataprocMetastoreFederationIamMember } from '@cdktf/provider-google'

dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.isTerraformElement"></a>

```typescript
import { dataprocMetastoreFederationIamMember } from '@cdktf/provider-google'

dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.isTerraformResource"></a>

```typescript
import { dataprocMetastoreFederationIamMember } from '@cdktf/provider-google'

dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.generateConfigForImport"></a>

```typescript
import { dataprocMetastoreFederationIamMember } from '@cdktf/provider-google'

dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataprocMetastoreFederationIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataprocMetastoreFederationIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataprocMetastoreFederationIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_federation_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataprocMetastoreFederationIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference">DataprocMetastoreFederationIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberCondition">DataprocMetastoreFederationIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.federationIdInput">federationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.federationId">federationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.condition"></a>

```typescript
public readonly condition: DataprocMetastoreFederationIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference">DataprocMetastoreFederationIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: DataprocMetastoreFederationIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberCondition">DataprocMetastoreFederationIamMemberCondition</a>

---

##### `federationIdInput`<sup>Optional</sup> <a name="federationIdInput" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.federationIdInput"></a>

```typescript
public readonly federationIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `federationId`<sup>Required</sup> <a name="federationId" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.federationId"></a>

```typescript
public readonly federationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocMetastoreFederationIamMemberCondition <a name="DataprocMetastoreFederationIamMemberCondition" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberCondition.Initializer"></a>

```typescript
import { dataprocMetastoreFederationIamMember } from '@cdktf/provider-google'

const dataprocMetastoreFederationIamMemberCondition: dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_federation_iam_member#expression DataprocMetastoreFederationIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_federation_iam_member#title DataprocMetastoreFederationIamMember#title}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_federation_iam_member#description DataprocMetastoreFederationIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_federation_iam_member#expression DataprocMetastoreFederationIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_federation_iam_member#title DataprocMetastoreFederationIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_federation_iam_member#description DataprocMetastoreFederationIamMember#description}.

---

### DataprocMetastoreFederationIamMemberConfig <a name="DataprocMetastoreFederationIamMemberConfig" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.Initializer"></a>

```typescript
import { dataprocMetastoreFederationIamMember } from '@cdktf/provider-google'

const dataprocMetastoreFederationIamMemberConfig: dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.federationId">federationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_federation_iam_member#federation_id DataprocMetastoreFederationIamMember#federation_id}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_federation_iam_member#member DataprocMetastoreFederationIamMember#member}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_federation_iam_member#role DataprocMetastoreFederationIamMember#role}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberCondition">DataprocMetastoreFederationIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_federation_iam_member#id DataprocMetastoreFederationIamMember#id}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_federation_iam_member#location DataprocMetastoreFederationIamMember#location}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_federation_iam_member#project DataprocMetastoreFederationIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `federationId`<sup>Required</sup> <a name="federationId" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.federationId"></a>

```typescript
public readonly federationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_federation_iam_member#federation_id DataprocMetastoreFederationIamMember#federation_id}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_federation_iam_member#member DataprocMetastoreFederationIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_federation_iam_member#role DataprocMetastoreFederationIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: DataprocMetastoreFederationIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberCondition">DataprocMetastoreFederationIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_federation_iam_member#condition DataprocMetastoreFederationIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_federation_iam_member#id DataprocMetastoreFederationIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_federation_iam_member#location DataprocMetastoreFederationIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/dataproc_metastore_federation_iam_member#project DataprocMetastoreFederationIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocMetastoreFederationIamMemberConditionOutputReference <a name="DataprocMetastoreFederationIamMemberConditionOutputReference" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { dataprocMetastoreFederationIamMember } from '@cdktf/provider-google'

new dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberCondition">DataprocMetastoreFederationIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataprocMetastoreFederationIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreFederationIamMember.DataprocMetastoreFederationIamMemberCondition">DataprocMetastoreFederationIamMemberCondition</a>

---



