# `clouddeployDeliveryPipelineIamMember` Submodule <a name="`clouddeployDeliveryPipelineIamMember` Submodule" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClouddeployDeliveryPipelineIamMember <a name="ClouddeployDeliveryPipelineIamMember" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/clouddeploy_delivery_pipeline_iam_member google_clouddeploy_delivery_pipeline_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.Initializer"></a>

```typescript
import { clouddeployDeliveryPipelineIamMember } from '@cdktf/provider-google'

new clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember(scope: Construct, id: string, config: ClouddeployDeliveryPipelineIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig">ClouddeployDeliveryPipelineIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig">ClouddeployDeliveryPipelineIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.putCondition"></a>

```typescript
public putCondition(value: ClouddeployDeliveryPipelineIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition">ClouddeployDeliveryPipelineIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ClouddeployDeliveryPipelineIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.isConstruct"></a>

```typescript
import { clouddeployDeliveryPipelineIamMember } from '@cdktf/provider-google'

clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.isTerraformElement"></a>

```typescript
import { clouddeployDeliveryPipelineIamMember } from '@cdktf/provider-google'

clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.isTerraformResource"></a>

```typescript
import { clouddeployDeliveryPipelineIamMember } from '@cdktf/provider-google'

clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.generateConfigForImport"></a>

```typescript
import { clouddeployDeliveryPipelineIamMember } from '@cdktf/provider-google'

clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ClouddeployDeliveryPipelineIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ClouddeployDeliveryPipelineIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ClouddeployDeliveryPipelineIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ClouddeployDeliveryPipelineIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference">ClouddeployDeliveryPipelineIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition">ClouddeployDeliveryPipelineIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.condition"></a>

```typescript
public readonly condition: ClouddeployDeliveryPipelineIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference">ClouddeployDeliveryPipelineIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: ClouddeployDeliveryPipelineIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition">ClouddeployDeliveryPipelineIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClouddeployDeliveryPipelineIamMemberCondition <a name="ClouddeployDeliveryPipelineIamMemberCondition" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition.Initializer"></a>

```typescript
import { clouddeployDeliveryPipelineIamMember } from '@cdktf/provider-google'

const clouddeployDeliveryPipelineIamMemberCondition: clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#expression ClouddeployDeliveryPipelineIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#title ClouddeployDeliveryPipelineIamMember#title}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#description ClouddeployDeliveryPipelineIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#expression ClouddeployDeliveryPipelineIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#title ClouddeployDeliveryPipelineIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#description ClouddeployDeliveryPipelineIamMember#description}.

---

### ClouddeployDeliveryPipelineIamMemberConfig <a name="ClouddeployDeliveryPipelineIamMemberConfig" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.Initializer"></a>

```typescript
import { clouddeployDeliveryPipelineIamMember } from '@cdktf/provider-google'

const clouddeployDeliveryPipelineIamMemberConfig: clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#member ClouddeployDeliveryPipelineIamMember#member}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#name ClouddeployDeliveryPipelineIamMember#name}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#role ClouddeployDeliveryPipelineIamMember#role}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition">ClouddeployDeliveryPipelineIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#id ClouddeployDeliveryPipelineIamMember#id}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#location ClouddeployDeliveryPipelineIamMember#location}. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#project ClouddeployDeliveryPipelineIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#member ClouddeployDeliveryPipelineIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#name ClouddeployDeliveryPipelineIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#role ClouddeployDeliveryPipelineIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: ClouddeployDeliveryPipelineIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition">ClouddeployDeliveryPipelineIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#condition ClouddeployDeliveryPipelineIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#id ClouddeployDeliveryPipelineIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#location ClouddeployDeliveryPipelineIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/clouddeploy_delivery_pipeline_iam_member#project ClouddeployDeliveryPipelineIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClouddeployDeliveryPipelineIamMemberConditionOutputReference <a name="ClouddeployDeliveryPipelineIamMemberConditionOutputReference" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { clouddeployDeliveryPipelineIamMember } from '@cdktf/provider-google'

new clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition">ClouddeployDeliveryPipelineIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddeployDeliveryPipelineIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployDeliveryPipelineIamMember.ClouddeployDeliveryPipelineIamMemberCondition">ClouddeployDeliveryPipelineIamMemberCondition</a>

---



