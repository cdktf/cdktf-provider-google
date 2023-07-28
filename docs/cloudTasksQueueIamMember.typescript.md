# `google_cloud_tasks_queue_iam_member`

Refer to the Terraform Registory for docs: [`google_cloud_tasks_queue_iam_member`](https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/cloud_tasks_queue_iam_member).

# `cloudTasksQueueIamMember` Submodule <a name="`cloudTasksQueueIamMember` Submodule" id="@cdktf/provider-google.cloudTasksQueueIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudTasksQueueIamMember <a name="CloudTasksQueueIamMember" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/cloud_tasks_queue_iam_member google_cloud_tasks_queue_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.Initializer"></a>

```typescript
import { cloudTasksQueueIamMember } from '@cdktf/provider-google'

new cloudTasksQueueIamMember.CloudTasksQueueIamMember(scope: Construct, id: string, config: CloudTasksQueueIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig">CloudTasksQueueIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig">CloudTasksQueueIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.putCondition"></a>

```typescript
public putCondition(value: CloudTasksQueueIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberCondition">CloudTasksQueueIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.isConstruct"></a>

```typescript
import { cloudTasksQueueIamMember } from '@cdktf/provider-google'

cloudTasksQueueIamMember.CloudTasksQueueIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.isTerraformElement"></a>

```typescript
import { cloudTasksQueueIamMember } from '@cdktf/provider-google'

cloudTasksQueueIamMember.CloudTasksQueueIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.isTerraformResource"></a>

```typescript
import { cloudTasksQueueIamMember } from '@cdktf/provider-google'

cloudTasksQueueIamMember.CloudTasksQueueIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference">CloudTasksQueueIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberCondition">CloudTasksQueueIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.condition"></a>

```typescript
public readonly condition: CloudTasksQueueIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference">CloudTasksQueueIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: CloudTasksQueueIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberCondition">CloudTasksQueueIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudTasksQueueIamMemberCondition <a name="CloudTasksQueueIamMemberCondition" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberCondition.Initializer"></a>

```typescript
import { cloudTasksQueueIamMember } from '@cdktf/provider-google'

const cloudTasksQueueIamMemberCondition: cloudTasksQueueIamMember.CloudTasksQueueIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/cloud_tasks_queue_iam_member#expression CloudTasksQueueIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/cloud_tasks_queue_iam_member#title CloudTasksQueueIamMember#title}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/cloud_tasks_queue_iam_member#description CloudTasksQueueIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/cloud_tasks_queue_iam_member#expression CloudTasksQueueIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/cloud_tasks_queue_iam_member#title CloudTasksQueueIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/cloud_tasks_queue_iam_member#description CloudTasksQueueIamMember#description}.

---

### CloudTasksQueueIamMemberConfig <a name="CloudTasksQueueIamMemberConfig" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.Initializer"></a>

```typescript
import { cloudTasksQueueIamMember } from '@cdktf/provider-google'

const cloudTasksQueueIamMemberConfig: cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/cloud_tasks_queue_iam_member#member CloudTasksQueueIamMember#member}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/cloud_tasks_queue_iam_member#name CloudTasksQueueIamMember#name}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/cloud_tasks_queue_iam_member#role CloudTasksQueueIamMember#role}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberCondition">CloudTasksQueueIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/cloud_tasks_queue_iam_member#id CloudTasksQueueIamMember#id}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/cloud_tasks_queue_iam_member#location CloudTasksQueueIamMember#location}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/cloud_tasks_queue_iam_member#project CloudTasksQueueIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/cloud_tasks_queue_iam_member#member CloudTasksQueueIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/cloud_tasks_queue_iam_member#name CloudTasksQueueIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/cloud_tasks_queue_iam_member#role CloudTasksQueueIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: CloudTasksQueueIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberCondition">CloudTasksQueueIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/cloud_tasks_queue_iam_member#condition CloudTasksQueueIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/cloud_tasks_queue_iam_member#id CloudTasksQueueIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/cloud_tasks_queue_iam_member#location CloudTasksQueueIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.1/docs/resources/cloud_tasks_queue_iam_member#project CloudTasksQueueIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudTasksQueueIamMemberConditionOutputReference <a name="CloudTasksQueueIamMemberConditionOutputReference" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { cloudTasksQueueIamMember } from '@cdktf/provider-google'

new cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberCondition">CloudTasksQueueIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudTasksQueueIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueueIamMember.CloudTasksQueueIamMemberCondition">CloudTasksQueueIamMemberCondition</a>

---



